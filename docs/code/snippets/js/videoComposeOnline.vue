<template></template>

<script setup>
import { ref, onUnmounted, onMounted } from 'vue'
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

const ffmpeg = createFFmpeg({ log: true });
const fileType = ref("") // 视频文件类型

/**
 * 将图片合成到视频中
 * @param {string} url 视频在线地址
 * @param {object} picItem 图片素材对象
 * @param {string} picItem.startT 图片素材出现的开始时间
 * @param {number} picItem.duration 素材的出现持续时间
 * @param {number} picItem.scale 素材的放大比例
 * @param {string} picItem.url 图片素材url地址
 * @param {number} picItem.x 素材离视频顶部的距离
 * @param {number} picItem.y 素材离视频左侧的距离
 * @return {Promise<{outputName: string, fileUrl: string}> | undefined}
 */
 const videoCompose = async (url, picItem) => {
    if (!ffmpeg.isLoaded()) {
        await ffmpeg.load();
    }
    if (!url) return;

    const {duration, scale, startT, url: picUrl, x, y} = picItem;
    const type = url.split(".").pop();
    const inputName = `input.${type}`;
    const outputName = `output.${type}`;
    const imageType = picUrl.split(".").pop();
    const imageFileName = `image.${imageType}`;

    // 将输入文件保存到虚拟文件系统
    if (url.startsWith('blob:')) {
        // 处理 Blob URL
        const arrayBuffer = await fetchBlobAsArrayBuffer(url);
        ffmpeg.FS('writeFile', inputName, new Uint8Array(arrayBuffer));
    } else if (url.startsWith('http://') || url.startsWith('https://')) {
        // 处理网络地址
        await ffmpeg.FS('writeFile', inputName, await fetchFile(url));
    }
    await ffmpeg.FS('writeFile', imageFileName, await fetchFile(picUrl));

    // 运行 FFmpeg 命令
    try {
        if (imageType === 'gif') {
            await ffmpeg.run(
                `-i`, `${inputName}`,
                `-ignore_loop`, `0`,
                `-itsoffset`, `${+startT}`,
                `-i`, `${imageFileName}`,
                `-filter_complex`, `[0:0]scale=iw:ih[a];[1:0]scale=iw*${(scale).toFixed(1)}:ih*${(scale).toFixed(1)},fade=t=in:st=${+startT}:d=1:alpha=1[wm];[a][wm]overlay=x=${x}:y=${y}:shortest=1:enable='between(t,${+startT},${+startT + duration})'`,
                `${outputName}`,
                "-hide_banner"
            );
        } else {
            await ffmpeg.run(
                `-i`, `${inputName}`,
                `-i`, `${imageFileName}`,
                `-filter_complex`, `[1:v]scale=iw*${(scale).toFixed(1)}:ih*${(scale).toFixed(1)}[scaled];[0:v][scaled]overlay=${x}:${y}:enable='between(t,${+startT},${+startT + duration})'`,
                `${outputName}`,
                "-hide_banner"
            );
        }

        // 读取输出文件
        let arrayBuffer = ffmpeg.FS('readFile', outputName).buffer; // 读取缓存

        // 创建下载链接并通过回调下载保存到本地
        const fileUrl = URL.createObjectURL(new Blob([arrayBuffer])); // 转为Blob URL

        // 释放内存
        ffmpeg.FS('unlink', inputName);
        ffmpeg.FS('unlink', outputName);

        return {
            fileUrl,
            outputName
        };
    } catch (e) {
        console.log(e);
    }
}


const downloadFile = (url, fileName = `clip.mp4`) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
}

onMounted(async () => {
    const { fileUrl } = await videoCompose("https://wfplayer.js.org/sample.mp4", {
        duration: 3,
        scale: 1,
        startT: "0.00",
        url: 'https://raccom.cc/logo.png',
        x: 100,
        y: 100
    })
    downloadFile(fileUrl)
})

onUnmounted(() => {
    ffmpeg.exit();
})
</script>
