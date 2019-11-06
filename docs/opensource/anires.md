---
description: 一个会动的简历
---

# 一个会动的简历模板 <GitHubLink repo="JoeyBling/anires"/>
- 功能还很少，欢迎各位给我提意见和建议~

**本项目源于：[https://github.com/jirengu-inc/animating-resume](https://github.com/jirengu-inc/animating-resume "https://github.com/jirengu-inc/animating-resume")。向作者表示深深的敬意。**

## 线上预览

> **This is my resume ➡️ [预览](https://zhousiwei.gitee.io/anires/index.html "https://zhousiwei.gitee.io/anires/index.html")**

## 项目截图

[![試毅-思伟的个人简历](../assets/screenshots/anires_all_mini.png "試毅-思伟的个人简历")](https://zhousiwei.gitee.io/anires/index.html "試毅-思伟的个人简历")

## 使用方法
```bash
git clone https://gitee.com/zhousiwei/anires.git
cd anires
npm install
npm run dev
```

## 部署方法

1. 编辑 **config/index.js**，修改第 10 行的 `assetsPublicPath`，值为 `项目名/public`。如果你没有修改项目名 `anires`，则可跳过此步骤。

2. 编译、上传
```bash
npm run build
git add .
git commit -m "update"
git push
```
3. 开启 **GitHub Pages** 功能，把生成的目标文件`public/*`放在你的web服务器上。

4. 访问地址：[https://your-github-username.github.io/anires/public](https://zhousiwei.gitee.io/anires/index.html "https://zhousiwei.gitee.io/anires/index.html")
