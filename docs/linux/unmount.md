---
description: Linux-卸载分区
---

# Linux-卸载分区

##### 注意，卸载分区会格式化分区内所有的数据，请谨慎操作或进行数据备份

```bash
# df -hT
```

![](../assets/jianshu/2743275-d7fb0c77ed1e94d0.png)

```bash
准备卸载/dev/sda6这个分区
# umount /data2
重新检查一下
# df -hT
```

![](../assets/jianshu/2743275-2af8caea924f6612.png)

```bash
# fdisk -l
发现待分区的磁盘 /dev/sda
```

![](../assets/jianshu/2743275-c079a22b84557f0e.png)

```bash
对该磁盘进行卸载分区，输入m并回车
# fdisk /dev/sda
# m 输入帮助
# p 打印分区表
```

![](../assets/jianshu/2743275-85bcd2afce1808d7.png)

![](../assets/jianshu/2743275-95439e347a38fcf6.png)

卸载/dev/sda6分区
此时注意/dev/sda6是刚刚卸载了/data2的分区名

![](../assets/jianshu/2743275-d7fb0c77ed1e94d0.png)

```bash
# d 删除一个分区
# 6  删除第六个分区
```

![](../assets/jianshu/2743275-b7cbc678d5616a01.png)

```bash
重新打印分区表发现已卸载/dev/sda6分区
# p
```

![](../assets/jianshu/2743275-8969029b19517563.png)

```bash
# w   将表写入磁盘并退出
再检查一遍
# fdisk /dev/sda
# p 打印分区表
```

![](../assets/jianshu/2743275-fc6779f38f7ccb43.png)

![](../assets/jianshu/2743275-40d4fd8413ae4065.png)
