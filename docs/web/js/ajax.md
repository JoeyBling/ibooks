---
description: ajax写法
---

# ajax写法

```javascript
$(function(){
    $.ajax({
        url: '/path/to/file',
        type: 'get or post',
        dataType: 'default: Intelligent Guess (Other values: xml, json, jsonp, script, or html)',
        data: {param1:'value1', param2:'value2'},
        jsonp: "jsoncallback", //ajax跨域写法
        async: true, //默认值: true。默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为false。
        processData: false, // 告诉jQuery不要去处理发送的数据
        contentType: false, // 告诉jQuery不要去设置Content-Type请求头
        success: function (data){
            /*当请求之后调用。传入返回后的数据，以及包含成功代码的字符串。*/
        },
        dataFilter: function(){
            /*在请求成功之后调用。传入返回的数据以及 "dataType" 参数的值。并且必须返回新的数据（可能是处理过的）传递给 success 回调函数。*/
        },
        error: function(){
            /*在请求出错时调用*/
        },
        beforeSend: function(){
            /*在发送请求之前调用*/
        },
        complete: function(){
            /*当请求完成之后调用这个函数*/
        }
    });
})
```