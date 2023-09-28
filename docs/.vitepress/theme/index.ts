import { h, watch } from 'vue'
import { EnhanceAppContext, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import AsideSponsors from './components/AsideSponsors.vue'
import NavLinks from './components/NavLinks.vue'

import './styles/index.scss'

if (typeof window !== 'undefined') {
    /* 删除浏览器中的缓存 */
    if ('caches' in window) {
        caches.keys().then(function (keyList) {
            return Promise.all(
                keyList.map(function (key) {
                    return caches.delete(key)
                })
            )
        })
    }
}

export default {
    extends: DefaultTheme,
    NotFound: () => 'custom 404',
    Layout: () => {
        const props: Record<string, any> = {}
        // 获取 frontmatter
        const { frontmatter } = useData()

        /* 添加自定义 class */
        if (frontmatter.value?.layoutClass) {
            props.class = frontmatter.value.layoutClass
        }

        return h(DefaultTheme.Layout, props, {
            'aside-ads-before': () => h(AsideSponsors),
        })
    },
    enhanceApp({ app, router }: EnhanceAppContext) {
        app.component('NavLinks', NavLinks)
        app.provide('DEV', process.env.NODE_ENV === 'development')
        if (typeof window !== 'undefined') {
            watch(
                () => router.route.data.relativePath,
                () => { },
                { immediate: true }
            )
        }
    }
}