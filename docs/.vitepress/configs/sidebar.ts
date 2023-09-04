import type { DefaultTheme } from 'vitepress'
import { jsPath, tsPath, javaPath } from './options'

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