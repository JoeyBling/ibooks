---
description: nohup 和 >/dev/null 2>&1
---

# nohup 和 >/dev/null 2>&1

#### 一、用途：`nohup`表示永久运行 `&`表示后台运行

在应用Unix/Linux时，我们一般想让某个程序在后台运行
```bash
# nohup ./start-mysql.sh &
```

该命令的一般形式为：

```bash
# nohup command &
```

在缺省情况下该作业的所有输出都被重定向到一个名为`nohup.out`的文件中,除非另外指定了输出文件：

```bash
# nohup command > myout.file 2>&1 &
```

在上面的例子中，输出被重定向到myout.file文件中。

#### 二、>/dev/null 2>&1

`/dev/null`代表空设备文件，也就是不输出任何信息到终端，说白了就是不显示任何信息。

```bash
# nohup command 1>/dev/null 2>&1 &
```