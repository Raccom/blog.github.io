# Vite {#viteConfig}

## vite 模板 

- 💪 Vue 3、Vue-Router 4、Vite、esbuild
- ☀️ Pinia 状态管理
- 🛡 Axios 拦截封装
- 💥 ElementUI 组件自动导入

:::code-group

```bash [ssh]
git clone git@github.com:josliang/vitemp.git
```

```bash [https]
git clone https://github.com/josliang/vitemp.git
```
:::

## vite 配置

:::info vite.config.js
<<< @/code/snippets/js/viteConfig.js{77}

:::tip
由于新版的vite已经不携带 `terser`，因此需要额外安装。

:::code-group

```bash [yarn]
yarn add terser
```

```bash [npm]
npm i terser
```

:::
