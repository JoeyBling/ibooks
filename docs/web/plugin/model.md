---
description: 常用弹层插件
---

# 常用弹层插件


### 1、layer 弹出层

> api文档地址：[https://www.layui.com/doc/modules/layer.html](https://www.layui.com/doc/modules/layer.html "https://www.layui.com/doc/modules/layer.html")

实例：（注：手机，PC端都比较好用）

```javascript
var layerNo = layer.open({
    type: 1,
    shade: false,
    title: false, //不显示标题
    content: $('.popup-box'), //捕获的元素
    area: ['200px', '100px']
});

layer.close(layerNo);    //关闭当前弹层
layer.closeAll();        //关闭当前所有的弹层
```

### 2、fancyBox 弹出层

> api文档：http://fancyapps.com/fancybox/#docs
http://simplemodal.plasm.it/
中文文档：http://www.weste.net/2013/4-22/90629.html

实例：（注：根本网站需求具体运用还是查看API，主要运用在PC端）

```javascript
var content="sdfs"
function showDiv(){
    var content="&lt;div class='content_box'&gt;"+
    "&lt;div class='content'&gt;fancybox弹出内容&lt;/div&gt;"+
    "&lt;a class='btn' href='javascript:$.fancybox.close();'&gt;确定&lt;/a&gt;"+
    "&lt;/div&gt;"
    return packageFancybox(content);
}
function packageFancybox(template){
    return $.fancybox(template,{
        padding:20,
        margin:10,
        width:200,
        height:40,
        minWidth:200,
        autoSize:false,   //默认是:true,自适应，变为:false后设置的宽和高才有效。
        closeBtn:false,   //默认是:true,变为:false后close键隐藏。
        closeClick:true,  //默认是:false,变为:true后点击弹框内的内容弹框也会消失。
        modal:true        //默认是:false,变为:true后点击外面透明黑背景弹框不会消失。
    })
}
showDiv();
```

### 3、jquery.simplemodal.min.js 插件弹出层

> api文档地址：http://blog.sina.com.cn/s/blog_6a1fb8420100psj0.html

实例：

```javascript
var _deal = $("#register-notice").modal({width: 800, height: 600,close:false});

_deal.close();    //关闭弹出层
```