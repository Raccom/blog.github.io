# `@ffmpeg` 截取视频:scissors:{#videoCut}

在web端使用在线视频url或本地视频文件的裁剪，以及对视频画面的截取，但是前端进行视频操作可能会导致性能下降。

同时由于 `@ffmpeg` 版本不同会导致使用的 `api` 不同，使用前需要注意版本问题。

如果使用的是<Badge type="tip" text="@ffmpeg^0.12.0" />需要使用新的api，详情查看 [文档](https://ffmpegwasm.netlify.app/docs/migration/)

## npm下载
:::code-group
```bash [yarn]
yarn add @ffmpeg/ffmpeg@^0.10.0

yarn add @ffmpeg/core@^0.10.0
```

```bash [npm]
npm install @ffmpeg/ffmpeg@^0.10.0

npm install @ffmpeg/core@^0.10.0
```
:::

## 在线视频url剪辑

:::details Source
<<< @/code/snippets/js/videoCutOnline.vue {36-43}
:::

## 本地视频文件剪辑

:::details Source
<<< @/code/snippets/js/videoCutLocal.vue {42-49}
:::

## 获取视频画面截图

:::details Source
<<< @/code/snippets/js/videoShotLocal.vue {43-51}
:::