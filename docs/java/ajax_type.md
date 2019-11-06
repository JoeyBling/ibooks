---
description: Ajax请求设置Type为Form-Data
---

# Ajax请求设置Type为Form-Data

在你Ajax请求中加上

```javascript
headers : {
	'Content-Type' : 'application/x-www-form-urlencoded'
},
```

示例:
```javascript
$.ajax({
	type : "POST",
	url : "../user/repwd",
	headers : {
	  'Content-Type' : 'application/x-www-form-urlencoded'
	},
	data : data,
	dataType : "json",
});
```