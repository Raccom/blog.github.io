<template>
    <input type="file" @change="handleImageFile" accept="image/*">
</template>
  
<script setup>
import { ref, onUnmounted } from 'vue'
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

const ffmpeg = createFFmpeg({ log: true });

const fileType = ref('');
const imageFile = ref(null);
const imageType = ref('')

const handleImageFile = (event) => {
    const file = event.target.files[0];
    imageFile.value = file;
    imageType.value = file.name.split(".").pop()

    const url = 'https://wfplayer.js.org/sample.mp4'
    const startT = 0; // 图片在视频出现的开始时间
    const endT = 3;  // 图片在视频出现的结束时间
    const x = 100; // 图片在视频中的水平位置
    const y = 50; // 图片在视频中的垂直位置
    const width = 176; // 图片的宽度
    const height = 176; // 图片的高度

    videoCompose(url, startT, endT, x, y, width, height, downloadFile)
};

const videoCompose = async (url, startT, endT, x, y, width, height, callBack) => {
    if (!ffmpeg.isLoaded()) {
        await ffmpeg.load();
    }
    if (!url) return;

    fileType.value = url.split(".").pop()
    const inputName = `input.${fileType.value}`;
    const outputName = `output.${fileType.value}`;
    const imageFileName = `image.${imageType.value}`;

    // 将输入文件保存到虚拟文件系统
    await ffmpeg.FS('writeFile', inputName, await fetchFile(url));
    await ffmpeg.FS('writeFile', imageFileName, await fetchFile(imageFile.value));

    try {
        await ffmpeg.run(
            `-i`, `${inputName}`,
            `-i`, `${imageFileName}`,
            `-filter_complex`, `[1:v]scale=${width}:${height}[scaled];[0:v][scaled]overlay=${x}:${y}:enable='between(t,${startT},${endT})'`,
            `${outputName}`
        );

        const outputData = ffmpeg.FS('readFile', outputName);
        const fileUrl = URL.createObjectURL(new Blob([outputData.buffer]));

        callBack && callBack(fileUrl)

        // 释放内存
        ffmpeg.FS('unlink', inputName);
        ffmpeg.FS('unlink', outputName);
    } catch (e) { }
};

const downloadFile = (url, fileName = `compose.${fileType.value}`) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
}

onUnmounted(() => {
    ffmpeg.exit();
})
</script>