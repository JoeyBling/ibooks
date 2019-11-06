---
description: js及jquery获取页面和元素的宽高
---

# js及jquery获取页面和元素的宽高

### js：
```javascript
网页可见区域宽： document.body.clientWidth;(不含滚动条)
网页可见区域高： document.body.clientHeight;(不含滚动条)
网页可见区域宽： document.body.offsetWidth;(包括边线的宽);
网页可见区域高： document.body.offsetHeight;(包括边线的宽);
网页正文全文宽： document.body.scrollWidth;
网页正文全文高： document.body.scrollHeight;
网页被卷去的高(ff)：document.body.scrollTop;
网页被卷去的高(ie): document.documentElement.scrollTop;
网页被卷去的左： document.body.scrollLeft;
网页正文部分上： window.screenTop;
网页正文部分左： window.screenLeft;
某个元素的宽度： obj.offsetWidth;
某个元素的高度： obj.offsetHeight;
某个元素的上边界到body最顶部的距离： obj.offsetTop;(在元素的包含元素不含滚动条的情况下)
某个元素的左边界到body最左边的距离： obj.offsetLeft;(在元素的包含元素不含滚动条的情况下)
返回当前元素的上边界到它的包含元素的上边界的偏移量： obj.offsetTop;(在元素的包含元素含滚动条的情况下)
返回当前元素的左边界到它的包含元素的左边界的偏移量： obj.offsetLeft;(在元素的包含元素含滚动条的情况下)

屏幕分辨率的高： window.screen.height
屏幕分辨率的宽： window.screen.width
屏幕可用工作区高度： window.screen.availHeight
屏幕可用工作区宽度： window.screen.availWidth

HTML精确定位：scrollLeft,scrollWidth,clientWidth,offsetWidth
scrollHeight: 获取对象的滚动高度。
scrollLeft:设置或获取位于对象左边界和窗口中目前可见内容的最左端之间的距离
scrollTop:设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离
scrollWidth:获取对象的滚动宽度
offsetHeight:获取对象相对于版面或由父坐标 offsetParent 属性指定的父坐标的高度
offsetLeft:获取对象相对于版面或由 offsetParent 属性指定的父坐标的计算左侧位置
offsetTop:获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置
event.clientX 相对文档的水平座标
event.clientY 相对文档的垂直座标
event.offsetX 相对容器的水平坐标
event.offsetY 相对容器的垂直坐标
document.documentElement.scrollTop 垂直方向滚动的值
event.clientX+document.documentElement.scrollTop 相对文档的水平座标+垂直方向滚动的量
```


### jquery：

```javascript
获取浏览器显示区域（可视区域）的高度 ： $(window).height();
获取浏览器显示区域（可视区域）的宽度 ： $(window).width();
获取页面的文档高度：$(document).height();
获取页面的文档宽度 ：$(document).width();
浏览器当前窗口文档body的高度： $(document.body).height();
浏览器当前窗口文档body的宽度： $(document.body).width();
获取滚动条到顶部的垂直高度 (即网页被卷上去的高度) ：$(document).scrollTop();
获取滚动条到左边的垂直宽度 ：$(document).scrollLeft();
获取或设置元素的宽度：$(obj).width();
获取或设置元素的高度：$(obj).height();

获取或设置元素的宽度：$(obj).innerWidth(); (height + padding)
获取或设置元素的高度：$(obj).innerHeight(); (height + padding)

获取或设置元素的宽度：$(obj).outerWidth(); (height + padding + border)
获取或设置元素的高度：$(obj).outerHeight(); (height + padding + border)

获取或设置元素的宽度：$(obj).outerWidth(true); (height + padding + border + margin)
获取或设置元素的高度：$(obj).outerHeight(true); (height + padding + border + margin)
某个元素的上边界到body最顶部的距离：obj.offset().top;（在元素的包含元素不含滚动条的情况下）
某个元素的左边界到body最左边的距离：obj.offset().left;（在元素的包含元素不含滚动条的情况下）
返回当前元素的上边界到它的包含元素的上边界的偏移量：obj.offset().top（在元素的包含元素含滚动条的情况下）
返回当前元素的左边界到它的包含元素的左边界的偏移量：obj.offset().left（在元素的包含元素含滚动条的情况下）
```
