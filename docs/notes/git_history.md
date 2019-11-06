---
description: Git彻底删除历史提交记录的方法
---

# Git彻底删除历史提交记录的方法

###### 1、查看Git提交记录
```bash
# git log
```

--------
###### 2、找到需要回滚到的提交点，复制它的hash值

![](../assets/jianshu/2743275-f79de5b6d7280d81.png)

```bash
# git reset --hard 你复制的hash值
```
--------
###### 3、将当前指向的head推到git
```bash
# git push --force
```
