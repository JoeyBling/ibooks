---
description: Linux-Apache服务不能访问文件解决方案
---

# Linux-Apache服务不能访问文件解决方案

##### httpd服务url地址不能访问文件 请先关闭selinux再reboot重启

###### 关闭selinux
```bash
# vim /etc/selinux/config
SELINUX更改为
SELINUX=disabled
# reboot
```

重启后访问http地址ok
