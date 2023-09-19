import type {DefaultTheme} from 'vitepress'
import {javaPath, jsPath, tsPath, CommonPath} from './options'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/code/': {
        base: '/code/',
        items: [
            {
                text: 'Java',
                base: '/code/java/',
                collapsed: true,
                items: javaPath
            },
            {
                text: 'JavaScript',
                base: '/code/js/',
                collapsed: true,
                items: jsPath
            },
            {
                text: 'TypeScript',
                base: '/code/ts/',
                collapsed: true,
                items: tsPath
            },
            {
                text: 'Common',
                base: '/code/common/',
                collapsed: true,
                items: CommonPath
            },
        ]
    }
}
