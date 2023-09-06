import type {DefaultTheme} from 'vitepress'
import {javaPath, jsPath, tsPath} from './options'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/code': [
        {
            text: 'JavaScript',
            collapsed: true,
            items: jsPath
        },
        {
            text: 'TypeScript',
            collapsed: true,
            items: tsPath
        },
        {
            text: 'Java',
            collapsed: true,
            items: javaPath
        },
    ]
}
