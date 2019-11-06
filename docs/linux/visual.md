---
description: CentOS-6.X-图形界面安装
---

# CentOS-6.X-图形界面安装

##### 一、安装图形界面
```bash
# yum groupinstall -y "Desktop" "Desktop Platform" "Fonts" "General Purpose Desktop" "Graphical Administration Tools" "Input Methods" "Legacy X Window System compatibility" "Remote Desktop Clients" "X Window System"
# vi /etc/inittab
# 修改最后一行为id:5:initdefault:
# startx
# reboot
```

##### 二、安装中文输入法(可选)
```bash
# yum -y install "@Chinese Support"
```
