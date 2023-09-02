import { h } from 'vue'
import { useData } from 'vitepress'
import Theme from 'vitepress/theme'
import AnimateTitle from "./components/AnimateTitle.vue";

import './styles/index.scss'

export default Object.assign({}, Theme, {

    NotFound: () => 'custom 404',

    Layout: () => {
        const props: Record<string, any> = {}
        // 获取 frontmatter
        const { frontmatter } = useData()

        /* 添加自定义 class */
        if (frontmatter.value?.layoutClass) {
            props.class = frontmatter.value.layoutClass
        }
        
        return h(Theme.Layout, props, {
            "home-hero-info": () => h(AnimateTitle),
        })
    }
})
