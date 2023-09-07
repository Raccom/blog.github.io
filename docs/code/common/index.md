# Git {#git}

## Git 提交时替换回车符

由于 `window` 的回车与 `linux` 的回车格式不相同，为了兼容不同系统 `git` 会将文件中的回车符进行替换，如果需要保留格式提交则需要输入命令：

```bash
git rm -r --cached .

git config core.autocrlf false
```

## Git 退出输入模式

当进行回滚等操作时，`Git` 命令窗口可能会由于冲突进入输入模式，此时如果需要退出：

1. 按下 `Esc` 键进入输入模式
2. 按下 `Shift` + `;`
3. 输入 `q!` 或 `wq!`

:::info 信息
`q!` 是不保存改动，`wq!` 是保存文件的写入修改
:::


## 生成 SSH 密钥

在命令行中输入：

```bash
ssh-keygen
```

然后敲三次 `Enter`，最好不要设置密码，不然使用 `ssh` 拉取代码需要输入比较麻烦。

然后切换到 `C:\用户\Administrator\.ssh` 中，使用记事本打开 `.pub` 文件，将密钥复制到代码仓库设置的 `ssh密钥` 中即可。


## Git 代理

当使用 `HTTP` 的方式拉取其他用户的公开 `github` 的仓库，或提交代码时，经常会由于网络原因经常失败或中断，出现 **timeout: 443**。

:::tip 提示
使用 `ssh` 断开连接的情况较少，在使用个人仓库时推荐使用 `ssh` 连接。
:::

而且在使用了 `VPN` 后也没有效果，这是因为 `VPN` 并没有代理 `Git`， 需要输入命令：

:::code-group
```bash [http]
# 设置代理
git config --global http.proxy 127.0.0.1:7890

# 查看代理
git config --global --get http.proxy

# 取消代理
git config --global --unset http.proxy
```

```bash [https]
# 设置代理
git config --global https.proxy 127.0.0.1:7890

# 查看代理
git config --global --get https.proxy

# 取消代理
git config --global --unset https.proxy
```
:::

:::warning 注意
命令中的`7890` 端口是使用的 `VPN` 系统代理的端口，需要根据软件中使用的端口进行替换。

在使用完后需要取消代理，否则关闭`VPN`，`Git`的连接也会收到影响。
:::