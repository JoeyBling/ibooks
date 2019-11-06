---
description: 移动Web开发技巧汇总
---

# 移动Web开发技巧汇总

## META相关

### 1. 添加到主屏后的标题（IOS）

```html
<meta name="apple-mobile-web-app-title" content="标题">
```

### 2. 启用 WebApp 全屏模式（IOS）

> 当网站添加到主屏幕后再点击进行启动时，可隐藏地址栏（从浏览器跳转或输入链接进入并没有此效果）

```html
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-touch-fullscreen" content="yes" />
```

### 3. 百度禁止转码

> 通过百度手机打开网页时，百度可能会对你的网页进行转码，往你页面贴上它的广告，非常之恶心。不过我们可以通过这个meta标签来禁止它

```html
<meta http-equiv="Cache-Control" content="no-siteapp" />
```

- [百度SiteApp转码声明](https://www.baidu.com/duty/wise/tc_siteapp.html "百度SiteApp转码声明")

### 4. 设置状态栏的背景颜色（IOS）

> 设置状态栏的背景颜色，只有在`"apple-mobile-web-app-capable" content="yes"`时生效

```html
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
```

**`content`参数：**
- default ：状态栏背景是白色。
- black ：状态栏背景是黑色。
- black-translucent ：状态栏背景是半透明。 如果设置为 default 或 black ,网页内容从状态栏底部开始。 如果设置为 black-translucent ,网页内容充满整个屏幕，顶部会被状态栏遮挡。

### 5. 移动端手机号码识别（IOS）

> 在`iOS Safari`（其他浏览器和Android均不会）上会对那些看起来像是电话号码的数字处理为电话链接，比如：

- 7位数字，形如：1234567
- 带括号及加号的数字，形如：(+86)123456789
- 双连接线的数字，形如：00-00-00111
- 11位数字，形如：13800138000

> **可能还有其他类型的数字也会被识别。我们可以通过如下的meta来关闭电话号码的自动识别：**

```html
<meta name="format-detection" content="telephone=no" />
```

- **开启电话功能**

```html
<a href="tel:123456">123456</a>
```

- **开启短信功能：**

```html
<a href="sms:123456">123456</a>
```

### 6. 移动端邮箱识别（Android）

> 与电话号码的识别一样，在安卓上会对符合邮箱格式的字符串进行识别，我们可以通过如下的meta来管别邮箱的自动识别：

```html
<meta content="email=no" name="format-detection" />
```

> 同样地，我们也可以通过标签属性来开启长按邮箱地址弹出邮件发送的功能：

```html
<a mailto:dooyoe@gmail.com">dooyoe@gmail.com</a>
```

### 7. 添加智能 App 广告条 Smart App Banner（IOS 6+ Safari）

```html
<meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL">
```

### 8. IOS Web app启动动画

> 由于iPad 的启动画面是不包括状态栏区域的。所以启动图片需要减去状态栏区域所对应的方向上的20px大小，相应地在retina设备上要减去40px的大小

```html
<!-- iPhone -->
<link href="apple-touch-startup-image-320x460.png" media="(device-width: 320px)" rel="apple-touch-startup-image">
<!-- iPhone (Retina) -->
<link href="apple-touch-startup-image-640x960.png" media="(device-width: 320px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image">
<!-- iPad (portrait) -->
<link href="apple-touch-startup-image-768x1004.png" media="(device-width: 768px) and (orientation: portrait)" rel="apple-touch-startup-image">
<!-- iPad (landscape) -->
<link href="apple-touch-startup-image-748x1024.png" media="(device-width: 768px) and (orientation: landscape)" rel="apple-touch-startup-image">
<!-- iPad (Retina, portrait) -->
<link href="apple-touch-startup-image-1536x2008.png" media="(device-width: 1536px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image">
<!-- iPad (Retina, landscape) -->
<link href="apple-touch-startup-image-2048x1496.png" media="(device-width: 1536px)  and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image">
```

`（landscape：横屏 | portrait：竖屏）`

### 9. 添加到主屏后的APP图标

> 指定web app添加到主屏后的图标路径，有两种略微不同的方式：

```html
<!-- 设计原图 -->
<link href="short_cut_114x114.png" rel="apple-touch-icon-precomposed">
<!-- 添加高光效果 -->
<link href="short_cut_114x114.png" rel="apple-touch-icon">
```

> **图标尺寸：**

- 可通过指定`size`属性来为不同的设备提供不同的图标（但通常来说，我们只需提供一个114 x 114 pixels大小的图标即可 ）

- 官方说明如下：

```
Create different sizes of your app icon for different devices. If you’re creating a universal app, you need to supply app icons in all four sizes.
For iPhone and iPod touch both of these sizes are required:

57 x 57 pixels

114 x 114 pixels (high resolution)

For iPad, both of these sizes are required:

72 x 72 pixels

144 x 144 (high resolution)
```

### 10. 优先使用最新版本 IE 和 Chrome

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
```

### 11.viewport模板

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport">
<meta content="yes" name="apple-mobile-web-app-capable">
<meta content="black" name="apple-mobile-web-app-status-bar-style">
<meta content="telephone=no" name="format-detection">
<meta content="email=no" name="format-detection">
<title>标题</title>
<link rel="stylesheet" href="index.css">
</head>
<body>
这里开始内容
</body>
</html>
```

## 常见问题

### 1、移动端如何定义字体font-family

#### 三大手机系统的字体：

> **ios 系统**
- 默认中文字体是Heiti SC
- 默认英文字体是Helvetica
- 默认数字字体是HelveticaNeue
- 无微软雅黑字体

> **android 系统**
- 默认中文字体是Droidsansfallback
- 默认英文和数字字体是Droid Sans
- 无微软雅黑字体

> **winphone 系统**
- 默认中文字体是Dengxian(方正等线体)
- 默认英文和数字字体是Segoe
- 无微软雅黑字体

各个手机系统有自己的默认字体，且都不支持微软雅黑
如无特殊需求，手机端无需定义中文字体，使用系统默认
英文字体和数字字体可使用 Helvetica ，三种系统都支持

```html
* 移动端定义字体的代码 */
body{font-family:Helvetica;}
```

### 2、移动端字体单位font-size选择px还是rem

- 对于只需要适配手机设备，使用px即可
- 对于需要适配各种移动设备，使用rem，例如只需要适配iPhone和iPad等分辨率差别比较挺大的设备

> rem配置参考：

```html
html {font-size:10px}
@media screen and (min-width:480px) and (max-width:639px) {
    html {
        font-size: 15px
    }
}
@media screen and (min-width:640px) and (max-width:719px) {
    html {
        font-size: 20px
    }
}
@media screen and (min-width:720px) and (max-width:749px) {
    html {
        font-size: 22.5px
    }
}
@media screen and (min-width:750px) and (max-width:799px) {
    html {
        font-size: 23.5px
    }
}
@media screen and (min-width:800px) and (max-width:959px) {
    html {
        font-size: 25px
    }
}
@media screen and (min-width:960px) and (max-width:1079px) {
    html {
        font-size: 30px
    }
}
@media screen and (min-width:1080px) {
    html {
        font-size: 32px
    }
}
```

### 3、移动端touch事件(区分webkit 和 winphone)

- 当用户手指放在移动设备在屏幕上滑动会触发的touch事件

> **以下支持`webkit`**

- `touchstart`——当手指触碰屏幕时候发生。不管当前有多少只手指
- `touchmove`——当手指在屏幕上滑动时连续触发。通常我们再滑屏页面，会调用event的preventDefault()可以阻止默认情况的发生：阻止页面滚动
- `touchend`——当手指离开屏幕时触发
- `touchcancel`——系统停止跟踪触摸时候会触发。例如在触摸过程中突然页面alert()一个提示框，此时会触发该事件，这个事件比较少用

> **以下支持`winphone 8`**

- `MSPointerDown`——当手指触碰屏幕时候发生。不管当前有多少只手指
- `MSPointerMove`——当手指在屏幕上滑动时连续触发。通常我们再滑屏页面，会调用css的`html{-ms-touch-action: none;}`可以阻止默认情况的发生：阻止页面滚动
- `MSPointerUp`——当手指离开屏幕时触发

### 4、移动端click屏幕产生200-300 ms的延迟响应

- [fastclick](https://github.com/ftlabs/fastclick)可以解决在手机上点击事件的300ms延迟
- zepto的touch模块，tap事件也是为了解决在click的延迟问题

> **触摸事件的响应顺序**

```html
1、ontouchstart
2、ontouchmove
3、ontouchend
4、onclick
```

> 解决300ms延迟的问题，也可以通过绑定`ontouchstart`事件，加快对事件的响应

### 5、什么是Retina显示屏，带来了什么问题

`retina`：一种具备超高像素密度的液晶屏，同样大小的屏幕上显示的像素点由1个变为多个，如在同样带下的屏幕上，苹果设备的retina显示屏中，像素点1个变为4个

在高清显示屏中的位图被放大，图片会变得模糊，因此移动端的视觉稿通常会设计为传统PC的2倍

那么，前端的应对方案是：

设计稿切出来的图片长宽保证为偶数，并使用`backgroud-size`把图片缩小为原来的1/2

```html
//例如图片宽高为：200px*200px，那么写法如下
.css{width:100px;height:100px;background-size:100px 100px;}
```

> 其它元素的取值为原来的1/2，例如视觉稿40px的字体，使用样式的写法为20px

```html
.css{font-size:20px}
```

### 6、ios系统中元素被触摸时产生的半透明灰色遮罩怎么去掉

> ios用户点击一个链接，会出现一个半透明灰色遮罩, 如果想要禁用，可设置`-webkit-tap-highlight-color`的`alpha`值为0，也就是属性值的最后一位设置为0就可以去除半透明灰色遮罩

```html
a,button,input,textarea{-webkit-tap-highlight-color: rgba(0,0,0,0;)}
```

### 7、部分android系统中元素被点击时产生的边框怎么去掉

> android用户点击一个链接，会出现一个边框或者半透明灰色遮罩, 不同生产商定义出来额效果不一样，可设置`-webkit-tap-highlight-color`的`alpha`值为0去除部分机器自带的效果

```html
a,button,input,textarea{
    -webkit-tap-highlight-color: rgba(0,0,0,0;)
    -webkit-user-modify:read-write-plaintext-only; 
}
```

 - `-webkit-user-modify`有个副作用，就是输入法不再能够输入多个字符</em></p>

### 8、winphone系统a、input标签被点击时产生的半透明灰色背景怎么去掉

```html
<meta name="msapplication-tap-highlight" content="no">
```

### 9、webkit表单元素的默认外观怎么重置

```html
.css{-webkit-appearance:none;}
```

### 10、webkit表单输入框placeholder的颜色值能改变么

```html
input::-webkit-input-placeholder{color:#AAAAAA;}
input:focus::-webkit-input-placeholder{color:#EEEEEE;}
```

### 11、webkit表单输入框placeholder的文字能换行么

> ios可以，android不行~

### 12. 关闭iOS键盘首字母自动大写

> 在iOS中，默认情况下键盘是开启首字母大写的功能的，如果关闭这个功能，可以这样：

```html
<input type="text" autocapitalize="off" />
```

### 13. 关闭iOS输入自动修正

> 和英文输入默认自动首字母大写那样，IOS还做了一个功能，默认输入法会开启自动修正输入内容，这样的话，用户经常要操作两次。如果不希望开启此功能，我们可以通过input标签属性来关闭掉：

```html
<input type="text" autocorrect="off" />
```

### 14. 禁止文本缩放

> 当移动设备横竖屏切换时，文本的大小会重新计算，进行相应的缩放，当我们不需要这种情况时，可以选择禁止：

```html
html {
　　      -webkit-text-size-adjust: 100%;
}
```

- 需要注意的是，PC端的该属性已经被移除，该属性在移动端要生效，必须设置 `meta viewport&`

### 15. 移动端如何清除输入框内阴影

> 在iOS上，输入框默认有内部阴影，但无法使用`box-shadow`来清除，如果不需要阴影，可以这样关闭：

```html
input,textarea {
　　border: 0; /* 方法1 */
　　-webkit-appearance: none; /* 方法2 */
}
```

### 16. 快速回弹滚动

> 在iOS上如果你想让一个元素拥有像 Native 的滚动效果，你可以这样做：

```html
    .xxx {
        overflow: auto; /* auto | scroll */
        -webkit-overflow-scrolling: touch;
    }
```

- PS：iScroll用过之后感觉不是很好，有一些诡异的bug，这里推荐另外一个`iDangero Swiper`，这个插件集成了滑屏滚动的强大功能（支持3D），而且还有回弹滚动的内置滚动条，官方地址：[http://www.idangero.us/sliders/swiper/index.php](http://www.idangero.us/sliders/swiper/index.php "http://www.idangero.us/sliders/swiper/index.php")

### 17. 移动端禁止选中内容

> 如果你不想用户可以选中页面中的内容，那么你可以在css中禁掉：

```html
.user-select-none {
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all （移动端不需要） */
  -ms-user-select: none;      /* IE 10+ */
}
```

### 18. 移动端取消touch高亮效果

> 在做移动端页面时，会发现所有a标签在触发点击时或者所有设置了伪类 :active 的元素，默认都会在激活状态时，显示高亮框，如果不想要这个高亮，那么你可以通过css以下方法来进行全局的禁止：

```html
html {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
```

- 但这个方法在三星的机子上无效，有一种妥协的方法是把页面非真实跳转链接的a标签换成其它标签，可以解决这个问题。

### 19. 如何禁止保存或拷贝图像（IOS）

> 通常当你在手机或者pad上长按图像 img ，会弹出选项 存储图像 或者 拷贝图像，如果你不想让用户这么操作，那么你可以通过以下方法来禁止：

```html
img { -webkit-touch-callout: none; }
```

### 20.模拟按钮hover效果

> 移动端触摸按钮的效果，可明示用户有些事情正要发生，是一个比较好体验，但是移动设备中并没有鼠标指针，使用css的hover并不能满足我们的需求，还好国外有个激活css的active效果，代码如下：

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport">
<meta content="yes" name="apple-mobile-web-app-capable">
<meta content="black" name="apple-mobile-web-app-status-bar-style">
<meta content="telephone=no" name="format-detection">
<meta content="email=no" name="format-detection">
<style type="text/css">
a{-webkit-tap-highlight-color: rgba(0,0,0,0);}
.btn-blue{display:block;height:42px;line-height:42px;text-align:center;border-radius:4px;font-size:18px;color:#FFFFFF;background-color: #4185F3;}
.btn-blue:active{background-color: #357AE8;}
</style>
</head>
<body>
<div class="btn-blue">按钮</div>
<script type="text/javascript">
document.addEventListener("touchstart", function(){}, true)
</script>
</body>
</html>
```

- 兼容性ios5+、部分android 4+、winphone 8

> 要做到全兼容的办法，可通过绑定`ontouchstart`和`ontouchend`来控制按钮的类名

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport">
<meta content="yes" name="apple-mobile-web-app-capable">
<meta content="black" name="apple-mobile-web-app-status-bar-style">
<meta content="telephone=no" name="format-detection">
<meta content="email=no" name="format-detection">
<style type="text/css">
a{-webkit-tap-highlight-color: rgba(0,0,0,0);}
.btn-blue{display:block;height:42px;line-height:42px;text-align:center;border-radius:4px;font-size:18px;color:#FFFFFF;background-color: #4185F3;}
.btn-blue-on{background-color: #357AE8;}
</style>
</head>
<body>
<div class="btn-blue">按钮</div>
<script type="text/javascript">
var btnBlue = document.querySelector(".btn-blue");
btnBlue.ontouchstart = function(){
    this.className = "btn-blue btn-blue-on"
}
btnBlue.ontouchend = function(){
    this.className = "btn-blue"
}
</script>
</body>
</html>
```

### 21.屏幕旋转的事件和样式

> 事件：`window.orientation`，取值：正负90表示横屏模式、0和180表现为竖屏模式

```html
window.onorientationchange = function(){
            switch(window.orientation){
                case -90:
                case 90:
                alert("横屏:" + window.orientation);
                case 0:
                case 180:
                alert("竖屏:" + window.orientation);
                break;
            }
}
```

> 样式

```html
//竖屏时使用的样式
@media all and (orientation:portrait) {
    .css{}
}

//横屏时使用的样式
@media all and (orientation:landscape) {
    .css{}
}
```

### 22.audio元素和video元素在ios和andriod中无法自动播放

> 应对方案：触屏即播

```html
$('html').one('touchstart',function(){
    audio.play()
})
```

### 23.摇一摇功能

> HTML5 deviceMotion：封装了运动传感器数据的事件，可以获取手机运动状态下的运动加速度等数据。

### 24.手机拍照和上传图片

`<input type="file">`的`accept`属性

```html
<!-- 选择照片 -->
<input type=file accept="image/*">
<!-- 选择视频 -->
<input type=file accept="video/*">
```

使用总结：

- ios 有拍照、录像、选取本地图片功能
- 部分android只有选取本地图片功能
- winphone不支持
- input控件默认外观丑陋

### 25. 消除transition闪屏

```html
.css{
    /*设置内嵌的元素在 3D 空间如何呈现：保留 3D*/
    -webkit-transform-style: preserve-3d;
    /*（设置进行转换的元素的背面在面对用户时是否可见：隐藏）*/
    -webkit-backface-visibility: hidden;
}
```

开启硬件加速
- 解决页面闪白
- 保证动画流畅

```html
.css {
   -webkit-transform: translate3d(0, 0, 0);
   -moz-transform: translate3d(0, 0, 0);
   -ms-transform: translate3d(0, 0, 0);
   transform: translate3d(0, 0, 0);
}
```

> 设计高性能CSS3动画的几个要素

- 尽可能地使用合成属性transform和opacity来设计CSS3动画
- 不使用position的left和top来定位
- 利用translate3D开启GPU加速

### 26. android 上去掉语音输入按钮

```html
input::-webkit-input-speech-button {display: none}
```

## 框架

### 1. 移动端基础框架

- [zepto.js](http://zeptojs.com/) 语法与jquery几乎一样，会jquery基本会zepto~
- [iscroll.js](http://cubiq.org/iscroll-5) 解决页面不支持弹性滚动，不支持fixed引起的问题~ 实现下拉刷新，滑屏，缩放等功能~
- [underscore.js](http://underscorejs.org/) 该库提供了一整套函数式编程的实用功能，但是没有扩展任何JavaScript内置对象。
- [fastclick](https://github.com/ftlabs/fastclick) 加快移动端点击响应时间</li>
- [animate.css](http://daneden.github.io/animate.css/) CSS3动画效果库

### 2. 滑屏框架

> 适合上下滑屏、左右滑屏等滑屏切换页面的效果

- [slip.js](https://github.com/peunzhang/slip.js)
- [iSlider.js](https://github.com/peunzhang/iSlider)
- [fullpage.js](https://github.com/peunzhang/fullpage)

### 3.瀑布流框架

- [masonry](http://masonry.desandro.com/)

## 工具推荐

- [caniuse](http://caniuse.com) 各浏览器支持html5属性查询
- [paletton](http://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF)调色搭配

## 关于我

- 个人博客：[https://zhousiwei.gitee.io/](https://zhousiwei.gitee.io/ "https://zhousiwei.gitee.io/")
- 开发笔记：[https://zhousiwei.gitee.io/myBook](https://zhousiwei.gitee.io/myBook "https://zhousiwei.gitee.io/myBook")