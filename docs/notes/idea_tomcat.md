---
description: 解决Tomcat在IDEA控制台中文乱码的问题
---

# 解决Tomcat在IDEA控制台中文乱码的问题

###### 在idea的安装目录下的`bin/idea.exe.vmoptions`文件和`idea64.exe.vmoptions`文件的末尾另起一行添加

```bash
-Dfile.encoding=UTF-8
```

![](../assets/jianshu/2743275-61972ac0c4df530b.png)
