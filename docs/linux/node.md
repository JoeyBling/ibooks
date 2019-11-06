---
description: Linux或Win下安装node和npm
---

# Linux或Win下安装node和npm

#### 一、离线安装Node

> 官网下载链接：https://nodejs.org/zh-cn/download/
> node和npm对应关系：[https://nodejs.org/zh-cn/download/releases/](https://nodejs.org/zh-cn/download/releases/)

![](../assets/jianshu/2743275-497a8e6f4e7c11d2.png)

**解压目录**

```bash
# cd /usr/local
# yum install -y xz
# xz -d node-v8.11.1-linux-x64.tar.xz
# tar -xf node-v8.11.1-linux-x64.tar
```

这里想要全局使用`npm` 和 `node`,就需要做相关软链，如下！
```bash
# cd /usr/local/bin
# ln -s /usr/local/src/node-v8.10.0-linux-x64/bin/npm
# ln -s /usr/local/src/node-v8.10.0-linux-x64/bin/node
```

然后即可在任意位置执行 `node  -v`   `npm  -v`  查看相应的版本，则安装完成！

#### 二、yum安装node和npm`(Linux快速安装)`
```bash
# yum install epel-release -y
# yum install nodejs -y
```

#### 三、使用淘宝镜像站`(建议跳过此步骤，不建议使用)`
```bash
# npm config get registry // https://registry.npmjs.org/
# npm config set registry https://registry.npm.taobao.org
---- 验证是否配置成功
# npm config get registry
```

#### 四、指定全局安装路径和缓存路径`(看自己选择是否使用)`

> 设置全局模块的安装路径到 `node_global` 文件夹，
> 设置缓存到 `node_cache` 文件夹

```bash
# npm config set prefix D:\nodejs\node_global
# npm config set cache D:\nodejs\node_cache
---- 验证是否配置成功
# npm config get cache
# npm ls -g
```

#### 五、安装 cnpm`(看自己选择是否使用)`
```bash
# npm install cnpm -g --registry=https://registry.npm.taobao.org
# cnpm -v
```

#### Tips:
1. **npm默认的全局目录可执行命令查看**
```bash
# npm config ls
```
