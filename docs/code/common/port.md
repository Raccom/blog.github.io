# window 解除占用端口 {#port}

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
