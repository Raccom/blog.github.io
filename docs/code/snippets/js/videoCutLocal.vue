<template>
    <input type="file" @change="fileChange">
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

const ffmpeg = createFFmpeg({ log: true });
const fileType = ref("") // 视频文件类型

const fileChange = (e) => {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    fileType.value = file.name.split(".").pop()

    videoCut(file, 0, 3, downloadFile)
}

/**
 * 根据选择的视频文件截取片段
 * @param {file} file 选择的视频文件
 * @param {number|string} startTime 截取开始时间
 * @param {number|string} endTime 截取结束时间
 * @param {Function} callBack 回调函数
 */
const videoCut = async (file, startTime, endTime, callBack) => {
    if (!ffmpeg.isLoaded()) {
        await ffmpeg.load();
    }
    if(!file) return;

    const inputName = `input.${fileType.value}`;
    const outputName = `output.${fileType.value}`;

    const orgFileBuffer = await file.arrayBuffer()

    // 将输入文件保存到虚拟文件系统
    await ffmpeg.FS('writeFile', inputName, await fetchFile(new Blob([orgFileBuffer])));

    try {
        await ffmpeg.run(
            '-ss', `${startTime}`,
            '-t', `${endTime - startTime}`,
            '-i', inputName,
            '-vcodec', 'copy',
            '-acodec', 'copy',
            outputName
        );

        // 读取输出文件
        let arrayBuffer = ffmpeg.FS('readFile', outputName).buffer; // 读取缓存

        // 创建下载链接并通过回调下载保存到本地
        const fileUrl = URL.createObjectURL(new Blob([arrayBuffer])); // 转为Blob URL
        callBack && callBack(fileUrl)

        // 释放内存
        ffmpeg.FS('unlink', inputName);
        ffmpeg.FS('unlink', outputName);
    } catch (e) {}
}

const downloadFile = (url, fileName = `clip.${fileType.value}`) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
}

onUnmounted(() => {
    ffmpeg.exit();
})
</script>