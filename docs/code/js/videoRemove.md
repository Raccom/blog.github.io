<script setup>
    import {ref, computed, onMounted} from 'vue';
    import VideoRemove from '/code/snippets/js/videoRemove.vue';
    import VideoRemovePlus from '/code/snippets/js/videoRemovePlus.vue';

    const isMobile = ref(null)
        
    const showVideo = ref(false);
    const showVideoPlus = ref(false);

    onMounted(() => {
        isMobile.value = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    })
</script>

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

:::warning
由于uniapp中的canvas经过封装，且 uniapp 的 `drawImage` 无法绘制 `video` 标签内容，因此uniapp中不适用。
:::

## 处理效果

<div class="demo videoRemove">
    <div class='pc' v-if='!isMobile'>
        <button v-if="!showVideo" @click="showVideo=true">Preview</button>
        <VideoRemove v-if="showVideo"/>
        <div class='desc' v-if="showVideo">
            <p>⚠可以看到边缘仍有绿幕像素闪烁(暗色主题下更明显)。</p>
            <p>使用算法进行处理效果更好，但相应的资源的消耗也会提升，造成帧率下降。</p>
        </div>
    </div>
    <div class='desc' v-if='isMobile'>
        <p>⚠请在pc端查看效果</p>
    </div>
</div>

:::tip 跨域问题
因为canvas会受到跨域的影响导致画布污染，因此首先需要将 [测试视频](http://repo.bfw.wiki/bfwrepo/video/63e1dd7ddd2b0.mp4) 下载到本地。
:::

:::details
<<< @/code/snippets/js/videoRemove.vue
:::



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

:::tip
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



## 处理效果（优化）

<div class="demo videoRemove">
    <div class='pc' v-if='!isMobile'>
        <button v-if="!showVideoPlus" @click="showVideoPlus=true">Preview</button>
        <VideoRemovePlus v-if="showVideoPlus" />
    </div>
    <div class='desc' v-if='isMobile'>
        <p>⚠请在pc端查看效果</p>
    </div>
</div>

:::details
<<< @/code/snippets/js/videoRemovePlus.vue
:::

<style lang='scss'>
    .videoRemove{
        .videoBgRemove{
            display: flex;
            justify-content: center;
            margin-bottom: 16px;
        }

        .desc{
            font-size: 12px;
            line-height: 14px;
        }
    }
</style>
