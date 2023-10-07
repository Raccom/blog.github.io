interface RouterItem {
    name: string;
    path: string;
}

const jsRouter: RouterItem[] = [
    {
        name: 'Vite 配置文件',
        path: 'viteConfig'
    },
    {
        name: 'ffmpeg 编辑视频',
        path: 'videoEdit'
    },
    {
        name: '视频绿幕背景去除',
        path: 'videoRemove'
    },
    {
        name: '视频提取音频',
        path: 'videoSound'
    },
    {
        name: '移动端自适应',
        path: 'postcss'
    },
    {
        name: '浏览器',
        path: 'browser'
    },
]

const tsRouter: RouterItem[] = [
    {
        name: '类型挑战',
        path: 'typeChallenges'
    },
]

const javaRouter: RouterItem[] = [
    {
        name: '笔记',
        path: 'note'
    },
    {
        name: 'SQL 语句',
        path: 'sql'
    },
    {
        name: '知识点',
        path: 'point'
    },
]

const CommonRouter: RouterItem[] = [
    {
        name: 'Git',
        path: 'git'
    },
    {
        name: 'window 端口命令',
        path: 'port'
    },
    {
        name: 'Linux 打包脚本',
        path: 'ci'
    }
]

const cosName: RouterItem[] = [
    {
        name: 'site',
        path: 'site-1310654229'
    },
    {
        name: 'aigc',
        path: 'index-1310654229'
    },
]

const routerToPath = (routers: RouterItem[]) => {
    return routers.map(({name, path}) => {
        return {
            text: name,
            link: path
        }
    })
}

const cosNameToPath = (routers: RouterItem[]) => {
    return routers.map(({name, path}) => {
        return {
            text: name,
            link: `https://${path}.cos-website.ap-guangzhou.myqcloud.com`
        }
    })
}

export const cosPath = cosNameToPath(cosName)
export const jsPath = routerToPath(jsRouter)
export const tsPath = routerToPath(tsRouter)
export const javaPath = routerToPath(javaRouter)
export const CommonPath = routerToPath(CommonRouter)