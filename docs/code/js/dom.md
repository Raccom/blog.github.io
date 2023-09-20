# DOM{#dom}

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