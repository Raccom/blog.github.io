interface RouterItem {
    name: string;
    path: string;
}

const jsRouter: RouterItem[] = [
    {
        name: 'index',
        path: ''
    },
]

const tsRouter: RouterItem[] = [
    {
        name: 'index',
        path: ''
    },
]

const javaRouter: RouterItem[] = [
    {
        name: 'index',
        path: ''
    },
]

const cosName: RouterItem[] = [
    {
        name: 'cc',
        path: 'cc-1310654229'
    },
    {
        name: 'site',
        path: 'site-1310654229'
    },
    {
        name: 'index',
        path: 'index-1310654229'
    },
]

const routerToPath = (routers: RouterItem[], rootPath: string) => {
    return routers.map(({name, path}) => {
        return {
            text: name,
            link: `${rootPath}/${path}`
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
export const jsPath = routerToPath(jsRouter, '/code/js')
export const tsPath = routerToPath(tsRouter, '/code/ts')
export const javaPath = routerToPath(javaRouter, '/code/java')