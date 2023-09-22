<script setup>
    import VideoSound from '/code/snippets/js/videoSound.vue';
</script>

# 视频提取音频 🔊{#videoSound}

通过原生Js将视频中的音频轨道分离出来，生成 `wav` 文件播放或下载。

[Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) 为控制Web上的音频提供了一个强大而通用的系统，允许开发人员选择音频源、向音频添加效果、创建音频可视化、应用空间效果（如平移）等等。

本文的基本实现也全部基于Web Audio API。 

## 处理效果
<div class="demo videoSound">
    <button>
        <label for="file" id="filename">选择视频文件</label>
        <VideoSound />
    </button>
</div>

:::info Source
<<< @/code/snippets/js/videoSound.vue {55,60-68}
:::

<style lang='scss'>
    .videoSound{
        button {
            margin: 0 auto;
            display: block;
            position: relative;
            width: 50%;
            height: 50px;
            background-color: transparent;
            border: 1px solid gainsboro;
            border-radius: 10px;
            padding: 10px;

            #filename{
                font-weight: lighter;
            }
        }

        input[type=file] {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            filter: alpha(opacity=0);
            cursor: pointer;
        }
    }
</style>



