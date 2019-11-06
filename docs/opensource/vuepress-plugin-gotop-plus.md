# VuePress回到页首插件Plus <GitHubLink repo="JoeyBling/vuepress-plugin-gotop-plus"/>

```
               _                                _
  __ _   ___  | |_   ___   _ __          _ __  | | _   _  ___
 / _` | / _ \ | __| / _ \ | '_ \  _____ | '_ \ | || | | |/ __|
| (_| || (_) || |_ | (_) || |_) ||_____|| |_) || || |_| |\__ \
 \__, | \___/  \__| \___/ | .__/        | .__/ |_| \__,_||___/
 |___/                    |_|           |_|
```

[![](https://nodei.co/npm/vuepress-plugin-gotop-plus.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/vuepress-plugin-gotop-plus)

[![npm package](https://img.shields.io/npm/v/vuepress-plugin-gotop-plus.svg?label=vuepress-plugin-gotop-plus)](https://www.npmjs.com/package/vuepress-plugin-gotop-plus)
[![downloads-total](https://img.shields.io/npm/dt/vuepress-plugin-gotop-plus.svg)](https://www.npmjs.com/package/vuepress-plugin-gotop-plus)
[![downloads-month](https://img.shields.io/npm/dm/vuepress-plugin-gotop-plus.svg)](https://www.npmjs.com/package/vuepress-plugin-gotop-plus)
![star](https://img.shields.io/github/stars/JoeyBling/vuepress-plugin-gotop-plus "star")
![fork](https://img.shields.io/github/forks/JoeyBling/vuepress-plugin-gotop-plus "fork")
![GitHub Last Commit](https://img.shields.io/github/last-commit/JoeyBling/vuepress-plugin-gotop-plus.svg?label=commits "GitHub Last Commit")
![issues](https://img.shields.io/github/issues/JoeyBling/vuepress-plugin-gotop-plus "issues")
[![Author](https://img.shields.io/badge/Author-JoeyBling-red.svg "Author")](https://zhousiwei.gitee.io "Author")
[![VuePress Version](https://img.shields.io/badge/VuePress-%3E%3D%201.0.0-blue.svg)](https://v1.vuepress.vuejs.org/zh/)
[![vuepress-theme-yilia-plus](https://img.shields.io/badge/Theme-Yilia_Plus-red.svg "vuepress-theme-yilia-plus")](https://github.com/JoeyBling/vuepress-theme-yilia-plus)
[![博客搭建交流群](https://img.shields.io/badge/QQ群-422625065-red.svg "博客搭建交流群")](https://jq.qq.com/?_wv=1027&k=58Ypj9z "博客搭建交流群")

------------------

> **欢迎使用和Star支持，如使用过程中碰到问题，可以提出Issue，我会尽力完善**

## 介绍
&#160;&#160;&#160;&#160;**VuePress回到页首插件Plus. back-to-top plus plugin for VuePress.**

> 此插件根据官方插件[@vuepress/plugin-back-to-top](https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-back-to-top.html)更改调整，加入了一些自定义参数配置.

- 功能还很少，欢迎各位给我提意见和建议~
- [vuepress-plugin-gotop-plus](https://github.com/JoeyBling/vuepress-plugin-gotop-plus) 是为 [VuePress](https://v1.vuepress.vuejs.org/zh/) `1.0.0+`制作的插件。

## 线上预览

> **预览 ➡️ [https://zhousiwei.gitee.io/ibooks](https://zhousiwei.gitee.io/ibooks)**

## 推荐一款VuePress主题
> **一款简洁优雅的VuePress主题 ➡️ [https://github.com/JoeyBling/vuepress-theme-yilia-plus](https://github.com/JoeyBling/vuepress-theme-yilia-plus)**

## 效果截图

![截图](../assets/opensource/gotop_web_mini.png)

## 安装

```bash
yarn add vuepress-plugin-gotop-plus
# or
npm install vuepress-plugin-gotop-plus --save
```

------------

## 开始使用

### 引入该插件

在配置文件中引入 `vuepress-plugin-gotop-plus`

> 查看 [官方文档](https://v1.vuepress.vuejs.org/zh/plugin/using-a-plugin.html)。

```javascript
module.exports = {
  plugins: [
    /* 两个插件只能选一个 */
    ['@vuepress/plugin-back-to-top', false],
    [
      'vuepress-plugin-gotop-plus'
    ],
  ],
}
```

### 插件配置

```javascript
module.exports = {
  plugins: [
    /* 两个插件只能选一个 */
    ['@vuepress/plugin-back-to-top', false],
    [
      'vuepress-plugin-gotop-plus', {
        // 是否在移动设备上显示(default: true)
        mobileShow: false,
        // 回到页首元素显示触发的高度阈值(default: 50)
        threshold: 50
      }
    ],
  ],
}
```

## 其他项目支持

- ### 一款简洁优雅的hexo主题：[hexo-theme-yilia-plus](https://github.com/JoeyBling/hexo-theme-yilia-plus)
- ### 一款简洁优雅的VuePress主题：[vuepress-theme-yilia-plus](https://github.com/JoeyBling/vuepress-theme-yilia-plus)
- ### VuePress集成Live2D看板娘：[vuepress-plugin-helper-live2d](https://github.com/JoeyBling/vuepress-plugin-helper-live2d)

## 捐赠
&#160;&#160;&#160;&#160;**如果感觉对您有帮助，请作者喝杯咖啡吧，请注明您的名字或者昵称，方便作者感谢o(*￣︶￣*)o**

| 微信 | 支付宝 |
| :---: | :---: |
| ![](../assets/weixin.png) | ![](../assets/alipay.jpeg) |

## 关于我
- [个人博客](https://zhousiwei.gitee.io/)
- [技术笔记](https://zhousiwei.gitee.io/ibooks/)
- [GitHub](https://github.com/JoeyBling)
- [码云](https://gitee.com/zhousiwei)
- [简书](https://www.jianshu.com/u/02cbf31a043a)
- [CSDN](https://blog.csdn.net/qq_30930805)
- [知乎](https://www.zhihu.com/people/joeybling)
- [微博](http://weibo.com/jayinfo)
- **主要涉及技术：`Java后端开发`、`聚合支付`、`公众号开发`、`开源爱好者`、`Linux`**

## LICENSE

[![LICENSE](https://img.shields.io/github/license/JoeyBling/vuepress-plugin-gotop-plus "LICENSE")](https://github.com/JoeyBling/vuepress-plugin-gotop-plus/blob/master/LICENSE "LICENSE")