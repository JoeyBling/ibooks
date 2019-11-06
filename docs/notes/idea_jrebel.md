---
description: IDEA+JRebel全自动热部署
---

# IDEA+JRebel全自动热部署

- 链接：[https://pan.baidu.com/s/1ZE5cv1vhFQhdaj91dFD-GA](https://pan.baidu.com/s/1ZE5cv1vhFQhdaj91dFD-GA) 密码：b2k8
下载后解压

![](../assets/jianshu/2743275-5eeeee6b3feaff69.png)

---
##### 1、打开IDEA离线安装插件，选择刚刚下载的ZIP就行了
![](../assets/jianshu/2743275-c7cdb60d9a56ee2f.png)

---

##### 2、激活JRebel
装完以后打开 `IDEA` ➡️ `Help` ➡️ `JRebel` ➡️ `Activation`
![](../assets/jianshu/2743275-0a44e8b787e2c562.png)

**运行激活程序**

![](../assets/jianshu/2743275-f0bd9dcec80e343b.png)

![](../assets/jianshu/2743275-73ef269d494b1b8b.png)

地址填写 `http://127.0.0.1:8888/Zephyr` 邮箱随便填

![](../assets/jianshu/2743275-d49e3b733d596be2.png)

---

##### 3、使用及自动部署
依次打开 `View` ➡️ `Tool Windows` ➡️ `JRebel`

![](../assets/jianshu/2743275-dd461e0e86e12543.png)

这时候已经实现热部署了,不过需要每次修改源码后手动执行UPDATE操作,我们可以结合Idea自身的Debug Hot swap功能,在`运行和调试配置`中,配置自动执行UPDATE操作

![](../assets/jianshu/2743275-42171ad8fe868096.png)

---

##### 4、勾选自动编译功能

![](../assets/jianshu/2743275-60b58a6f0de5110d.png)
