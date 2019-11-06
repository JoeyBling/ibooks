# 一款简洁优雅的VuePress主题 <GitHubLink repo="JoeyBling/vuepress-theme-yilia-plus"/>

```
____    ____  __   __       __       ___           .______    __       __    __       _______.
\   \  /   / |  | |  |     |  |     /   \          |   _  \  |  |     |  |  |  |     /       |
 \   \/   /  |  | |  |     |  |    /  ^  \   ______|  |_)  | |  |     |  |  |  |    |   (----`
  \_    _/   |  | |  |     |  |   /  /_\  \ |______|   ___/  |  |     |  |  |  |     \   \
    |  |     |  | |  `----.|  |  /  _____  \       |  |      |  `----.|  `--'  | .----)   |
    |__|     |__| |_______||__| /__/     \__\      | _|      |_______| \______/  |_______/
```


![](https://nodei.co/npm/vuepress-theme-yilia-plus.png?downloads=true&downloadRank=true&stars=true)

[![npm package](https://img.shields.io/npm/v/vuepress-theme-yilia-plus.svg?label=vuepress-theme-yilia-plus)](https://www.npmjs.com/package/vuepress-theme-yilia-plus)
[![downloads-total](https://img.shields.io/npm/dt/vuepress-theme-yilia-plus.svg)](https://www.npmjs.com/package/vuepress-theme-yilia-plus)
[![downloads-month](https://img.shields.io/npm/dm/vuepress-theme-yilia-plus.svg)](https://www.npmjs.com/package/vuepress-theme-yilia-plus)
![star](https://img.shields.io/github/stars/JoeyBling/vuepress-theme-yilia-plus "star")
![fork](https://img.shields.io/github/forks/JoeyBling/vuepress-theme-yilia-plus "fork")
![GitHub Last Commit](https://img.shields.io/github/last-commit/JoeyBling/vuepress-theme-yilia-plus.svg?label=commits "GitHub Last Commit")
![issues](https://img.shields.io/github/issues/JoeyBling/vuepress-theme-yilia-plus "issues")
[![Author](https://img.shields.io/badge/Author-JoeyBling-red.svg "Author")](https://zhousiwei.gitee.io "Author")
[![VuePress Version](https://img.shields.io/badge/VuePress-%3E%3D%201.0.0-blue.svg)](https://v1.vuepress.vuejs.org/zh/)
[![vuepress-theme-yilia-plus](https://img.shields.io/badge/Theme-Yilia_Plus-red.svg "vuepress-theme-yilia-plus")](https://github.com/JoeyBling/vuepress-theme-yilia-plus)
[![博客搭建交流群](https://img.shields.io/badge/QQ群-422625065-red.svg "博客搭建交流群")](https://jq.qq.com/?_wv=1027&k=58Ypj9z "博客搭建交流群")

------------------

#### [立即体验](#开始使用)

> **欢迎使用和Star支持，如使用过程中碰到问题，可以提出Issue，我会尽力完善**

> **同时也欢迎相同爱好者加入一起维护此项目**

## 关于[vuepress-theme-yilia-plus](https://github.com/JoeyBling/vuepress-theme-yilia-plus)主题在原主题基础上做了以下功能升级
1. 添加GitHub Corner(Fork me)
2. 集成不蒜子访问量统计功能
3. 添加网站成立年份
4. 其他样式轻微调优、社交图标优化

> 如果有小伙伴有新功能的意见或者改进欢迎给我提意见和建议~


## 介绍
&#160;&#160;&#160;&#160;**一款简洁优雅的VuePress主题 A simple and elegant theme for VuePress.**
> **此主题继承自`VuePress`默认主题，其他主题配置和默认主题配置一样不变**

- 功能还很少，欢迎各位给我提意见和建议~
- [vuepress-theme-yilia-plus](https://github.com/JoeyBling/vuepress-theme-yilia-plus) 是为 [VuePress](https://v1.vuepress.vuejs.org/zh/) `1.0.0+`制作的主题。

## 鼓励

&#160;&#160;&#160;&#160;**如果觉得本主题还不错，您的支持和鼓励才是后续更新最大的动力，== 欢迎 [Star](https://github.com/JoeyBling/vuepress-theme-yilia-plus/stargazers) ==**

![Stargazers over time](https://starchart.cc/JoeyBling/vuepress-theme-yilia-plus.svg)

## 关于主题
1. 崇尚简约
2. 追求移动端体验

## 线上预览

> **预览 ➡️ [https://zhousiwei.gitee.io/ibooks](https://zhousiwei.gitee.io/ibooks)**

## 效果截图

![截图](../assets/opensource/v_yp_web_mini.png)


## 安装

```bash
yarn add vuepress-theme-yilia-plus
# or
npm install vuepress-theme-yilia-plus --save
```

------------

## 开始使用
### 引入该主题
在配置文件中引入 `vuepress-theme-yilia-plus`

> 查看 [官方文档](https://v1.vuepress.vuejs.org/zh/theme/using-a-theme.html)。

```javascript
module.exports = {
  theme: 'vuepress-theme-yilia-plus'
}
```

### 主题配置

```javascript
module.exports = {
  theme: 'vuepress-theme-yilia-plus',
  themeConfig: {
    /* vuepress-theme-yilia-plus 配置 */
    yilia_plus: {
      // github-corner(关闭请设置为false)
      github: {
        url: "https://github.com/JoeyBling/vuepress-theme-yilia-plus"
      },
      footer: {
        // 网站成立年份(若填入年份小于当前年份，则显示为 2018-2019 类似的格式)
        since: 2018,
        // 网站作者(关闭请设置为false)
        author: '<a href="https://github.com/JoeyBling/" target="_blank">試毅-思伟</a>',
        // 访问量统计功能(不蒜子)
        busuanzi: {
          // 是否启用(关闭请设置为false)
          enable: true
        }
      }
    }
  }
}
```

## 其它项目支持

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
[![LICENSE](https://img.shields.io/github/license/JoeyBling/vuepress-theme-yilia-plus "LICENSE")](https://github.com/JoeyBling/vuepress-theme-yilia-plus/blob/master/LICENSE "LICENSE")