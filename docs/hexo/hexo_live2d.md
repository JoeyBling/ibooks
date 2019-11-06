---
description: Hexo博客添加helper-live2d动态模型插件
---

# Hexo博客添加helper-live2d动态模型插件

#### Tips:前导必备
- [博主博客地址](https://zhousiwei.gitee.io/)
- 博主使用的是`yilia`主题
- 插件的github地址[hexo-helper-live2d](https://github.com/EYHN/hexo-helper-live2d "hexo-helper-live2d")
- [live2d模型仓库](https://github.com/xiazeyu/live2d-widget-models "live2d模型仓库")
- 必须有Node环境 ➡️ [Linux下安装node和npm](https://www.jianshu.com/p/f8b0a4f7a822)
---
##### 1、安装模块
&#160;&#160;&#160;&#160;**在hexo根目录执行命令**
```bash
# npm install --save hexo-helper-live2d
```
---
##### 2、下载模型
&#160;&#160;&#160;&#160;作者各种模型包展示 ➡️ [ hexo live2d插件 2.0 !](https://huaji8.top/post/live2d-plugin-2.0/ " hexo live2d插件 2.0 !")
> [live2d模型仓库](https://github.com/xiazeyu/live2d-widget-models "live2d模型仓库")

- `live2d-widget-model-chitose`
- `live2d-widget-model-epsilon2_1`
- `live2d-widget-model-gf`
- `live2d-widget-model-haru/01` (use `npm install --save live2d-widget-model-haru`)
- `live2d-widget-model-haru/02` (use `npm install --save live2d-widget-model-haru`)
- `live2d-widget-model-haruto`
- `live2d-widget-model-hibiki`
- `live2d-widget-model-hijiki`
- `live2d-widget-model-izumi`
- `live2d-widget-model-koharu`
- `live2d-widget-model-miku`
- `live2d-widget-model-ni-j`
- `live2d-widget-model-nico`
- `live2d-widget-model-nietzsche`
- `live2d-widget-model-nipsilon`
- `live2d-widget-model-nito`
- `live2d-widget-model-shizuku`
- `live2d-widget-model-tororo`
- `live2d-widget-model-tsumiki`
- `live2d-widget-model-unitychan`
- `live2d-widget-model-wanko`
- `live2d-widget-model-z16`

使用`npm install {packagename}`安装模型
```bash
---笔者使用的模型
# npm install live2d-widget-model-hibiki
```
---
##### 3、详细配置
在Hexo的 `_config.yml` 文件或主题的 `_config.yml` 文件中添加配置.
参阅 [live2d-widget.js API](https://l2dwidget.js.org/docs/class/src/index.js~L2Dwidget.html#instance-method-init)

- 博主配置文件示例

```yaml
# Live2D
## https://github.com/EYHN/hexo-helper-live2d
## https://l2dwidget.js.org/docs/class/src/index.js~L2Dwidget.html#instance-method-init
live2d:
  enable: true
  #enable: false
  scriptFrom: local # 默认
  pluginRootPath: live2dw/ # 插件在站点上的根目录(相对路径)
  pluginJsPath: lib/ # 脚本文件相对与插件根目录路径
  pluginModelPath: assets/ # 模型文件相对与插件根目录路径
  # scriptFrom: jsdelivr # jsdelivr CDN
  # scriptFrom: unpkg # unpkg CDN
  # scriptFrom: https://cdn.jsdelivr.net/npm/live2d-widget@3.x/lib/L2Dwidget.min.js # 你的自定义 url
  tagMode: false # 标签模式, 是否仅替换 live2d tag标签而非插入到所有页面中
  debug: false # 调试, 是否在控制台输出日志
  model:
    use: live2d-widget-model-hibiki
    # use: live2d-widget-model-wanko # npm-module package name
    # use: wanko # 博客根目录/live2d_models/ 下的目录名
    # use: ./wives/wanko # 相对于博客根目录的路径
    # use: https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json # 你的自定义 url
  display:
    position: right
    width: 145
    height: 315
  mobile:
    show: true # 是否在移动设备上显示
    scale: 0.5 # 移动设备上的缩放
  react:
    opacityDefault: 0.7
    opacityOnHover: 0.8
```
---
##### 4、作者寄语
> Everything is ok. But you have to do by yourself.
