import type {DefaultTheme} from 'vitepress'
import {javaPath, jsPath, tsPath, CommonPath} from './options'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/code': [
        {
            text: 'Java',
            collapsed: true,
            items: javaPath
        },
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
            text: 'Common',
            collapsed: true,
            items: CommonPath
        },
    ]
}
