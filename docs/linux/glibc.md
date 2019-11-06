---
description: Linux下安装GLIBC_2.15
---

# Linux下安装GLIBC_2-15

### 1、查看系统glibc支持的版本
```bash
# strings /lib64/libc.so.6 |grep GLIBC
# rpm -qa | grep glibc
```

### 2、升级glibc支持的版本到GLIBC_2.15
> 官网地址 ➡️ [http://www.gnu.org/software/libc/](http://www.gnu.org/software/libc/)

> 官网所有安装包 ➡️ [http://ftp.gnu.org/gnu/glibc/](http://ftp.gnu.org/gnu/glibc/)

```bash
# cd /usr/local
# wget http://ftp.gnu.org/gnu/libc/glibc-2.15.tar.xz
# tar -xvf glibc-2.15.tar.xz
# mkdir -p /var/VMdisks
# mv glibc-2.15 /var/VMdisks/
# cd /var/VMdisks/glibc-2.15/
# mkdir build && cd build/
--- 不要将 glibc 安装到默认的目录【/usr/local】或者 【任何自定义的目录】，请务必安装到【/usr】目录
# ../configure --prefix=/usr --disable-profile --enable-add-ons --with-headers=/usr/include --with-binutils=/usr/bin
# make -j4
# make install
--- 解决中文乱码问题
# make localedata/install-locales
```

###### 检查验证
```bash
# ll /lib64/libc*
--- 查看系统glibc支持的版本
# strings /lib64/libc.so.6 |grep GLIBC
# /lib64/libc.so.6
```

### 3、升级glibc挂了后可以救命的命令

**如果实在不幸，在升级glibc时挂掉了，执行各种命令都提示错误，比如：**

- `Segmentation fault`
- `error while loading shared libraries: libc.so.6: cannot open shared object file: No such file or directory`

**这类错误出现千万不要着急退出SSH，执行下面的命令是可以挽救的：**

```bash
# cd /lib64
# LD_PRELOAD=/lib64/libc-2.12.so ln -sf /lib64/libc-2.12.so libc.so.6
```

###### Tips：`libc-2.12.so`这个文件名根据你系统中的文件而定，如果有多个版本so文件可以逐个尝试
