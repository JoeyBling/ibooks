---
description: Linux安装python2.7.9
---

# Linux安装python2.7.9

> 官网地址：[https://www.python.org/downloads/](https://www.python.org/downloads/)

### 1、Linux下安装`(其他系统请自行前往官网安装)`
```bash
--- 安装依赖包
# cd /usr/local
# yum install zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gcc make -y
# wget https://www.python.org/ftp/python/2.7.9/Python-2.7.9.tgz
# tar -xzvf Python-2.7.9.tgz
# cd Python-2.7.9
# ./configure --prefix=/usr/local/Python2.7.9 --enable-shared -enable-unicode=ucs4
# make
# make install
# python -V
```
### 2、python解释器指向python2.7.9
```bash
# which python
# cd /usr/bin
# rm python
# ln -s /usr/local/Python2.7.9/bin/python python
# python -V  --执行报错
```
### 3、解决python -V执行报错
```bash
# cd /etc/ld.so.conf.d/
# echo "/usr/local/Python2.7.9/lib" > python2.7.conf
# ldconfig
# python -V
```
### 4、由于yum使用了原来python2.6的一些脚本，需要将yum重新导向原来的python2.6解释器才可以使用
```bash
# which yum
# vi /usr/bin/yum
----修改第一行路径为： #!/usr/bin/python2.6
```
