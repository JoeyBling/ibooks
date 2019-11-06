---
description: 更改MySQL的存储目录
---

# 更改MySQL的存储目录

##### 重要步骤：一定要先停止Mysql
```bash
# service mysqld stop
```

##### 1、创建目标文件夹
```bash
# mkdir -p /data/mysql
# chown -R mysql.mysql /data/mysql/
```

##### 2、迁移命令
```bash
# mysql_install_db --user=mysql --basedir=/usr --datadir=/data/mysql
```

##### 3、为避免麻烦，删掉原文件夹/var/lib/mysql
```bash
# rm -rf /var/lib/mysql/*
```

##### 4、修改/etc/my.cnf配置文件
```bash
[mysqld]
datadir=/data/mysql
```

##### 5、启动mysql
```bash
# chkconfig mysqld on
# service mysqld restart
```
