---
description: Linux下安装Git
---

# Linux下安装Git

#### 1、使用yum安装
```bash
# yum -y install git
# yum remove git
```

#### 2、源代码安装
```bash
---安装依赖的包
# yum -y install curl-devel expat-devel gettext-devel openssl-devel zlib-devel gcc perl-ExtUtils-MakeMaker zlib
# cd /usr/local
----下载git源码
# wget https://github.com/git/git/archive/v2.21.0.tar.gz
----解压git源码
# tar -zxvf v2.21.0.tar.gz
# cd git-2.21.0/
# mkdir /usr/local/git
----编译安装到指定目录
# make prefix=/usr/local/git all
# sudo make prefix=/usr/local/git install
# vim /etc/profile
----添加在文件的最后一行
export PATH=/usr/local/git/bin:$PATH
# source /etc/profile
# git --version
```

#### 3、FAQ
###### 1、 如果解压时出现报错，建议手动下载git源码包然后上传到服务器
```
gzip: stdin: unexpected end of file
tar: Unexpected EOF in archive
tar: Unexpected EOF in archive
tar: Error is not recoverable: exiting now
```
