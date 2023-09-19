# Linux 打包脚本

通过编写 `sh` 脚本执行一系列的命令来提交代码。

还可以通过配合 `github` 的 `workflow` 实现上传代码到仓库时的自动打包部署。

```sh
#!/usr/bin/env sh

# 自动打包配置

set -x  # 这里是为了看错误日志

# 打包项目
npm run build

# 进入打包后的文件夹
cd dist

git init
git add -A
git commit -m 'auto deploy'

# 将本地的 main 分支强制提交到 git仓库 的 static-pages 分支

git push -f git仓库 main:static-pages
```