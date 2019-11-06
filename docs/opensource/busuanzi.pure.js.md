# 不蒜子访问量统计功能 <GitHubLink repo="JoeyBling/busuanzi.pure.js"/>

```
 _                                     _                           _
| |__  _   _ ___ _   _  __ _ _ __  ___(_)  _ __  _   _ _ __ ___   (_)___
| '_ \| | | / __| | | |/ _` | '_ \|_  / | | '_ \| | | | '__/ _ \  | / __|
| |_) | |_| \__ \ |_| | (_| | | | |/ /| |_| |_) | |_| | | |  __/_ | \__ \
|_.__/ \__,_|___/\__,_|\__,_|_| |_/___|_(_) .__/ \__,_|_|  \___(_)/ |___/
                                          |_|                   |__/
```

![](https://nodei.co/npm/busuanzi.pure.js.png?downloads=true&downloadRank=true&stars=true)

[![npm package](https://img.shields.io/npm/v/busuanzi.pure.js.svg?label=busuanzi.pure.js)](https://www.npmjs.com/package/busuanzi.pure.js)
[![downloads-total](https://img.shields.io/npm/dt/busuanzi.pure.js.svg)](https://www.npmjs.com/package/busuanzi.pure.js)
[![downloads-month](https://img.shields.io/npm/dm/busuanzi.pure.js.svg)](https://www.npmjs.com/package/busuanzi.pure.js)
![star](https://img.shields.io/github/stars/JoeyBling/busuanzi.pure.js "star")
![fork](https://img.shields.io/github/forks/JoeyBling/busuanzi.pure.js "fork")
![GitHub Last Commit](https://img.shields.io/github/last-commit/JoeyBling/busuanzi.pure.js.svg?label=commits "GitHub Last Commit")
![issues](https://img.shields.io/github/issues/JoeyBling/busuanzi.pure.js "issues")
[![Author](https://img.shields.io/badge/Author-JoeyBling-red.svg "Author")](https://zhousiwei.gitee.io "Author")
[![博客搭建交流群](https://img.shields.io/badge/QQ群-422625065-red.svg "博客搭建交流群")](https://jq.qq.com/?_wv=1027&k=58Ypj9z "博客搭建交流群")

## 介绍
&#160;&#160;&#160;&#160;**不蒜子访问量统计功能**

## 推荐一款Hexo主题
> **一个简洁优雅的hexo主题 ➡️ [https://github.com/JoeyBling/hexo-theme-yilia-plus](https://github.com/JoeyBling/hexo-theme-yilia-plus)**

## 开始使用

```bash
yarn add busuanzi.pure.js
# or
npm install busuanzi.pure.js --save
```

------------

# Example

> Vue.js

```vue
<template>
  <div class="busuanzi">
    <span id="busuanzi_container_site_pv" style="display:none">
      本站总访问量
      <span id="busuanzi_value_site_pv"></span>次
      <span class="post-meta-divider">|</span>
    </span>
    <span id="busuanzi_container_site_uv" style="display:none">
      本站访客数
      <span id="busuanzi_value_site_uv"></span>人
    </span>
  </div>
</template>

<script>

const busuanzi = require("busuanzi.pure.js");

export default {
  // 监听,当路由发生变化的时候执行
  watch: {
    $route(to, from) {
      if (to.path != from.path) {
        script.fetch();
      }
      // console.log(to.path);
    }
  }
};
</script>
```

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

[![LICENSE](https://img.shields.io/github/license/JoeyBling/busuanzi.pure.js "LICENSE")](https://github.com/JoeyBling/busuanzi.pure.js/blob/master/LICENSE "LICENSE")