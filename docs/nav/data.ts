import type {NavLink} from '../.vitepress/theme/types'

type NavData = {
    title: string
    items: NavLink[]
}

export const NAV_DATA: NavData[] = [
    {
        title: 'ChatGPT',
        items: [
            {
                icon: '/icons/poe.svg',
                title: 'Poe',
                desc: '快速、有用的AI聊天',
                link: 'https://poe.com/ChatGPT'
            },
            {
                icon: '/icons/forefront.svg',
                title: 'Forefront',
                desc: '你的人工智能助理',
                link: 'https://www.forefront.ai/app/chat'
            },
            {
                icon: '/icons/antdgpt.svg',
                title: '公益导航',
                desc: 'ChatGPT 无需翻墙，不限次数',
                link: 'http://124.220.104.235/web/chatgpt'
            },
        ]
    },
    {
        title: 'Code',
        items: [
            {
                icon: '/icons/niuke.png',
                title: '牛客',
                desc: '求职之前, 先上牛客',
                link: 'https://www.nowcoder.com/exam/intelligent'
            },
            {
                icon: '/icons/leetcode.svg',
                title: 'leetCode',
                desc: '全球 IT 人才职业技能成长平台',
                link: 'https://leetcode.cn/'
            },
        ]
    },
    {
        title: 'Doc',
        items: [
            {
                icon: '/icons/browser.svg',
                title: 'Chorme',
                desc: '浏览器工作原理与实践',
                link: 'https://blog.poetries.top/browser-working-principle/guide/part1/lesson01.html'
            },
            {
                icon: '/icons/css.png',
                title: 'Css 灵感',
                desc: '让你寻找到使用或者是学习 CSS 的灵感',
                link: 'https://chokcoco.github.io/CSS-Inspiration/#/'
            },
            {
                icon: '/icons/webpack.svg',
                title: 'webpack',
                desc: '深入浅出 Webpack',
                link: 'https://webpack.wuhaolin.cn/'
            },
            {
                icon: '/icons/ts.svg',
                title: 'TypeScript',
                desc: '深入理解 TypeScript',
                link: 'https://jkchao.github.io/typescript-book-chinese/'
            },
            {
                icon: '/icons/cocos.svg',
                title: 'COCOS',
                desc: 'TS 游戏引擎中文文档',
                link: 'https://docs.cocos.com/creator/manual/zh/'
            },
        ]
    },
    {
        title: '源码',
        items: [
            {
                icon: 'https://cn.vuejs.org/logo.svg',
                title: 'Vue 2技术揭秘',
                desc: '分析 Vue 2 源码课程',
                link: 'https://ustbhuangyi.github.io/vue-analysis/v2/prepare/'
            },
            {
                icon: '/icons/react.svg',
                title: 'React 技术揭秘',
                desc: '分析 React 源码课程',
                link: 'https://react.iamkasong.com/diff/multi.html'
            },
            {
                icon: 'https://cn.vuejs.org/logo.svg',
                title: 'Vue 3',
                desc: 'Vue 3 源码解析',
                link: 'https://template-explorer.vuejs.org/'
            },
            {
                icon: 'https://cn.vuejs.org/logo.svg',
                title: 'Vue 2',
                desc: 'Vue 2 源码解析',
                link: 'https://v2.template-explorer.vuejs.org/'
            },
            {
                icon: '/icons/ast.svg',
                title: 'AST',
                desc: 'AST 抽象语法树解析',
                link: 'https://astexplorer.net/'
            },
        ]
    },
    {
        title: '社区',
        items: [
            {
                title: 'Github',
                icon: {
                    svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>'
                },
                desc: '一个面向开源及私有软件项目的托管平台',
                link: 'https://github.com'
            },
        ]
    },
]
