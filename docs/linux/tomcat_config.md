---
description: Linux下Tomcat指定JDK和设置内存大小
---

# Linux下Tomcat指定JDK和设置内存大小

##### 一、Linux下Tomcat指定JDK
```bash
# vim bin/setclasspath.sh
```

在脚本开头的地方指定`JAVA_HOME`和`JRE_HOME`

```bash
export JAVA_HOME=/usr/local/jdk1.8.0_40
export JRE_HOME=/usr/local/jdk1.8.0_40/jre
```

##### 二、Linux下Tomcat设置内存大小
```bash
# vim bin/catalina.sh
```

###### Tomcat设置内存为8G:`JAVA_OPTS="-server -Xms8192M -Xmx8192M -XX:PermSize=256M -XX:MaxPermSize=256M"`

###### Tomcat设置内存为4G:`JAVA_OPTS="-server -Xms4096M -Xmx4096M -XX:PermSize=256M -XX:MaxPermSize=256M"`

![](../assets/jianshu/2743275-af5bcc478597a94a.png)
