import {defineConfig} from 'vitepress';
import {head, nav, sidebar} from './configs'

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
    // 输出目录
    outDir: '../dist',
    // 语言
    lang: 'zh-CN',
    // 标题
    title: 'Raccom',
    // 描述
    description: 'tools',
    // 顶部栏配置
    head,
    // 将从URL中删除尾随的.html
    cleanUrls: true,
    // 最后更新时间
    lastUpdated: true,
    /* markdown 配置 */
    markdown: {
        lineNumbers: true,
    },

    themeConfig: {
        // 导航栏
        nav,
        // 侧导航栏
        sidebar,
        // 首页logo图
        logo: '/logo.png',
        // 本地搜索
        search: {
            provider: 'local'
        },

        /*
          algolia: {
            appId: '7H67QR5P0A',
            apiKey: 'deaab78bcdfe96b599497d25acc6460e',
            indexName: '',
             searchParameters: {
               facetFilters: [],
             },
          },
        */

        // 顶部栏右侧icon
        socialLinks: [{icon: 'github', link: 'https://github.com/raccom'}],

        /* 右侧大纲配置 */
        outline: {
            level: 'deep',
            label: '目录'
        },

        // 页面底部栏
        editLink: {
            pattern: 'https://github.com/Raccom/raccom.github.io/tree/main/docs/:path',
            text: '在 Github 上编辑此页'
        },

        // 上次更新
        lastUpdated: {
            text: '上次更新',
        },

        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },

        // 底部栏
        footer: {
            message: 'Early Access',
            copyright: 'Copyright © 2022-present Raccom'
        },

        darkModeSwitchLabel: '外观',
        returnToTopLabel: '返回顶部',
    },
});
