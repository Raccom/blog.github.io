import { defineConfig } from 'vitepress'

import { head, nav, sidebar } from './configs'

export default defineConfig({
  outDir: '../dist',
  lang: 'zh-CN',
  title: 'Raccom',
  description: '记录前端歪门邪道奇淫技巧、日常提效工具、上班摸鱼、同性交友等',
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true
  },

  /* 主题配置 */
  themeConfig: {
    nav,
    sidebar,
    i18nRouting: false,
    logo: '/logo.png',

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录'
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/raccom' }],

    footer: {
      message: '',
      copyright: 'Copyright © 2023 Raccom'
    },

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})
