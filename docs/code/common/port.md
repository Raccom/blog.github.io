# window 端口命令 {#port}

## netstat

`netstat` 是一个常用的命令行工具，用于显示计算机网络连接和网络统计信息。

它可以显示本地计算机TCP和UDP端口的连接情况，包括本地IP地址、远程IP地址、状态、端口号等信息。

可以使用以下命令查看所有的TCP和UDP端口：

```shell
netstat -a
```

如果想要查看使用中的端口，可以使用以下命令：

```shell
netstat -an | findstr "LISTENING"
```

:::tip
此命令会过滤出所有处于监听状态的端口，包括TCP和UDP协议。
:::


## tasklist
`tasklist` 用于列出所有正在运行的进程的信息，可以使用该命令查看指定端口的使用情况。

通过以下命令可以查看所有占用80端口的进程并显示其PID：

```shell
tasklist | findstr "80"
```


## telnet

`telnet`是一个常用的网络协议，用于远程登录其他计算机的命令行界面，也可以通过telnet命令来测试端口是否开放。

使用以下命令可以测试80端口是否开放：

```shell
telnet localhost 80
```

:::tip
如果连接成功，则表示80端口是开放的。如果连接失败，则表示该端口没有开放。
:::

## Portqry

`Portqry` 可以有效检测计算机上的端口状态。

它可以检测TCP和UDP端口，还可以检测端口是否已经开放。

以下命令可以检测80端口是否开放：

```shell
portqry -n localhost -e 80
```

:::tip
如果80端口开放，则会显示状态为LISTENING。如果80端口没有开放，则会显示状态为NOT LISTENING。
:::


## 解除占用端口

1. 列出所有正在运行的端口：

```bash
netstat -ano
```

2. 查看被占用端口对应的 PID：

```bash
netstat -aon|findstr "8080"
```

3. 强制结束PID为9088的程序：

```bash
taskkill /T /F /PID 9088
```
