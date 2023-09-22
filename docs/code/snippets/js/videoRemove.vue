<template>
    <div class="videoBgRemove">
        <video id="video" src="/images/example.mp4" loop autoplay muted ref="video" style="width: 240px;height: 135px;"></video>
        <canvas id="output-canvas" width="240" height="135" willReadFrequently="true" ref="canvas"></canvas>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';

const video = ref(null);
const canvas = ref(null);
const ctx = ref(null);
const canvas_tmp = ref(null);
const ctx_tmp = ref(null);

const init = () => {
    ctx.value = canvas.value.getContext('2d');

    // 创建的canvas宽高最好与显示图片的canvas、video宽高一致
    canvas_tmp.value = document.createElement('canvas');
    canvas_tmp.value.setAttribute('width', 240);
    canvas_tmp.value.setAttribute('height', 135);
    ctx_tmp.value = canvas_tmp.value.getContext('2d');

    video.value.addEventListener('play', computeFrame);
}

const computeFrame = () => {
    if (video.value) {
        if (video.value.paused || video.value.ended) return;
    }
    // 如果视频比例和canvas比例不正确可能会出现显示形变， 调整除的值进行比例调整
    ctx_tmp.value.drawImage(video.value, 0, 0, video.value.clientWidth / 1, video.value.clientHeight / 1);

    // 获取到绘制的canvas的所有像素rgba值组成的数组
    let frame = ctx_tmp.value.getImageData(0, 0, video.value.clientWidth, video.value.clientHeight);

    // 共有多少像素点
    const pointLens = frame.data.length / 4;

    for (let i = 0; i < pointLens; i++) {
        let r = frame.data[i * 4];
        let g = frame.data[i * 4 + 1];
        let b = frame.data[i * 4 + 2];

        // 判断如果rgb值在这个范围内则是绿幕背景，设置alpha值为0 
        // 同理不同颜色的背景调整rgb的判断范围即可
        if (r < 100 && g > 120 && b < 200) {
            frame.data[i * 4 + 3] = 0;
        }
    }

    // 重新绘制到canvas中显示
    ctx.value.putImageData(frame, 0, 0);
    // 递归调用
    setTimeout(computeFrame, 0);
}

onMounted(() => {
    init();
})
</script>