# 视频中提取音频

将视频中的音频轨道分离出来，生成 `wav` 文件播放或下载

```html
<button>
    <label for="file" id="filename">选择视频文件</label>
    <input type="file" name="file" id="file" accept="video/*,audio/*" @change="fileChange">
</button>
```
```css
button {
    position: absolute;
    top: calc(50vh - 30px);
    left: 10%;
    width: 80%;
    height: 60px;
    background-color: transparent;
    border: 1px solid gainsboro;
    border-radius: 10px;
    padding: 10px;
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
```
<<< @/code/snippets/js/getVideoSound.js

