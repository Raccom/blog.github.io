<template></template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

const ffmpeg = createFFmpeg({ log: true });
const fileType = ref("") // 视频文件类型

/**
 * 根据在线视频获取视频截图
 * @param {String} url 在线视频链接
 * @param {Number|String} count 截取图片的次数
 * @param {Number|String} interval 截取图片的间隔
 * @param {Function} callBack 回调
 */
const videoFrame = async (url, count, interval, callBack) => {
    if (!ffmpeg.isLoaded()) {
        await ffmpeg.load();
    }
    if(!url) return;

    fileType.value = url.split(".").pop()

    const inputName = `input.${fileType.value}`;

    // 将输入文件保存到虚拟文件系统
    await ffmpeg.FS('writeFile', inputName, await fetchFile(url));

    try {
        await ffmpeg.run(
            "-i", inputName,
            "-r", `${interval}`,
            "-ss", "0",
            "-vframes", `${count}`,
            "-f", "image2",
            "-s", "88*50",
            "image-%02d.png"
        );
        const baseArr = []

        for (let i = 0; i < count; i++) {
            let temp = i + 1;
            if (temp < 10) {
                temp = "0" + temp;
            }
            baseArr.push(
                arrayBufferToBase64(ffmpeg.FS("readFile", "image-" + temp + ".png"))
            );
        }

        callBack && callBack(baseArr)

        // 释放内存
        ffmpeg.FS('unlink', inputName);
    } catch (e) {}
}

const arrayBufferToBase64 = (array) => {
    array = new Uint8Array(array);
    var length = array.byteLength;
    var table = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];
    var base64Str = "";
    for (var i = 0; length - i >= 3; i += 3) {
        var num1 = array[i];
        var num2 = array[i + 1];
        var num3 = array[i + 2];
        base64Str +=
            table[num1 >>> 2] +
            table[((num1 & 0b11) << 4) | (num2 >>> 4)] +
            table[((num2 & 0b1111) << 2) | (num3 >>> 6)] +
            table[num3 & 0b111111];
    }
    var lastByte = length - i;
    if (lastByte === 1) {
        var lastNum1 = array[i];
        base64Str +=
            table[lastNum1 >>> 2] + table[(lastNum1 & 0b11) << 4] + "==";
    } else if (lastByte === 2) {
        // eslint-disable-next-line no-redeclare
        var lastNum1 = array[i];
        var lastNum2 = array[i + 1];
        base64Str +=
            table[lastNum1 >>> 2] +
            table[((lastNum1 & 0b11) << 4) | (lastNum2 >>> 4)] +
            table[(lastNum2 & 0b1111) << 2] +
            "=";
    }
    return base64Str
}

onMounted(() => {
    // 由于这里一秒截取一帧 ，截取5次， 所以如果视频不足5秒会导致截取和读取失败
    // 回调中是base64图片组成的数组，需要在前面拼接 "data:image/png;base64," ,然后在img的src中赋值即可
    videoFrame("https://wfplayer.js.org/sample.mp4", 5, 1, (data) => console.log(data))
})

onUnmounted(() => {
    ffmpeg.exit();
})
</script>