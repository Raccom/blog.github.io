# Browser{#browser}

## chrome 小恐龙

使用chrome浏览器地址栏中输入 `chrome://dino/` 或 在离线模式下访问网页，然后按下 `space`。

[官方源码](https://source.chromium.org/chromium/chromium/src/+/main:components/neterror/resources/offline.js)， 
[Github源码](https://github.com/wayou/t-rex-runner)。

### 作弊

在游戏运行时在控制台中输入。

1. 无敌
```js
Runner.instance_.gameOver=function(){} 
```

2. 高跳（可以改括号内参数）
```js
Runner.instance_.tRex.setJumpVelocity(20)
```

3. 疾跑（可以改括号内参数）
```js
Runner.instance_.setSpeed(50) 
```

## 编辑 `html`

在控制台中输入以下代码，回车，即可在 `html` 中进行内容编辑。
```js
document.body.contentEditable = 'true'
```

## 去除 `html` 中的所有图片
```js
Array.from(document.getElementsByTagName("img")).forEach(lll => {
    lll.parentNode.removeChild(lll)
})
```
<style lang='scss'>
    .dinoIframe{
        width: 100%;
        .pc, .iframeContent{
            width: 100%;
        }
    }
</style>