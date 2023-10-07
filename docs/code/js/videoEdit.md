# `@ffmpeg` 编辑视频:scissors:{#videoEdit}

在web端使用在线视频url或本地视频文件进行编辑，但是前端进行视频操作可能会导致性能下降。

同时由于 `@ffmpeg` 版本不同会导致使用的 `api` 不同，使用前需要注意版本问题。

如果使用的是<Badge type="tip" text="@ffmpeg^0.12.0" />需要使用新的api，详情查看 [文档](https://ffmpegwasm.netlify.app/docs/migration/)

## npm下载

1. `ffmpeg`
:::code-group
```bash [yarn]
yarn add @ffmpeg/ffmpeg@^0.11.0
```

```bash [npm]
npm install @ffmpeg/ffmpeg@^0.11.0
```
:::

2. `core`

:::code-group
```bash [yarn]
yarn add @ffmpeg/core@^0.11.0
```

```bash [npm]
npm install @ffmpeg/core@^0.11.0
```
:::

:::warning 注意
处理过程需要使用到 `SharedArrayBuffer` ，但出于安全策略 `SharedArrayBuffer` 已经被禁止使用了。

因此会提示报错信息 `SharedArrayBuffer is not defined` ，如果想在浏览器中继续使用需要设置响应头 COOP 和 COEP。

如果是 vite 项目，需要在 `vite.config.js` 中配置。

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

如果使用 nginx 部署上线，则需要在 `nginx.conf` 中配置。
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

>然而由于设置了响应头 COOP 和 COEP 强制了资源的同源获取，当我们需要获取不同源的图片等其他资源时就会获取失败，只能通过服务器代理的方式进行获取。

:::

## 剪辑

### 在线视频url剪辑

:::details Source
<<< @/code/snippets/js/videoCutOnline.vue {36-43}
:::

### 本地视频剪辑

:::details Source
<<< @/code/snippets/js/videoCutLocal.vue {42-49}
:::


## 合成

### 在线视频url中添加图片

:::details Source
<<< @/code/snippets/js/videoComposeOnline.vue {47-52}
:::


## 获取帧

### 在线视频url获取关键帧画面

:::details Source
<<< @/code/snippets/js/videoShotOnline.vue {43-51}
:::

### 本地视频获取关键帧画面

:::details Source
<<< @/code/snippets/js/videoShotLocal.vue {43-51}
:::


## 其他

当需要视频二次编辑时，由于第一次处理后的视频以二进制地址的形式存储在内存中，因此本地或在线地址读取的方式均无法使用，需要在读取时将其进行转换。

```js
if (url.startsWith('blob:')) {
    // 处理 Blob URL
    const arrayBuffer = await fetchBlobAsArrayBuffer(url);
    ffmpeg.FS('writeFile', inputName, new Uint8Array(arrayBuffer));
} else if (url.startsWith('http://') || url.startsWith('https://')) {
    // 处理网络地址
    await ffmpeg.FS('writeFile', inputName, await fetchFile(url));
}

async function fetchBlobAsArrayBuffer (url) {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsArrayBuffer(blob);
    });
}
```
