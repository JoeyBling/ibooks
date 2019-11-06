---
description: Linux下安装rabbitMq
---

# Linux下安装rabbitMq

### Linux下安装rabbitMq
**必须有Erlang环境------>>>[Linux下安装Erlang](https://www.jianshu.com/p/998f9f978f57 "Linux下安装Erlang")**

##### 一、安装rabbitMq
```bash
# cd /usr/local/
# yum install -y xz
# wget http://www.rabbitmq.com/releases/rabbitmq-server/v3.6.2/rabbitmq-server-generic-unix-3.6.2.tar.xz
# xz -d rabbitmq-server-generic-unix-3.6.2.tar.xz
# tar -xvf rabbitmq-server-generic-unix-3.6.2.tar
--配置rabbitMq环境变量
# vim /etc/profile
文件末尾添加 export PATH=$PATH:/usr/local/rabbitmq_server-3.6.2/sbin
# source /etc/profile
```

----
##### 二、配置网页插件
```bash
# rabbitmq-plugins enable rabbitmq_management
--启动rabbitMq
# rabbitmq-server –detached
Tips:rabbitmq默认会创建guest账号，只能用于localhost登录页面管理员
--添加admin用户并且密码为admin
# rabbitmqctl add_user admin admin
--授权admin用户为管理员
# rabbitmqctl set_user_tags admin administrator
--授权访问权限
# rabbitmqctl set_permissions -p "/" admin "." "." ".*"
```

----
##### 三、验证rabbitMq是否安装成功
- 端口：15672 网页管理，  5672 AMQP端口
- 访问 http://IP:15672
----
##### 四、rabbitMq常用命令：
- 启动：`rabbitmq-server –detached`
- 查看服务状态：`rabbitmqctl status`
- 关闭服务：`rabbitmqctl stop`
- 查看所有用户：`rabbitmqctl list_users`
- 添加用户：`rabbitmqctl add_user admin admin`
- 授权用户管理员：`rabbitmqctl set_user_tags admin administrator`
- 授权访问权限：`rabbitmqctl set_permissions -p "/" admin "." "." ".*"`
- 添加虚拟机：`rabbitmqctl add_vhost admin_vhost`
- 授权用户到虚拟机：`rabbitmqctl set_permissions -p admin_vhost admin ".*" ".*" ".*"`

##### Tips:RabbitMQ与Erlang的版本对应关系图
![](../assets/jianshu/2743275-3c3000bee29df4c4.png)
