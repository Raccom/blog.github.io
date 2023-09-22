# Vite {#viteConfig}

## vite 模板 

- 💪 Vue 3、Vue-Router 4、Vite、esbuild
- ☀️ Pinia 状态管理
- 🛡 Axios 拦截封装
- 💥 ElementUI 组件自动导入

```bash
git clone https://github.com/Raccom/viteTemplate.git
```

## vite 配置

:::info vite.config.js
<<< @/code/snippets/js/viteConfig.js{77}

:::tip 提示
由于新版的vite已经不携带 `terser`，因此需要额外安装。

:::code-group

```bash [yarn]
yarn add terser
```

```bash [npm]
npm i terser
```

:::