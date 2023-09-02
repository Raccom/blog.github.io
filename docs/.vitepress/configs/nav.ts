import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '个人主页', link: '/' },
  {
    text: '日常笔记',
    link: 'https://blog.csdn.net/Raccon_'
  },
  {
    text: '组件',
    items: [
      { text: '介绍', link: '/intro/' },
    ],
    activeMatch: '/intro/'
  },
  { text: '后台管理', link: 'https://cc-1310654229.cos-website.ap-guangzhou.myqcloud.com' },
]
