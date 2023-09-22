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

const numToPoint = (num, width) => {
    let col = num % width;
    let row = Math.floor(num / width);
    row = col === 0 ? row : row + 1;
    col = col === 0 ? width : col;
    return [row, col];
}

const pointToNum = (point, width) => {
    let [row, col] = point;
    return (row - 1) * width + col
}

const getAroundPoint = (point, width, height, area) => {
    let [row, col] = point;
    let allAround = [];
    if (row > height || col > width || row < 0 || col < 0) return allAround;
    for (let i = 0; i < area; i++) {
        let pRow = row - 1 + i;
        for (let j = 0; j < area; j++) {
            let pCol = col - 1 + j;
            if (i === area % 2 && j === area % 2) continue;
            allAround.push([pRow, pCol]);
        }
    }
    return allAround.filter(([iRow, iCol]) => {
        return (iRow > 0 && iCol > 0) && (iRow <= height && iCol <= width);
    })
}


const computeFrame = () => {
    if (video.value) {
        if (video.value.paused || video.value.ended) return;
    }
    // 如果视频比例和canvas比例不正确可能会出现显示形变， 调整除的值进行比例调整
    ctx_tmp.value.drawImage(video.value, 0, 0, video.value.clientWidth / 1, video.value.clientHeight / 1);

    // 获取到绘制的canvas的所有像素rgba值组成的数组
    let frame = ctx_tmp.value.getImageData(0, 0, video.value.clientWidth, video.value.clientHeight);

    //----- emergence ----------
    const height = frame.height;
    const width = frame.width;
    const pointLens = frame.data.length / 4;


    for (let i = 0; i < pointLens; i++) {
        let r = frame.data[i * 4];
        let g = frame.data[i * 4 + 1];
        let b = frame.data[i * 4 + 2];
        if (r < 100 && g > 120 && b < 200) {
            frame.data[i * 4 + 3] = 0;
        }
    }

    const tempData = [...frame.data]
    for (let i = 0; i < pointLens; i++) {
        if (frame.data[i * 4 + 3] === 0) continue
        const currentPoint = numToPoint(i + 1, width);
        const arroundPoint = getAroundPoint(currentPoint, width, height, 3);
        let opNum = 0;
        let rSum = 0;
        let gSum = 0;
        let bSum = 0;
        arroundPoint.forEach((position) => {
            const index = pointToNum(position, width);
            rSum = rSum + tempData[(index - 1) * 4];
            gSum = gSum + tempData[(index - 1) * 4 + 1];
            bSum = bSum + tempData[(index - 1) * 4 + 2];
            if (tempData[(index - 1) * 4 + 3] !== 255) opNum++;
        })
        let alpha = (255 / arroundPoint.length) * (arroundPoint.length - opNum);
        if (alpha !== 255) {
            // debugger
            frame.data[i * 4] = parseInt(rSum / arroundPoint.length);
            frame.data[i * 4 + 1] = parseInt(gSum / arroundPoint.length);
            frame.data[i * 4 + 2] = parseInt(bSum / arroundPoint.length);
            frame.data[i * 4 + 3] = parseInt(alpha);
        }
    }

    //------------------------
    ctx.value.putImageData(frame, 0, 0);
    setTimeout(computeFrame, 0);
}

onMounted(() => {
    init();
})
</script>