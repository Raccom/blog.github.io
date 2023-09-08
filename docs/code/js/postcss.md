# 移动端自适应Css

如果样式需要做根据视口大小来调整宽度，

可以使用 `postcss-px-to-viewport` 将CSS中的`px`单位转化为`vw`，`1vw` 等于`1/100`视口宽度。


1. 安装

:::code-group
```bash [yarn]
yarn add -D postcss-px-to-viewport-8-plugin
```
```bash [npm]
npm install postcss-px-to-viewport-8-plugin --save-dev
```
:::

2. 在项目根目录下创建 `postcss.config.cjs`

::: info postcss.config.cjs
```js
module.exports = {
    plugins: {
        'postcss-px-to-viewport-8-plugin': {
            unitToConvert: 'px',  // 需要转换的单位，默认为"px"
            viewportWidth: 1920, //  设计稿的视口宽度
            unitPrecision: 5, // 单位转换后保留的精度
            propList: ['*'], // 能转化为vw的属性列表
            viewportUnit: 'vw', //  希望使用的视口单位
            fontViewportUnit: 'vw', // 字体使用的视口单位
            selectorBlackList: [], // 需要忽略的CSS选择器 '.el','el'
            minPixelValue: 1, // 最小的转换数值，如果为1的话，只有大于1的值会被转换
            mediaQuery: false, // 媒体查询里的单位是否需要转换单位
            replace: true, // 是否直接更换属性值，而不添加备用属性
            exclude: [/node_modules/, /\/pages\/mobile\//], // 忽略某些文件夹下的文件或特定文件
            include: undefined,  // 如果设置了include，那将只有匹配到的文件才会被转换，例如只转换 'src/mobile' 下的文件 (include: /\/src\/mobile\//)
            landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
            landscapeUnit: 'vw' // 横屏时使用的单位
        }
    }
}
```
:::

- 其他参数

|参数|	解释|
|:---:|:----:|
|unitToConvert|	(String)需要转换的单位，默认为"px"|
|viewportWidth|	(Number)设计稿的视口宽度|
|unitPrecision|	(Number)单位转换后保留的精度|
|propList|	(Array)指定转换的css属性的单位|
|viewportUnit|	(String)指定需要转换成的视窗单位|
|fontViewportUnit|	(String)指定字体需要转换成的视窗单位|
|selectorBlackList|	(Array)需要忽略的CSS选择器，不会转为视窗单位，使用原有单位|
|minPixelValue|	(Number)设置最小的转换数值，默认为1，只有大于1的值会被转换|
|mediaQuery|	(Boolean)媒体查询里的单位是否需要转换单位|
|replace|	(Boolean)是否直接更换属性值，而不添加备用属性|
|exclude|	(Array or Regexp)忽略某些文件夹下的文件或特定文件，如 ‘node_modules’|
|include|	(Array or Regexp)只有匹配到的文件才会被转换，如’src/mobile’|
|landscape|	(Boolean)是否添加根据 landscapeWidth 生成的媒体查询条件|
|landscapeUnit|	(String)横屏时使用的单位|
|landscapeWidth|	(Number)横屏时使用的视口宽度|

:::tip
更多参数及设置参考 [官方文档](https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md)
:::