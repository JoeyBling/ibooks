# 在网站上集成Live2D看板娘具有开箱即用的体验 <GitHubLink repo="JoeyBling/live2d-widget.js"/>

![star](https://img.shields.io/github/stars/JoeyBling/live2d-widget.js "star")
![fork](https://img.shields.io/github/forks/JoeyBling/live2d-widget.js "fork")
![GitHub Last Commit](https://img.shields.io/github/last-commit/JoeyBling/live2d-widget.js.svg?label=commits "GitHub Last Commit")
![issues](https://img.shields.io/github/issues/JoeyBling/live2d-widget.js "issues")
[![Author](https://img.shields.io/badge/Author-JoeyBling-red.svg "Author")](https://zhousiwei.gitee.io "Author")
[![hexo-theme-yilia-plus](https://img.shields.io/badge/Theme-Yilia_Plus-red.svg "hexo-theme-yilia-plus")](https://github.com/JoeyBling/hexo-theme-yilia-plus)
[![博客搭建交流群](https://img.shields.io/badge/QQ群-422625065-red.svg "博客搭建交流群")](https://jq.qq.com/?_wv=1027&k=58Ypj9z "博客搭建交流群")
[![LICENSE](https://img.shields.io/github/license/JoeyBling/hexo-theme-yilia-plus "LICENSE")](https://github.com/JoeyBling/live2d-widget.js/blob/master/LICENSE "LICENSE")


> **欢迎使用和Star支持，如使用过程中碰到问题，可以提出Issue，我会尽力完善**

## 线上预览

> **预览 ➡️ [https://zhousiwei.gitee.io/live2d-widget.js](https://zhousiwei.gitee.io/live2d-widget.js)**


## 项目使用

- ### 一款简洁优雅的hexo主题：[hexo-theme-yilia-plus](https://github.com/JoeyBling/hexo-theme-yilia-plus)
- ### 一款简洁优雅的VuePress主题：[vuepress-theme-yilia-plus](https://github.com/JoeyBling/vuepress-theme-yilia-plus)
- ### VuePress集成Live2D看板娘：[vuepress-plugin-helper-live2d](https://github.com/JoeyBling/vuepress-plugin-helper-live2d)

# live2d-widget.js

Add the Sseexxyyy live2d to your webpages! Seperated from [hexo-helper-live2d](https://github.com/EYHN/hexo-helper-live2d).

Demo: [Still working, but you can have a look~](https://l2dwidget.js.org/dev.html)

Docs(including APIs): [Click me!](https://l2dwidget.js.org)

Online generator: [TBD.](javascript:void(0);)


## Useage

### Hexo

Please visit [hexo-helper-live2d](https://github.com/EYHN/hexo-helper-live2d) for the hexo plugin.

### Webpages

#### File on your server

Download the [latest release](https://github.com/xiazeyu/live2d-widget.js/releases),

and then copy and extract the `lib` folder to your website.

Use [online generator](javascript:void(0);) **(recommended)** to generate codes.

<details><summary>However, if you want to do it manually, follow the instruction below:</summary><br>

import the js:

```html

<script src = "( your script path here )"></script>

```

Then call the function along with your config.

```js
L2Dwidget.init({
  'config1': 'value1',
  'config2': 'value2',
});
```

</details>

### Bookmark (any pages)

TBD.

https://www.cnblogs.com/pcyy/p/5655542.html


## Settings

See the [document](https://xiazeyu.github.io/live2d-widget.js/docs/class/src/index.js~L2Dwidget.html#instance-method-init).

<details><summary>Current supported models:</summary><br>

  - `chitose`
  - `Epsilon2.1`
  - `Gantzert_Felixander`
  - `haru01`
  - `haru02`
  - `haruto`
  - `hibiki`
  - `hijiki`
  - `izumi`
  - `koharu`
  - `miku`
  - `nico`
  - `ni-j`
  - `nipsilon`
  - `nito`
  - `shizuku`
  - `tororo`
  - `tsumiki`
  - `Unitychan`
  - `wanko`
  - `z16`

</details>

## Custom model

1. Create a `live2d_models` folder at your blog's root directory.

2. Create a folder by the name of your model.

3. Copy your model to this folder.

**Attention! The path of the model's json must be  `/live2d_models/{name}/{name}.model.json`**

<details><summary>An Example:</summary><br>

Your model is named `mymiku`.

Then, create a folder at  `/` (Which should exists `_config.yml` 、`sources` 、 `themes` ) named `mymiku`.

Copy your model to `/live2d_models/mymiku/`.

Up to now, there should be `mymiku.model.json` in the directory of `/live2d_models/mymiku/`.

</details>

<br>~The problem was once releated to [(#22)](https://github.com/EYHN/hexo-helper-live2d/issues/22).~

<br>

See [WEBPACK VISUALIZER](https://l2dwidget.js.org/stats.html)

Enjoy!:beer:

> This is my first hexo plugin, star :star: and watch :eyeglasses:, pull request is also welcomed.

Github: [https://github.com/EYHN/hexo-helper-live2d](https://github.com/EYHN/hexo-helper-live2d)

issues: [https://github.com/EYHN/hexo-helper-live2d/issues](https://github.com/EYHN/hexo-helper-live2d/issues)


## Contribute

**Please pay enough attention to this document if you want to commit your changes or submit issues.**

[CONTRIBUTING](./CONTRIBUTING.md)

## Releated projects

- [Cubism SDK WebGL 2.1](http://sites.cybernoids.jp/cubism-sdk2_e/webgl2-1)

- [live2d-widget.js](https://github.com/xiazeyu/live2d-widget.js)

- [hexo-helper-live2d](https://github.com/EYHN/hexo-helper-live2d)

- [pixi-live2d](https://github.com/avgjs/pixi-live2d)

- [CubismJsComponents](https://github.com/Live2D/CubismJsComponents)


## License

[Apache License](https://github.com/JoeyBling/live2d-widget.js/blob/master/LICENSE)