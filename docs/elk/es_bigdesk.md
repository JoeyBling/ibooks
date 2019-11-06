---
description: ElasticSearch-2-x-x版本安装bigdesk插件
---

# ES插件BigDesk安装

> bigdesk Github地址：[https://github.com/lukas-vlcek/bigdesk](https://github.com/lukas-vlcek/bigdesk "https://github.com/lukas-vlcek/bigdesk")

bigdesk支持的最新版本的ES是1.3.0 ... 1.3.x

然而想要在新版本ES上安装（`2.x.x`），项目中遇到过一些BUG，在ES在最新版本中有修复，所以采用了`2.3.0`的版本

`head`插件查看数据和集群其他一些挺方便，但是对集群状况监控不够细致，而且使用中有一些BUG问题，一般会和`bigdesk`、`kopf`结合使用。

下载安装的时候出现问题：

```bash
Installing lukas-vlcek/bigdesk...
Trying https://github.com/lukas-vlcek/bigdesk/archive/master.zip ...
Downloading.......................................................................................................................................................................................................................DONE
Verifying https://github.com/lukas-vlcek/bigdesk/archive/master.zip checksums if available ...
NOTE: Unable to verify checksum for downloaded plugin (unable to find .sha1 or .md5 file to verify)
ERROR: Could not find plugin descriptor ‘plugin-descriptor.properties‘ in plugin zip
```

解决办法：

##### 1. 下载bigdesk的master的zip包

##### 2. 解压到安装路径下 elasticsearch-2.3.0/plugins/目录下，会有一个bigdesk或者bigdesk-master（可以改成bigdesk）目录

##### 3. 提示没有找到`plugin-descriptor.properties`文件，那就创建这个文件，并写入以下内容

```properties
description=bigdesk
version=bigdesk
name=bigdesk
site=true
```

保存OK，大功告成。
#### 此时目录树为 `plugins/bigdesk/_site/*`
#### `plugin-descriptor.properties`文件放置在`plugins/bigdesk/`下    解压的文件放在`/_site/`目录下

然后在本地浏览器中输入 http://localhost:9200/_plugin/bigdesk/

注：_plugin后面的bigdesk就是plugins下目录名字，若是bigdesk-master，则需要写这个名字

本以为会正常运行，然而出现了一个js弹框，有这样的内容

```javascript
Bigdesk may not work correctly!
Found ES node version:2.3.0
Require ES node version:>= 1.0.0.RC1
```

解决办法：

  定位到`plugins/bigdesk/_site/js/store`目录，打开`BigdeskStore.js`，定位到`142`行

```javascript
return (major == 1 && minor >= 0 && maintenance >= 0 && (build != ‘Beta1‘ || build != ‘Beta2‘));
```

看到这么一行，把 `major ==1` 改成 `major >=1`，然后保存。

浏览器重新打开 http://localhost:9200/_plugin/bigdesk/

OK.可以看到正常运行了。

分享一下楼主打包的文件  。插件包含了head插件和bigdesk插件
head插件是单独运行的
[http://download.csdn.net/download/qq_30930805/10233395](http://download.csdn.net/download/qq_30930805/10233395 "http://download.csdn.net/download/qq_30930805/10233395")
其中head插件基于nodejs运行，具体参考
[http://blog.csdn.net/qq_30930805/article/details/74990324](http://blog.csdn.net/qq_30930805/article/details/74990324 "http://blog.csdn.net/qq_30930805/article/details/74990324")
