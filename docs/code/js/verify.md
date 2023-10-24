<script setup>
    import {ref, computed, onMounted} from 'vue';
    import FontVerify from '/code/snippets/js/fontVerify.vue';
    import SliderVerify from '/code/snippets/js/sliderVerify.vue';

    const isMobile = ref(null)
        
    const showFont = ref(true);
    const showSlider = ref(true);

    onMounted(() => {
        isMobile.value = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    })
</script>


# 人机验证 {#verify}

在一些资源下载、读取等场景添加人机认证可以防止一些简单的网络攻击。

本文将介绍两种原生实现。

## canvas绘制验证码

通过canvas绘制一直特定的文字并使用线条、颜色混淆。

<div class="demo">
    <div class='pc' v-if='!isMobile'>
        <button v-if="!showFont" @click="showFont=true">Preview</button>
        <FontVerify v-if="showFont" />
    </div>
    <div class='desc' v-if='isMobile'>
        <p>⚠请在pc端查看效果</p>
    </div>
</div>

:::details
<<< @/code/snippets/js/fontVerify.vue
:::


## 图片滑块验证

通过将两个相同的canvas裁剪出不同的形状，一个裁剪为拼图， 一个裁剪为缺少拼图的背景。

当用户拖动滑块时实际上是拖动偏移的canvas使之与背景canvas重合，以此来实现验证。

<div class="demo">
    <div class='pc' v-if='!isMobile'>
        <button v-show="!showSlider" @click="showSlider=true">Preview</button>
        <SliderVerify v-show="showSlider" />
    </div>
    <div class='desc' v-if='isMobile'>
        <p>⚠请在pc端查看效果</p>
    </div>
</div>

:::details
<<< @/code/snippets/js/sliderVerify.vue
:::


<style lang='scss' scoped></style>