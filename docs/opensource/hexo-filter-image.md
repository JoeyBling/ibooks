# 自动为hexo中的图片映射绝对路径 <GitHubLink repo="JoeyBling/hexo-filter-image"/>

![](https://nodei.co/npm/hexo-filter-image.png?downloads=true&downloadRank=true&stars=true)

[![npm package](https://badge.fury.io/js/hexo-filter-image.svg?label=hexo-filter-image)](https://www.npmjs.com/package/hexo-filter-image)
[![downloads-total](https://img.shields.io/npm/dt/hexo-filter-image.svg)](https://www.npmjs.com/package/hexo-filter-image)
[![downloads-month](https://img.shields.io/npm/dm/hexo-filter-image.svg)](https://www.npmjs.com/package/hexo-filter-image)
![star](https://img.shields.io/github/stars/JoeyBling/hexo-filter-image "star")
![fork](https://img.shields.io/github/forks/JoeyBling/hexo-filter-image "fork")
![GitHub Last Commit](https://img.shields.io/github/last-commit/JoeyBling/hexo-filter-image.svg?label=commits "GitHub Last Commit")
![issues](https://img.shields.io/github/issues/JoeyBling/hexo-filter-image "issues")
[![Author](https://img.shields.io/badge/Author-JoeyBling-red.svg "Author")](https://zhousiwei.gitee.io "Author")
[![博客搭建交流群](https://img.shields.io/badge/QQ群-422625065-red.svg "博客搭建交流群")](https://jq.qq.com/?_wv=1027&k=58Ypj9z "博客搭建交流群")

## 介绍
&#160;&#160;&#160;&#160;**自动为hexo中的图片映射绝对路径 | Automatically maps absolute paths to images in hexo**


## 推荐一款Hexo主题
> 一个简洁优雅的hexo主题：[https://github.com/JoeyBling/hexo-theme-yilia-plus](https://github.com/JoeyBling/hexo-theme-yilia-plus)

## 开始使用

```bash
yarn add hexo-filter-image
# or
npm install hexo-filter-image --save
```
> 由于本身Hexo带有缓存会导致插件第一次使用可能会出现无效果，请使用```hexo clean```清除缓存后即可正常使用

------------

## 配置(可选)
> 请向Hexo的 `_config.yml` 文件或主题的 `_config.yml` 文件中添加配置.

```yaml
filter_image:
  # 日志是否启用
  log: true
```

## Example

&#160;&#160;&#160;&#160;当Hexo配置文件的属性```root```值变化时，无需改变Markdown内容的图片地址，此插件会自动将图片映射成绝对路径

> 文章内容示例

```bash
![](/img/test.jpg)
```

> Hexo配置文件

```yaml
root: /testPath/
```

> 生成后的图片路径为`/testPath/img/test.jpg`


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

[![LICENSE](https://img.shields.io/github/license/JoeyBling/hexo-filter-image "LICENSE")](https://github.com/JoeyBling/hexo-filter-image/blob/master/LICENSE "LICENSE")