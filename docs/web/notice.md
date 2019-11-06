---
description: 前端开发注意事项
---

# 前端开发注意事项

1、清除float浮动

```css
.clearfix {
  *zoom: 1;
}
.clearfix:before, .clearfix:after {
  content: ' ';
  display: table;
}
.clearfix:after {
  clear: both;
}
```

2、radio,checkbox写法&emsp;（：这种写法点后面的文字也可选中前面的选择框）

```html
<input type="radio" id="idRadio" /> <label for="idRadio" >今天</label>
<input type="checkbox" id="idCheck" /> <label for="idCheck" >今天</label>
```

3、在手机端去掉以下标签的各种自带样式
```css
a,select,span,i,input {
  -webkit-tap-highlight-color: transparent; //无色
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);//这个地方的设置最好是用rgba
  -webkit-appearance: none;
  outline: none;
  border: 0;
  line-height: normal;
  background: none;
}
```

4、解决手机web字号不一

`body{ -webkit-text-size-adjust:none;}`

5、去除ie11输入框的X

```css
input[type=text]::-ms-clear {  display: none; width : 0; height: 0; }
input[type=text]::-ms-reveal {  display: none; width : 0; height: 0; }
```

6、去掉chrome input自动填充颜色
```css
input:-webkit-autofill {
   box-shadow: 0px 0px 0px 1000px #fff inset !important;
}
```

7、清除chrome下input自动记住密码

```html
<input style="display: none">
<input type="password" autocomplete="off" placeholder="请输入密码">
```

8、hack的使用
```css
.box{
background-color:#f1ee18; /所有识别/
background-color:#00deff\9; /‘\9’IE6、7、8、9、10识别/
background-color:#00deff\0; /‘\0’IE8、9、10识别/
background-color:#00deff\9\0; /‘\0’IE9、10识别/
+background-color:#a200ff; /‘+’IE6、7识别/
background-color:#1e0bd1; /*’‘IE6识别/
}
IE6能识别，不能识别 !important;
IE7能识别，能识别!important;
FF不能识别，但能识别!important;
“*” IE6、IE7可以识别.IE8、FireFox不能.

:root #test { background-color:purple\9; } :root是给ie9的，网上流传了个版本是 :root #test { background-　color:purple\0;}，这个，新版opera也认识，所以经笔者反复验证最终ie9特有的为:root 选择符 {属性\9;}
@media all and (min-width:0px){ #test {background-color:black\0;} } 这个是老是跟ie抢着认\0的神奇的opera，必须加个\0,不然firefox，chrome，safari也都认识。。。
@media screen and (-webkit-min-device-pixel-ratio:0){ #test {background-color:gray;} }最后这个是浏览器新贵chrome和safari的。

.test:lang(zh-cn){color:#f00;} / For IE8+ and not IE /
.test:nth-child(1){color:#0ff;} / For IE9+ and not IE /

“-″减号是IE6专有的hack
“\9″ IE6/IE7/IE8/IE9/IE10都生效
“\0″ IE8/IE9/IE10都生效，是IE8/9/10的hack
“\9\0″ 只对IE9/IE10生效，是IE9/10的hack

<!—[if IE]>这段文字只在IE浏览器显示<![endif]—>
<!—[if IE 6]>这段文字只在IE6浏览器显示<![endif]—>
<!—[if gte IE 6]>这段文字只在IE6以上(包括)版本IE浏览器显示<![endif]—>
<!—[if !IE 8]>这段文字在非IE8浏览器显示<![endif]—>
<!—[if !IE]>这段文字只在非IE浏览器显示<![endif]—>
```

9、web网站屏幕适配CSS写法
```css
@media screen and (max-width: 800px) {
	body{
		background: #ccc;
	}
 }
```