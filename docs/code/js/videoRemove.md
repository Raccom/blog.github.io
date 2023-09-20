# 视频去除绿幕背景 🎞{#videoRemove}

首先使用canvas的 `drawImage` 方法将video的当前帧画面绘制到canvas中，

然后再通过 `getImageData` 方法获取当前canvas的所有像素的`rgba`通道值组成的数组，

```
获取到的通道值数组:
[r,g,b,a,  r,g,b,a,  r,g,b,a,...]
    ↓         ↓         ↓
   像素1     像素2      像素3
```

每一组`rgba`的值就是一个像素，所以获取到的数组长度是canvas的像素的数量 * 4。

通过判断每一组 `rgb` 的值是否为绿幕像素，然后设置其 `alpha` 的值为 `0`。

:::warning 注意
由于uniapp中的canvas经过封装，且 uniapp 的 `drawImage` 无法绘制 `video` 标签内容，因此uniapp中不适用。
:::

## 本地部署

因为canvas会受到跨域的影响导致画布污染，因此首先需要将 [测试视频](repo.bfw.wiki/bfwrepo/video/63e1dd7ddd2b0.mp4) 下载到本地。

如果直接本地打开 `html` 的话同样会因为本地路径报跨域错误，

需要将 `html`，`js`，测试视频放在文件夹中部署一个本地服务器。

:::details 部署
使用 `npm` 库 `http-server` 进行本地部署

```bash
npm i http-server -g
```

切换到存放`html`，`js`，测试视频的文件夹，运行命令即可部署本地服务器

```bash
http-server
```
:::

## 代码实现

1. `html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
        video{
            width: 480px;
            height: 270px;
        }
    </style>
  </head>

  <body>
    <video id="video"  src="./63e1dd7ddd2b0.mp4"  loop autoplay muted></video>
    <canvas id="output-canvas" width="480" height="270" willReadFrequently="true"></canvas>
    <script type="text/javascript" src="processor2.js"></script>
  </body>
</html>
```

2. `processor2.js`
```js
let video, canvas, ctx, canvas_tmp, ctx_tmp;

function init () {
    video = document.getElementById('video');
    canvas = document.getElementById('output-canvas');
    ctx = canvas.getContext('2d');
    
	// 创建的canvas宽高最好与显示图片的canvas、video宽高一致
    canvas_tmp = document.createElement('canvas');
    canvas_tmp.setAttribute('width', 480);
    canvas_tmp.setAttribute('height', 270);
    ctx_tmp = canvas_tmp.getContext('2d');

    video.addEventListener('play', computeFrame);
}

function computeFrame () {
    if (video) {
        if (video.paused || video.ended) return;
    }
    // 如果视频比例和canvas比例不正确可能会出现显示形变， 调整除的值进行比例调整
    ctx_tmp.drawImage(video, 0, 0, video.clientWidth / 1, video.clientHeight / 1);

	// 获取到绘制的canvas的所有像素rgba值组成的数组
    let frame = ctx_tmp.getImageData(0, 0, video.clientWidth, video.clientHeight);

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
    ctx.putImageData(frame, 0, 0);
    // 递归调用
    setTimeout(computeFrame, 0);
}


document.addEventListener("DOMContentLoaded", () => {
    init();
});
```

使用本地服务器访问html即可看到效果，可以看到边缘仍有绿幕像素闪烁，

使用算法进行处理效果更好，但相应的资源的消耗也会提升，造成帧率下降。

## 优化

### 羽化

通过上述 `rgb` 值的筛选后仍有一些绿幕像素由于 `rgb` 值与人物颜色相近而无法处理，

扩大 `rgb` 值的筛选范围又导致人物像素出现镂空，因此我们需要对边缘的像素进行处理。

1. 获取处理像素的 3x3 范围内的像素

```
假设 x 为我们需要处理的像素值， 获取周围的所有像素 -> 1, 2, 3, 4, 6, 7, 8, 9
[
    [1, 2, 3],
    [4, x, 6],
    [7, 8, 9],
]
```

2. 计算周围所有像素中透明通道为 0 的个数

```
假设透明通道为 0 的是 1, 2, 3
[
    [0  , 0  ,  0 ],
    [255, x  , 255],
    [255, 255, 255],
]
```

3. 重新计算处理像素的 `alpha` 值

由于 `x` 周围的透明像素有3个，那么 `x` 的 `alpha` 值为 `(255 / 8) * (8 - 3)`，

相当于 `x` 周围有几个像素就把 255 分为几份，周围每有一个像素的 `alpha` 为 0， 就减一份。

计算完之后把结果赋给 `x` 的 `alpha` 值。

:::warning 注意
由于遍历时 前一个像素的修改 会影响 后一个像素获取周围的值。

```
对 x 的修改会影响 y 的计算
[
    [1, 2, 3 , 4 ],
    [5, x, y , 8 ],
    [9, 1, 11, 12],
]
```

因此需要将第一次 `rgb` 筛选后的数据做一次深拷贝，获取的值基于拷贝后的值。
:::

### 颜色过渡

在计算 `alpha` 值的时候将周围像素的 `rgb` 各个通道的值求和计算出平均值，

修改处理像素的 `alpha` 值时连带 `rgb` 值一起修改。



### 代码实现（优化）
```js
// 新增羽化和颜色过渡

// processor2.js
let video, canvas, ctx, canvas_tmp, ctx_tmp;

function init () {
    video = document.getElementById('video');
    canvas = document.getElementById('output-canvas');
    ctx = canvas.getContext('2d');
    
	// 创建的canvas宽高最好与显示图片的canvas、video宽高一致
    canvas_tmp = document.createElement('canvas');
    canvas_tmp.setAttribute('width', 480);
    canvas_tmp.setAttribute('height', 270);
    ctx_tmp = canvas_tmp.getContext('2d');

    video.addEventListener('play', computeFrame);
}


function numToPoint (num, width) {
    let col = num % width;
    let row = Math.floor(num / width);
    row = col === 0 ? row : row + 1;
    col = col === 0 ? width : col;
    return [row, col];
}

function pointToNum (point, width) {
    let [row, col] = point;
    return (row - 1) * width + col
}

function getAroundPoint (point, width, height, area) {
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

function computeFrame () {
    if (video) {
        if (video.paused || video.ended) return;
    }
    ctx_tmp.drawImage(video, 0, 0, video.clientWidth, video.clientHeight);
    let frame = ctx_tmp.getImageData(0, 0, video.clientWidth, video.clientHeight);

    //----- emergence ----------
    const height = frame.height;
    const width = frame.width;
    const pointLens = frame.data.length / 4;


    for (let i = 0; i < pointLens; i++) {
        let r = frame.data[i * 4];
        let g = frame.data[i * 4 + 1];
        let b = frame.data[i * 4 + 2];
        if (r < 150 && g > 200 && b < 150) {
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
    ctx.putImageData(frame, 0, 0);
    setTimeout(computeFrame, 0);
}


document.addEventListener("DOMContentLoaded", () => {
    init();
});
```