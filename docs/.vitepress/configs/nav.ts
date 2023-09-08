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
                        text: 'Java',
                        link: '/code/java/first',
                        activeMatch: '^/code/java'
                    },
                    {
                        text: 'JavaScript',
                        link: '/code/js/getVideoSound',
                        activeMatch: '^/code/js'
                    },
                    {
                        text: 'TypeScript',
                        link: '/code/ts/typeChallenges',
                        activeMatch: '^/code/ts'
                    },
                    {
                        text: 'Common',
                        link: '/code/common/git',
                        activeMatch: '^/code/common'
                    }
                ]
            },
        ],
        activeMatch: '^/code'
    },
    {
        text: 'Site',
        link: '/iframe/cc',
        activeMatch: '^/iframe/'
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
