---
description: ELK之本地Grok-Debugger配置
---

# ELK之本地Grok-Debugger配置

## 1、Ruby环境安装

###### 1.1、清理已安装过的
```bash
# yum erase ruby ruby-libs ruby-mode ruby-rdoc ruby-irb ruby-ri ruby-docs
# yum remove ruby
```

###### 1.2、Ruby的安装(`别使用ruby最新的2.2或者2.3的版本，可能出现部分组件无法安装`)
```bash
# yum install -y wget unzip
# cd /usr/local
# yum -y install  openssl-devel gcc
# wget https://ruby.taobao.org/mirrors/ruby/2.1/ruby-2.1.7.tar.gz
# tar zxf ruby-2.1.7.tar.gz
# cd ruby-2.1.7
# ./configure --prefix=/usr/local/ruby2.1.7
# make && make install
# echo 'export PATH=/usr/local/ruby2.1.7/bin:$PATH'>>/etc/profile
# source /etc/profile
```

###### 1.3、RubyGems工具安装
```bash
# cd /usr/local
# wget http://rubygems.global.ssl.fastly.net/rubygems/rubygems-2.6.2.tgz
# tar zxf rubygems-2.6.2.tgz
# cd rubygems-2.6.2
# ruby setup.rb
```

###### 1.4、替换gem源,由于网络环境的问题，访问官方源非常慢，使用淘宝的gem源
```bash
# gem sources --add https://ruby.taobao.org/ --remove https://rubygems.org/
# gem sources –l
```

## 2、GrokDebug的安装

###### 2.1、下载源码包
```bash
# mkdir /usr/local/grokbug
# cd /usr/local/grokbug
# wget https://codeload.github.com/nickethier/grokdebug/zip/master
# unzip master
# mv grokdebug-master/* .
# rm -rf grokdebug-master/
```

###### 2.2、Ruby组件安装(以下组件都对版本有相应的要求)
```bash
--- 查看缺少的组件
# ruby config.ru
--- 就会提示组件及对应的版本
# gem install bundler
gem install cabin -v=0.5.0
gem install haml -v=3.1.7
gem install jls-grok -v=0.10.10
gem install json -v=1.7.5
gem install kgio -v=2.8.0
gem install rack -v=1.4.1
gem install rack-protection -v=1.2.0
gem install raindrops -v=0.11.0
gem install shotgun -v=0.9
gem install tilt -v=1.3.3
gem install sinatra -v=1.3.3
gem install unicorn -v=4.6.3
```

###### 2.3、启动服务
```bash
# cd /usr/local/grokbug
# nohup bundle exec unicorn -p 8080 -c ./unicorn &
```

###### 2.4、关闭防火墙
```bash
# service iptables stop
# chkconfig iptables off
```

###### 2.5、替换Google的jquery源
```bash
# cd /usr/local/grokbug
# cd views
```
执行下面5条语句

```bash
# sed -i 's#//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js#//lib.sinaapp.com/js/jquery/1.8.1/jquery.min.js#g' index.haml

# sed -i 's#//ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js#//lib.sinaapp.com/js/jquery-ui/1.9.2/jquery-ui.min.js#g' index.haml

# sed -i 's#//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js#//lib.sinaapp.com/js/jquery/1.7.2/jquery.min.js#g' patterns.haml

# sed -i 's#//ajax.googleapis.com/ajax/libs/jqueryui/1.9.0/themes/ui-lightness/jquery-ui.css#//lib.sinaapp.com/js/jquery-ui/1.9.0/themes/ui-lightness/jquery-ui.css#g' layout.haml

# sed -i 's#//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js#//lib.sinaapp.com/js/jquery/1.7.2/jquery.min.js#g' discover.haml
```

测试，通过web路径访问测试了
http://xxx:8080

![](../assets/jianshu/2743275-ab527d48b90f29e8.png)
