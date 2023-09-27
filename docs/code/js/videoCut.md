# `@ffmpeg` 截取视频:scissors:{#videoCut}

在web端使用在线视频url或本地视频文件的裁剪，以及对视频画面的截取，但是前端进行视频操作可能会导致性能下降。

同时由于 `@ffmpeg` 版本不同会导致使用的 `api` 不同，使用前需要注意版本问题。

如果使用的是<Badge type="tip" text="@ffmpeg^0.12.0" />需要使用新的api，详情查看 [文档](https://ffmpegwasm.netlify.app/docs/migration/)

## npm下载

1. `ffmpeg`
:::code-group
```bash [yarn]
yarn add @ffmpeg/ffmpeg@^0.10.0
```

```bash [npm]
npm install @ffmpeg/ffmpeg@^0.10.0
```
:::

2. `core`

:::code-group
```bash [yarn]
yarn add @ffmpeg/core@^0.10.0
```

```bash [npm]
npm install @ffmpeg/core@^0.10.0
```
:::

:::warning 注意
处理过程需要使用到 `SharedArrayBuffer` ，但出于安全策略 `SharedArrayBuffer` 已经被禁止使用了。
如果想在浏览器中继续使用需要设置响应头 COOP 和 COEP。

如果是 vite 项目，需要在 vite.config.js 中配置。

```js
 server: {
        host: "localhost",
        // ...
        headers: {
            'Cross-Origin-Embedder-Policy': 'require-corp', // [!code focus]
            'Cross-Origin-Opener-Policy': 'same-origin', // [!code focus]
        },
        // ...
    },
```

如果使用 nginx 部署上线，则需要在 nginx.conf 中配置。
```
server {
    listen 443 ssl;
    # ...
    location / {
        add_header Cross-Origin-Embedder-Policy "require-corp"; // [!code focus]
        add_header Cross-Origin-Opener-Policy "same-origin"; // [!code focus]
    }
}
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