import type { DefaultTheme } from 'vitepress'
import { cosPath } from './options'

export const nav: DefaultTheme.Config['nav'] = [
    {
        text: 'Nav',
        link: '/nav/',
        activeMatch: '/nav/'
    },
    {
        text: 'Language',
        items: [
            {
                // text: 'js',
                items: [
                    {
                        text: 'JavaScript',
                        link: '/code/js/'
                    },
                    {
                        text: 'TypeScript',
                        link: '/code/ts/'
                    },
                    {
                        text: 'Java',
                        link: '/code/java/'
                    },
                    {
                        text: 'Common',
                        link: '/code/common/'
                    }
                ]
            },
        ],
        activeMatch: '^/code'
    },
    {
        text: 'csdn',
        link: 'https://blog.csdn.net/Raccon_'
    },
    {
        text: 'Cos',
        items: cosPath,
    },
]
