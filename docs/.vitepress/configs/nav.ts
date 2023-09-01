import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '个人主页', link: '/' },
  {
    text: '日常笔记',
    link: 'https://blog.csdn.net/Raccon_'
  },
  // {
  //   text: 'Api',
  //   items: [
  //     { text: '网易云', link: '/cloud/' },
  //   ],
  //   activeMatch: '/cloud/'
  // },
  { text: '后台管理', link: 'https://cc-1310654229.cos-website.ap-guangzhou.myqcloud.com' },
]
