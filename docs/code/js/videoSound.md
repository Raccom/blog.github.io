<script setup>
    import VideoSound from '/code/snippets/js/videoSound.vue';
</script>

# 视频提取音频 🔊{#videoSound}

将视频中的音频轨道分离出来，生成 `wav` 文件播放或下载

<div class="demo videoSound">
    <button>
        <label for="file" id="filename">选择视频文件</label>
        <VideoSound />
    </button>
</div>


<<< @/code/snippets/js/videoSound.vue {55,60-68}


<style lang='scss'>
    .videoSound{
        button {
            margin: 0 auto;
            display: block;
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



