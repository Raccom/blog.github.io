import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = [
    { text: '介绍', link: '/intro/' },
    { text: '快速开始', link: '/start/' },
    { text: '首页', link: '/home/' },
    { text: '前端导航', link: '/nav/' },
    {
        text: 'Api', items: [
            { text: '网易云', link: '/cloud/' }, 
        ]
    },
]