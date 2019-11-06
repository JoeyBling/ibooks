---
description: seajs
---

# seajs

> 介绍：`SeaJS`是一个遵循CMD规范的JavaScript模块加载框架，可以实现JavaScript的模块化开发及加载机制。

详细API请查看：<br>
- [http://www.zhangxinxu.com/sp/seajs/docs/zh-cn/module-definition.html](http://www.zhangxinxu.com/sp/seajs/docs/zh-cn/module-definition.html "http://www.zhangxinxu.com/sp/seajs/docs/zh-cn/module-definition.html")
- [http://www.zhangxinxu.com/sp/seajs/docs/zh-cn/cheatsheet.html](http://www.zhangxinxu.com/sp/seajs/docs/zh-cn/cheatsheet.html "http://www.zhangxinxu.com/sp/seajs/docs/zh-cn/cheatsheet.html")


### config.js 文件配置

```javascript
seajs.config({
    base: lemon.cdn_asset_url + "/static/" + lemon.builds_path,
    map: [
        ['.js', '.js?v=' + ("undefined"!=typeof lemon&&lemon.version?lemon.version:(new Date).getTime())]
    ],
    alias: {
        "jquery": "js/libs/min/jquery.1.11.1.min",
        "cookie": "js/libs/jquery.cookie",
        "easing": "js/libs/jquery.easing",
        "utils": "js/components/common/utils",
        "component": "js/components/common/component",
        "validate": "js/libs/jquery.validate",
        "validate.add": "js/libs/jquery.validate.add",
        "pager": "js/libs/jquery.pager",
        "layer": "js/libs/layer/layer.min",
        "unslider": "js/libs/min/unslider.min",
        "layer.ext": "js/libs/layer/extend/layer.ext",
        "highStock": "js/libs/min/highstock",
        "mousewheel": "js/libs/min/jquery.mousewheel.min",
        "countUp": "js/libs/countUp"
    }
});
```
注：
- `base` 是js文件存放的目录
- `map` 是js文件的后缀和随机版本号
- `alias` 命名：地址

### 文件引用

```javascript
define(function (require, exports, module) {
    var $ = require('jquery'),
        $layer = require('layer'),
        LemonUtils = require('utils'),
        form = $('#loginForm'),
        popCodeFrom = $('#popCodeFrom'),
        layerNo = 0;

    //引用文件
    require('validate')($);
    require('validate.add')($);
    require('component')($);

    $("#mobile").telephone();

    require("./checkcode.js");

    //其他jq用法都一样
    $("#btnLogin").on("click", function () {

    }
});
注：define(function (require, exports, module){}) 跟 $(function(){}) 功能一样
```