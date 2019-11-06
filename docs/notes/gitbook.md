---
description: GitBook的安装、卸载、常见问题
---

# GitBook的安装、卸载、常见问题

##### Tips:博主使用的版本
- [博主博客地址](https://zhousiwei.gitee.io/)
- **`Node v8.11.2` `npm v6.9.0` `gitbook v3.2.3` `服务器 CentOS6.5`**

> 官方GitHub:[https://github.com/GitbookIO/gitbook-cli](https://github.com/GitbookIO/gitbook-cli)

> [GitBook相关配置及优化](https://www.jianshu.com/p/53fccf623f1c)

---

## 一、卸载GitBook`(没有安装的跳过此步骤)`
###### Tips:前导摘要：记得有一次不小心卸载了一个东西，后面执行gitbook init报错：`Cannot find module 'internal/util/types`

> 找到`C:\Users\{User}\.gitbook` 找到并删除此文件夹

删除后执行命令
```bash
# npm uninstall -g gitbook
# npm uninstall -g gitbook-cli
--- 清除npm缓存
# npm cache clean --force
```
-------------
## 二、安装GitBook
> 需要node环境 ➡️ [Linux或Win下安装node和npm](https://www.jianshu.com/p/f8b0a4f7a822)
> 需要Git环境 ➡️ [https://www.jianshu.com/p/f2da5e76a588](https://www.jianshu.com/p/f2da5e76a588)

```bash
# npm install gitbook -g
# npm install -g gitbook-cli
--- 如果没有安装gitbook,此命令会默认同时安装 GitBook
# gitbook -V
--- 列出本地所有的gitbook版本
# gitbook ls
```

##### Tips:`GitBook`常用命令
- `gitbook -V`      查看版本号
- `gitbook ls` 列出本地所有的gitbook版本
- `gitbook init`    初始化
- `gitbook install`    安装插件
- `gitbook serve`   预览
- `gitbook build`   生成
- `gitbook build --gitbook=2.6.7` 生成时指定gitbook的版本, 本地没有会先下载
- `gitbook uninstall 2.6.7`   卸载指定版本号的gitbook
- `gitbook fetch [version]`      获取[版本]下载并安装<版本>
- `gitbook --help`   显示gitbook-cli帮助文档
- `gitbook help`   列出 gitbook 所有的命令
- `gitbook ls-remote`  列出NPM上的可用版本：
---
## 三、[GitBook插件](https://www.jianshu.com/p/53fccf623f1c)

---
## 五、作者寄语
> Everything is ok. But you have to do by yourself.
