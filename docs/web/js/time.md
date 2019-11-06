---
description: 时间相关模块
---

# 时间相关模块

### 获得服务器时间

```javascript
function get_server_time(){
    var xmlHttp = false;
    //获取服务器时间
    try {
        xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e2) {
            xmlHttp = false;
        }
    }

    if (!xmlHttp && typeof XMLHttpRequest != 'undefined') {
        xmlHttp = new XMLHttpRequest();
    }

    xmlHttp.open("GET", window.location.href.toString(), false);
    xmlHttp.setRequestHeader("If-None-Match", "bytes=-1");
    xmlHttp.setRequestHeader("Cache-Control","no-cache");
    xmlHttp.send(null);

    return new Date(xmlHttp.getResponseHeader("Date"));
}
```

### 时间格式转化，两者时间相比较

```javascript
// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18

Date.prototype.Format = function(fmt){ //author: meizz
    var o = {
        "M+" : this.getMonth()+1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S"  : this.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt))
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
    if(new RegExp("("+ k +")").test(fmt))
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
}

$(function(){
    //两个时间之间的比较
    function dateCompare(dateStart,dateEnd){
        dateStart = dateStart.replace(/\-/gi,"/");
        dateEnd = dateEnd.replace(/\-/gi,"/");
        var time1 = new Date(dateStart).getTime();
        var time2 = new Date(dateEnd).getTime();
        if(time2 > time1){
            return true;
        }
        return false;
    }//eg

    运用场景如：
    if(dateCompare(new Date($.cookie("dataTime")).Format("yyyy-MM-dd"),new Date().Format("yyyy-MM-dd"))){
        //返回true执行这里面的内容
    }
})
```

### 把时间转化为准备时间

```javascript
//把时间转换为标准时间
function get_unix_time(dateStr){
    var newstr = dateStr.replace(/-/g,'/');
    var date =  new Date(newstr);
    //var time_str = date.getTime().toString();
    //return time_str.substr(0, 10);
    return date;
}
```

### 计算已经开团时间

```javascript
var indate = $("#start_date").val();
var todate = get_server_time(); //服务器时间
var olddate = get_unix_time(indate);  //调用上面的函数把时间转为标准时间
var timepass = 0;
function showTime(){
    var timelong = (todate - olddate) + timepass;
    var h = parseInt(timelong/3600000,10);
    var m = parseInt(timelong%3600000/60000,10);
    var s = parseInt(timelong%60000/1000);
    document.getElementById("datetime").innerHTML = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
    setTimeout(function(){
        timepass += 1000;
        showTime();
    },1000);
}
showTime();

// 运用实例：抱团活动
```