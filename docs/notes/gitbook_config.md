---
description: GitBook相关配置及优化
---

# GitBook相关配置及优化

### 1、GitBook配置说明
###### 1.1、目录结构
```lua
├── book.json
├── README.md
├── SUMMARY.md
├── chapter-1/
|    ├── README.md
|    ├── something.md
├── chapter-2/
|    ├── README.md
```

###### 1.2、GitBook 特殊文件的功能：

| 文件名 | 描述 |
| :---: | :---: |
| book.json | 配置数据 (optional) |
| README.md | 	电子书的前言或简介 (required) |
| SUMMARY.md | 电子书目录 (optional) |
| GLOSSARY.md | 词汇/注释术语列表 (optional) |

###### 1.3、book.json的配置说明

| 变量 | 描述 |
| :---: | :---: |
| root | 包含所有图书文件的根文件夹的路径，除了 book.json |
| structure | 指定自述文件，摘要，词汇表等的路径 |
| title | 您的书名，默认值是从 README 中提取出来的。在 GitBook.com 上，这个字段是预填的。 |
| description | 您的书籍的描述，默认值是从 README 中提取出来的。在 GitBook.com 上，这个字段是预填的。 |
| author | 作者名。在GitBook.com上，这个字段是预填的。 |
| isbn | 国际标准书号 ISBN |
| language | 本书的语言类型 —— [ISO code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) 。默认值是 `en` |
| direction | 文本阅读顺序。可以是 rtl （从右向左）或 ltr （从左向右），默认值依赖于 language 的值。 |
| gitbook | 应该使用的GitBook版本，并接受类似于 `>=3.0.0` 的条件。 |
| links | 在左侧导航栏添加链接信息 |
| plugins | 要加载的插件列表([官网插件列表](https://docs.gitbook.com/v2-changes/important-differences#plugins)) |
| pluginsConfig | 插件的配置 |

###### 1.4、Gitbook 默认带有 5 个插件：
- `highlight - 语法高亮插件`、`search - 搜索插件`、`sharing - 分享插件`、`font-settings - 字体设置插件`、`livereload - 热加载插件`

###### 1.5、去除自带插件
**可以在插件名称前面加 `-`**
```json
"plugins": [
  "-search"
]
```

**Tips：添加插件后要进行安装 `gitbook install`**

###### 1.6、设置PDF输出格式

| 变量 | 描述 |
| :---: | :---: |
| pdf.pageNumbers | 是否添加页码，默认是true |
| pdf.fontSize | 字体大小，默认是12 |
| pdf.fontFamily | 字体，默认字体是Arial |
| pdf.paperSize | Paper size, options are `a0`,`a1`,`a2`,`a3`,`a4`,`a5`,`a6`,`b0`,`b1`,`b2`,`b3`,`b4`,`b5`,`b6`,`legal`,`letter`(default is `a4`) |
| pdf.margin.top | Top margin (default is 56) |
| pdf.margin.bottom | Bottom margin (default is 56) |
| pdf.margin.right | Right margin (default is 62) |
| pdf.margin.left | Left margin (default is 62) |

---------
### 2、GitBook生成电子书

- 需要有calibre-ebook环境 ➡️ [Linux下安装calibre-ebook](https://www.jianshu.com/p/244c2b4632d9)
- [GitBook生成pdf出现中文不显示或乱码](https://www.jianshu.com/p/e08eb95f79c7)

```bash
--- 生成PDF文件
# gitbook pdf ./ ./mybook.pdf
--- 生成ePub文件
# gitbook epub ./ ./mybook.epub
--- 生成Mobi文件
# gitbook mobi ./ ./mybook.mobi
```

---------
### 3、使用gitbook-convert
> 说明：把`docx`、`xml`、`html`、`odt`文档转成`GitBook`

- **官网地址：[https://github.com/GitbookIO/gitbook-convert](https://github.com/GitbookIO/gitbook-convert)**

```bash
# npm install gitbook-convert -g
--- 如果需要做软链
# ln -s /usr/local/node-v8.11.2-linux-x64/bin/gitbook-convert /usr/local/bin/gitbook-convert
--- 如何使用
# gitbook-convert [options] <file> [export-directory]
```

---------
### 4、GitBook插件列表
- `mygitalk` 基于gitalk的评论插件 ➡️ [https://github.com/snowdreams1006/gitbook-plugin-mygitalk](https://github.com/snowdreams1006/gitbook-plugin-mygitalk)
- `theme-default` GitBook的默认主题 ➡️ [https://github.com/GitbookIO/theme-default](https://github.com/GitbookIO/theme-default)
- `autotheme` 自动换肤插件 ➡️ [https://github.com/willin/gitbook-plugin-autotheme](https://github.com/willin/gitbook-plugin-autotheme)
- `sharing` 默认的分享插件 ➡️ [https://github.com/GitbookIO/plugin-sharing](https://github.com/GitbookIO/plugin-sharing)
- `fontsettings` 默认的字体、字号、颜色设置插件 ➡️ [https://github.com/GitbookIO/plugin-fontsettings](https://github.com/GitbookIO/plugin-fontsettings)
- `highlight` 默认的代码高亮插件，通常会使用 prism 来替换 ➡️ [https://github.com/GitbookIO/plugin-highlight](https://github.com/GitbookIO/plugin-highlight)
- `search` 默认搜索插件 ➡️ [https://github.com/GitbookIO/plugin-search](https://github.com/GitbookIO/plugin-search)
- `search-plus` 支持中文搜索插件 ➡️ [https://github.com/lwdgit/gitbook-plugin-search-plus](https://github.com/lwdgit/gitbook-plugin-search-plus)
- `prism` 基于 [Prism](http://prismjs.com/) 的代码高亮 ➡️ [https://github.com/gaearon/gitbook-plugin-prism](https://github.com/gaearon/gitbook-plugin-prism)
- `favicon` 更改网站的 favicon.ico ➡️ [https://github.com/menduo/gitbook-plugin-favicon](https://github.com/menduo/gitbook-plugin-favicon)
- `github` 在右上角显示 github 仓库的图标链接 ➡️ [https://github.com/GitbookIO/plugin-github](https://github.com/GitbookIO/plugin-github)
- `github-buttons` 显示 github 仓库的**star**和**fork**按钮 ➡️ [https://github.com/azu/gitbook-plugin-github-buttons](https://github.com/azu/gitbook-plugin-github-buttons)
- `splitter` 在左侧目录和右侧内容之间添加一个可以拖拽的栏，用来调整两边的宽度 ➡️ [https://github.com/yoshidax/gitbook-plugin-splitter](https://github.com/yoshidax/gitbook-plugin-splitter)
- `copy-code-button` 为代码块添加复制的按钮 ➡️ [https://github.com/WebEngage/gitbook-plugin-copy-code-button](https://github.com/WebEngage/gitbook-plugin-copy-code-button)
- `tbfed-pagefooter` 自定义页脚，显示版权和最后修订时间 ➡️ [https://github.com/zhj3618/gitbook-plugin-tbfed-pagefooter](https://github.com/zhj3618/gitbook-plugin-tbfed-pagefooter)
- `expandable-chapters` 收起或展开章节目录中的父节点 ➡️ [https://github.com/DomainDrivenArchitecture/gitbook-plugin-expandable-chapters](https://github.com/DomainDrivenArchitecture/gitbook-plugin-expandable-chapters)
- `expandable-chapters-small` 比较好的折叠侧边栏 ➡️ [https://github.com/lookdczar/gitbook-plugin-expandable-chapters-small-auto](https://github.com/lookdczar/gitbook-plugin-expandable-chapters-small-auto)
- `book-summary-scroll-position-saver` 自动保存左侧目录区域导航条的位置 ➡️ [https://github.com/yoshidax/gitbook-plugin-book-summary-scroll-position-saver](https://github.com/yoshidax/gitbook-plugin-book-summary-scroll-position-saver)
- `ga` 添加 Google 统计代码 ➡️ [https://github.com/GitbookIO/plugin-ga](https://github.com/GitbookIO/plugin-ga)
- `sitemap` 生成站点地图 ➡️ [https://github.com/GitbookIO/plugin-sitemap](https://github.com/GitbookIO/plugin-sitemap)
- `baidu` 使用百度统计 ➡️ [https://github.com/poppinlp/gitbook-plugin-baidu](https://github.com/poppinlp/gitbook-plugin-baidu)
- `Donate` Gitbook 捐赠打赏插件 ➡️ [https://github.com/willin/gitbook-plugin-donate](https://github.com/willin/gitbook-plugin-donate)
- `anchors` 标题带有 github 样式的锚点 ➡️ [https://github.com/rlmv/gitbook-plugin-anchors](https://github.com/rlmv/gitbook-plugin-anchors)
- `anchor-navigation-ex` 插件锚导航-EX ➡️ [https://github.com/zq99299/gitbook-plugin-anchor-navigation-ex](https://github.com/zq99299/gitbook-plugin-anchor-navigation-ex)
- `theme-api` 编写 API 文档 ➡️ [https://github.com/GitbookIO/theme-api](https://github.com/GitbookIO/theme-api)
- `katex` 使用KaTex进行数学排版 ➡️ [https://github.com/GitbookIO/plugin-katex](https://github.com/GitbookIO/plugin-katex)
- `editlink` 内容顶部显示**编辑本页**链接 ➡️ [https://github.com/zhaoda/gitbook-plugin-editlink](https://github.com/zhaoda/gitbook-plugin-editlink)
- `ad` 在每个页面顶部和底部添加广告或任何自定义内容 ➡️ [https://github.com/zhaoda/gitbook-plugin-ad](https://github.com/zhaoda/gitbook-plugin-ad)
- `image-captions` 抓取内容中图片的`alt`或`title`属性，在图片下面显示标题 ➡️ [https://github.com/todvora/gitbook-plugin-image-captions](https://github.com/todvora/gitbook-plugin-image-captions)
- `chart` 使用 C3.js 图表 ➡️ [https://github.com/csbun/gitbook-plugin-chart](https://github.com/csbun/gitbook-plugin-chart)
- `styles-sass` 使用 SASS 替换 CSS ➡️ [https://github.com/GitbookIO/plugin-styles-sass](https://github.com/GitbookIO/plugin-styles-sass)
- `styles-less` 使用 LESS 替换 CSS ➡️ [https://github.com/GitbookIO/plugin-styles-less](https://github.com/GitbookIO/plugin-styles-less)
- `disqus` 添加 disqus 评论插件 ➡️ [https://github.com/GitbookIO/plugin-disqus](https://github.com/GitbookIO/plugin-disqus)
- `latex-codecogs` 使用数学方程式 ➡️ [https://github.com/GitbookIO/plugin-latex-codecogs](https://github.com/GitbookIO/plugin-latex-codecogs)
- `mermaid` 使用流程图 ➡️ [https://github.com/JozoVilcek/gitbook-plugin-mermaid](https://github.com/JozoVilcek/gitbook-plugin-mermaid)
- `atoc` 插入 TOC 目录 ➡️ [https://github.com/willin/gitbook-plugin-atoc](https://github.com/willin/gitbook-plugin-atoc)
- `ace` 插入代码高亮编辑器 ➡️ [https://github.com/ymcatar/gitbook-plugin-ace](https://github.com/ymcatar/gitbook-plugin-ace)
- `sectionx` 分离各个段落，并提供一个展开收起的按钮 ➡️ [https://github.com/ymcatar/gitbook-plugin-sectionx](https://github.com/ymcatar/gitbook-plugin-sectionx)
- `mcqx` 交互式多选插件 ➡️ [https://github.com/ymcatar/gitbook-plugin-mcqx](https://github.com/ymcatar/gitbook-plugin-mcqx)
- `include-codeblock` 通过引用文件插入代码 ➡️ [https://github.com/azu/gitbook-plugin-include-codeblock](https://github.com/azu/gitbook-plugin-include-codeblock)
- `fbqx` 使用填空题 ➡️ [https://github.com/Erwin-Chan/gitbook-plugin-fbqx](https://github.com/Erwin-Chan/gitbook-plugin-fbqx)
- `spoiler` 隐藏答案，当鼠标划过时才显示 ➡️ [https://github.com/ymcatar/gitbook-plugin-spoiler](https://github.com/ymcatar/gitbook-plugin-spoiler)
- `anchor-navigation` 锚点导航 ➡️ [https://github.com/yaneryou/gitbook-plugin-anchor-navigation](https://github.com/yaneryou/gitbook-plugin-anchor-navigation)
- `youtubex` 插入 YouTube 视频 ➡️ [https://github.com/ymcatar/gitbook-plugin-youtubex](https://github.com/ymcatar/gitbook-plugin-youtubex)
- `redirect` 重定向页面跳转 ➡️ [https://github.com/ketan/gitbook-plugin-redirect](https://github.com/ketan/gitbook-plugin-redirect)
- `duoshuo` 使用多说评论 ➡️ [https://github.com/codepiano/gitbook-plugin-duoshuo](https://github.com/codepiano/gitbook-plugin-duoshuo)
- `jsfiddle` 插入 JSFiddle 组件 ➡️ [https://github.com/Mavrin/gitbook-plugin-jsfiddle](https://github.com/Mavrin/gitbook-plugin-jsfiddle)
- `jsbin` 插入 JSBin 组件 ➡️ [https://github.com/jcouyang/gitbook-plugin-jsbin](https://github.com/jcouyang/gitbook-plugin-jsbin)
- `Advanced Emoji` 支持emoji表情 ➡️ [https://github.com/codeclou/gitbook-plugin-advanced-emoji](https://github.com/codeclou/gitbook-plugin-advanced-emoji)
- `Puml` 使用 PlantUML 展示 uml 图 ➡️ [https://github.com/GitbookIO/plugin-puml](https://github.com/GitbookIO/plugin-puml)
- `Graph` 使用 function-plot 绘制数学函数图 ➡️ [https://github.com/cjam/gitbook-plugin-graph](https://github.com/cjam/gitbook-plugin-graph)
- `Todo` 添加 Todo 功能 ➡️ [https://github.com/ly-tools/gitbook-plugin-todo](https://github.com/ly-tools/gitbook-plugin-todo)
- `include-csv` 展示 csv 文件内容 ➡️ [https://github.com/TakuroFukamizu/gitbook-plugin-include-csv](https://github.com/TakuroFukamizu/gitbook-plugin-include-csv)
- `musicxml` 支持 musicxml 格式的乐谱渲染 ➡️ [https://github.com/ymcatar/gitbook-plugin-musicxml](https://github.com/ymcatar/gitbook-plugin-musicxml)
- `versions-select` 添加版本选择的下拉菜单，针对文档有多个版本的情况 ➡️ [https://github.com/prescottprue/gitbook-plugin-versions-select](https://github.com/prescottprue/gitbook-plugin-versions-select)
- `rss` 添加 rss 订阅功能 ➡️ [https://github.com/denysdovhan/gitbook-plugin-rss](https://github.com/denysdovhan/gitbook-plugin-rss)
- `multipart` 将书籍分成几个部分 ➡️ [https://github.com/citizenmatt/gitbook-plugin-multipart](https://github.com/citizenmatt/gitbook-plugin-multipart)
- `url-embed` 嵌入动态内容 ➡️ [https://github.com/basilvetas/gitbook-plugin-url-embed](https://github.com/basilvetas/gitbook-plugin-url-embed)

### 5、博主示例book.json配置

```json
{
	"gitbook": "3.x.x",
	"plugins": ["favicon", "yahei", "github", "autotheme", "-lunr", "-search",
		"search-plus", "prism", "-highlight", "github-buttons", "splitter",
		"-sharing", "sharing-plus", "tbfed-pagefooter", "expandable-chapters-small",
		"book-summary-scroll-position-saver", "ga", "baidu", "donate",
		"anchors", "anchor-navigation-ex", "sitemap-general",
		"copy-code-button", "mygitalk", "multipart"
	],
	"pluginsConfig": {
		"theme-default": {
			"showLevel": true
		},
		"fontSettings": {
			"family": "serif",
			"size": 2
		},
		"github": {
			"url": "https://github.com/JoeyBling"
		},
		"autotheme": {
			"white": [9, 10, 11, 12, 13, 14, 15, 16, 17],
			"sepia": [6, 7, 8, 18, 19],
			"night": [20, 21, 22, 23, 0, 1, 2, 3, 4, 5]
		},
		"prism": {
			"css": [
				"prismjs/themes/prism-tomorrow.css"
			]
		},
		"github-buttons": {
			"buttons": [{
				"user": "JoeyBling",
				"repo": "myBook",
				"type": "star",
				"size": "small",
				"count": true
			}]
		},
		"sharing": {
			"douban": false,
			"facebook": false,
			"google": true,
			"hatenaBookmark": false,
			"instapaper": false,
			"line": true,
			"linkedin": true,
			"messenger": false,
			"pocket": false,
			"qq": false,
			"qzone": true,
			"stumbleupon": false,
			"twitter": false,
			"viber": false,
			"vk": false,
			"weibo": true,
			"whatsapp": false,
			"all": [
				"facebook", "google", "twitter",
				"weibo", "instapaper", "linkedin",
				"pocket", "stumbleupon"
			]
		},
		"tbfed-pagefooter": {
			"copyright": "Copyright &copy <a href='https://zhousiwei.gitee.io' target='_blank'>試毅-思伟</a> 2019",
			"modify_label": "修订时间：",
			"modify_format": "YYYY-MM-DD HH:mm:ss"
		},
		"ga": {
			"token": "UA-142790104-1"
		},
		"baidu": {
			"token": "f1f256f18b7899e11647d6ec1f3ded2f"
		},
		"donate": {
			"wechat": "/assets/weixin.png",
			"alipay": "/assets/alipay.jpeg",
			"title": "",
			"button": "赏",
			"alipayText": "支付宝打赏",
			"wechatText": "微信打赏"
		},
		"anchor-navigation-ex": {
			"showLevel": true,
			"associatedWithSummary": false,
			"printLog": false,
			"multipleH1": true,
			"mode": "float",
			"showGoTop": true,
			"float": {
				"floatIcon": "fa fa-navicon",
				"showLevelIcon": false,
				"level1Icon": "fa fa-hand-o-right",
				"level2Icon": "fa fa-hand-o-right",
				"level3Icon": "fa fa-hand-o-right"
			},
			"pageTop": {
				"showLevelIcon": false,
				"level1Icon": "fa fa-hand-o-right",
				"level2Icon": "fa fa-hand-o-right",
				"level3Icon": "fa fa-hand-o-right"
			}
		},
		"sitemap-general": {
			"prefix": "https://zhousiwei.gitee.io/myBook/"
		},
		"favicon": {
			"shortcut": "/assets/images/favicon.ico",
			"bookmark": "/assets/images/favicon.ico",
			"appleTouch": "/assets/images/apple-touch-icon.png",
			"appleTouchMore": {
				"120x120": "/assets/images/apple-touch-icon-120x120.png",
				"180x180": "/assets/images/apple-touch-icon-180x180.png"
			}
		},
		"mygitalk": {
			"clientID": "608e351b48e4d0a3a528",
			"clientSecret": "***加密***",
			"repo": "myBook",
			"owner": "JoeyBling",
			"admin": ["JoeyBling"],
			"distractionFreeMode": false
		}
	},
	"pdf": {
		"pageNumbers": true,
		"fontFamily": "Arial",
		"fontSize": 12,
		"paperSize": "a4",
		"margin": {
			"right": 62,
			"left": 62,
			"top": 56,
			"bottom": 56
		}
	},
	"title": "試毅-思伟_开源项目",
	"description": "試毅-思伟_开源项目",
	"author": "試毅-思伟",
	"language": "zh-hans",
	"root": ".",
	"structure": {
		"readme": "introduction.md"
	},
	"links": {
		"sidebar": {
			"GitHub": "https://github.com/JoeyBling",
			"个人博客": "https://zhousiwei.gitee.io"
		}
	}
}
```
**Tips：添加插件后要进行安装 `gitbook install`**
