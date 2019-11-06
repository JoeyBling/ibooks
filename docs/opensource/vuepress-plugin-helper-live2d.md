# VuePress集成Live2D看板娘 <GitHubLink repo="JoeyBling/vuepress-plugin-helper-live2d"/>

```
 _          _                      _ _           ____     _
| |__   ___| |_ __   ___ _ __     | (_)_   _____|___ \ __| |
| '_ \ / _ \ | '_ \ / _ \ '__|____| | \ \ / / _ \ __) / _` |
| | | |  __/ | |_) |  __/ | |_____| | |\ V /  __// __/ (_| |
|_| |_|\___|_| .__/ \___|_|       |_|_| \_/ \___|_____\__,_|
             |_|
```

![](https://nodei.co/npm/vuepress-plugin-helper-live2d.png?downloads=true&downloadRank=true&stars=true)

[![npm package](https://img.shields.io/npm/v/vuepress-plugin-helper-live2d.svg?label=vuepress-plugin-helper-live2d)](https://www.npmjs.com/package/vuepress-plugin-helper-live2d)
[![downloads-total](https://img.shields.io/npm/dt/vuepress-plugin-helper-live2d.svg)](https://www.npmjs.com/package/vuepress-plugin-helper-live2d)
[![downloads-month](https://img.shields.io/npm/dm/vuepress-plugin-helper-live2d.svg)](https://www.npmjs.com/package/vuepress-plugin-helper-live2d)
![star](https://img.shields.io/github/stars/JoeyBling/vuepress-plugin-helper-live2d "star")
![fork](https://img.shields.io/github/forks/JoeyBling/vuepress-plugin-helper-live2d "fork")
![GitHub Last Commit](https://img.shields.io/github/last-commit/JoeyBling/vuepress-plugin-helper-live2d.svg?label=commits "GitHub Last Commit")
![issues](https://img.shields.io/github/issues/JoeyBling/vuepress-plugin-helper-live2d "issues")
[![Author](https://img.shields.io/badge/Author-JoeyBling-red.svg "Author")](https://zhousiwei.gitee.io "Author")
[![VuePress Version](https://img.shields.io/badge/VuePress-%3E%3D%201.0.0-blue.svg)](https://v1.vuepress.vuejs.org/zh/)
[![vuepress-theme-yilia-plus](https://img.shields.io/badge/Theme-Yilia_Plus-red.svg "vuepress-theme-yilia-plus")](https://github.com/JoeyBling/vuepress-theme-yilia-plus)
[![博客搭建交流群](https://img.shields.io/badge/QQ群-422625065-red.svg "博客搭建交流群")](https://jq.qq.com/?_wv=1027&k=58Ypj9z "博客搭建交流群")

------------------

> **欢迎使用和Star支持，如使用过程中碰到问题，可以提出Issue，我会尽力完善**

## 介绍
&#160;&#160;&#160;&#160;**VuePress集成Live2D看板娘 Live2D plugin for VuePress.**

- 功能还很少，欢迎各位给我提意见和建议~
- [vuepress-plugin-helper-live2d](https://github.com/JoeyBling/vuepress-plugin-helper-live2d) 是为 [VuePress](https://v1.vuepress.vuejs.org/zh/) `1.0.0+`制作的插件。

## 线上预览

> **预览 ➡️ [https://zhousiwei.gitee.io/ibooks](https://zhousiwei.gitee.io/ibooks)**

## 推荐一款VuePress主题
> **一款简洁优雅的VuePress主题 ➡️ [https://github.com/JoeyBling/vuepress-theme-yilia-plus](https://github.com/JoeyBling/vuepress-theme-yilia-plus)**

## 效果截图

![截图](../assets/opensource/v_live2d_web_mini.png)

## 安装

```bash
yarn add vuepress-plugin-helper-live2d
# or
npm install vuepress-plugin-helper-live2d --save
```

------------

## 开始使用

### 引入该插件

在配置文件中引入 `vuepress-plugin-helper-live2d`

> 查看 [官方文档](https://v1.vuepress.vuejs.org/zh/plugin/using-a-plugin.html)。

```javascript
module.exports = {
  plugins: [
    'vuepress-plugin-helper-live2d',
  ],
}
```

### 插件配置

```javascript
module.exports = {
  plugins: [
    [
      'vuepress-plugin-helper-live2d', {
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: 'hibiki',
          display: {
            position: "right", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 65, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8 // 模型透明度(default: 0.8)
          }
        }
      }
    ]
  ]
}
```

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

[![LICENSE](https://img.shields.io/github/license/JoeyBling/vuepress-plugin-helper-live2d "LICENSE")](https://github.com/JoeyBling/vuepress-plugin-helper-live2d/blob/master/LICENSE "LICENSE")