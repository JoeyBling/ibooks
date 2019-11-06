---
description: Linux临时和永久关闭selinux
---

# Linux临时和永久关闭selinux

#### 临时关闭：
```bash
# setenforce 0
```
#### 永久关闭：
```bash
# vim /etc/sysconfig/selinux
SELINUX=enforcing 改为 SELINUX=disabled
-- 重启生效
# reboot
```
