// .vuepress/config.js
module.exports = {
  // 以斜杠开始，并以斜杠结束
  base: '/ibooks/',
  theme: 'vuepress-theme-yilia-plus',
  // theme: '@vuepress/theme-default',
  title: '試毅-思伟_技术笔记',
  description: '记录工作和学习过程中的笔记：Java、前端开发、Hexo博客、聚合支付、Linux笔记、ElasticSearch、ELK日志分析',
  dest: 'dist',
  markdown: {
    /* 代码块显示行号 */
    lineNumbers: false,
    externalLinks: {
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      // 将会被设置为 <html> 的 lang 属性
    }
  },
  plugins: [
    ['vuepress-plugin-mygitalk', {
      // [require('C:\\Users\\Administrator.QH-20150311UHWZ\\Desktop\\vuepress-plugin-mygitalk'), {
      // 是否启用(关闭请设置为false)(default: true)
      enable: true,
      // 日志启用(调试用)(default: true)
      log: true,
      // 是否开启首页评论(default: true)
      home: true,
      // Gitalk配置
      gitalk: {
        // GitHub Application Client ID.
        clientID: '071b084546d9f5bd6306',
        // clientID: 'bf097eb09593945b730d',
        // GitHub Application Client Secret.
        clientSecret: 'a19c22f6b78dd87a731a192afca81cf63e57c5d5',
        // clientSecret: '77f28d7e9e081eaae1493451abfd05a1e9750db3',
        // GitHub repository.
        repo: 'ibooks',
        // GitHub repository 所有者，可以是个人或者组织。
        owner: 'JoeyBling',
        // 设置语言(default: zh-CN)
        language: 'zh-CN',
      }
    }],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['@vuepress/plugin-back-to-top', false],
    [
      'vuepress-plugin-gotop-plus', {
        // 是否在移动设备上显示(default: true)
        mobileShow: true,
        // // 回到页首元素显示触发的高度阈值(default: 50)
        threshold: 50
      }
    ],
    ['vuepress-plugin-sitemap', {
      // https://github.com/ekoeryanto/vuepress-plugin-sitemap
      hostname: 'http://zhousiwei.gitee.io/ibooks',
      outFile: 'sitemap.xml'
    }],
    ['vuepress-plugin-medium-zoom', {
      // 支持点击缩放的图片元素的选择器
      // 默认值： '.content img' 或 '.theme-default-content img'
      // selector: 'img',
      // selector: 'img:not(a>img)',
      selector: ':not(a) > img',

      // 进入一个页面后，经过一定延迟后使页面中的图片支持缩放
      // 默认值： 500
      delay: 500,

      // medium-zoom 的 options
      // 默认值： {}
      options: {
        margin: 24,
        /* 7DBFD4、E1F2D9、EBCDEE */
        background: '#D7BAE8',
        scrollOffset: 0,
      }
    }],
    [
      'vuepress-plugin-helper-live2d', {
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: 'hibiki',
          display: {
            position: "right", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 65, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false // 是否在移动设备上显示(暂时没有移动设备上的缩放配置)(default: false)
          },
          react: {
            opacity: 0.8 // 模型透明度(default: 0.8)
          }
        }
      }
    ]
  ],
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#3eaf7c'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    ['link', {
      rel: 'apple-touch-icon',
      href: '/icons/apple-touch-icon-152x152.png'
    }],
    ['link', {
      rel: 'mask-icon',
      href: '/icons/safari-pinned-tab.svg',
      color: '#3eaf7c'
    }],
    ['meta', {
      name: 'msapplication-TileImage',
      content: '/icons/apple-touch-icon-144x144.png'
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#000000'
    }]
  ],
  themeConfig: {
    /* vuepress-theme-yilia-plus 配置 */
    yilia_plus: {
      // github-corner(关闭请设置为false)
      github: {
        url: "https://github.com/JoeyBling/vuepress-theme-yilia-plus"
      },
      footer: {
        // 网站成立年份(若填入年份小于当前年份，则显示为 2018-2019 类似的格式)
        since: 2018,
        // 网站作者(关闭请设置为false)
        author: '<a href="https://github.com/JoeyBling/vuepress-theme-yilia-plus" target="_blank">試毅-思伟</a>',
        // 访问量统计功能(不蒜子)
        busuanzi: {
          // 是否启用(关闭请设置为false)
          enable: true
        }
      },
      /* 看板娘动态模型插件
      @GitHub:https://github.com/JoeyBling/live2d-widget.js */
      live2d: {
        // 是否启用(关闭请设置为false)
        enable: true,
        /* 模型名称(取值请参考：https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA) */
        model: 'hibiki'
      }
    },
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    // repo: 'https://gitee.com/zhousiwei/ibooks',
    repo: 'https://github.com/JoeyBling/ibooks',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',
    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',

    nav: [{
        text: '主页',
        link: '/'
      },
      {
        text: '开源项目',
        link: '/opensource/',
        items: [{
            text: 'SpringBoot集成MyBatisPlus',
            link: '/opensource/springboot_mybatisplus'
          },
          {
            text: '基于SpringBoot + Shiro + MyBatisPlus的权限管理框架',
            link: '/opensource/bootplus'
          },
          {
            text: '自制spring boot starter for fastjson',
            link: '/opensource/fastjson-spring-boot-starter'
          },
          {
            text: '一个会动的简历',
            link: '/opensource/anires'
          },
          {
            text: '✏️✏️Java软件工程师简历',
            link: '/opensource/cv'
          },
          {
            text: '一个简洁优雅的hexo主题',
            link: '/opensource/hexo-theme-yilia-plus'
          },
          {
            text: 'hexo-theme-yilia-plus配置Demo',
            link: '/opensource/yilia-plus-demo'
          },
          {
            text: '自动为hexo中的图片映射绝对路径',
            link: '/opensource/hexo-filter-image'
          },
          {
            text: '一款简洁优雅的VuePress主题',
            link: '/opensource/vuepress-theme-yilia-plus'
          },
          {
            text: 'VuePress集成Live2D看板娘',
            link: '/opensource/vuepress-plugin-helper-live2d'
          },
          {
            text: 'VuePress集成Gitalk',
            link: '/opensource/vuepress-plugin-mygitalk'
          },
          {
            text: 'VuePress回到页首插件Plus',
            link: '/opensource/vuepress-plugin-gotop-plus'
          },
          {
            text: 'Mybatis Generator 代码生成插件',
            link: '/opensource/mybatis-generator'
          },
          {
            text: '不蒜子访问量统计功能',
            link: '/opensource/busuanzi.pure.js'
          },
        ]
      },
      {
        text: '技术笔记',
        link: '/java/',
        items: [{
            text: 'Java笔记',
            link: '/java/springboot2'
          },
          {
            text: '前端开发笔记',
            link: '/web/'
          },
          {
            text: 'Hexo博客',
            link: '/hexo/hexo_music'
          },
          {
            text: '日记本',
            link: '/notes/git_branch'
          },
          {
            text: 'Linux',
            link: '/linux/glibc'
          },
          {
            text: 'ELK日志分析',
            link: '/elk/linux_es5'
          }
        ]
      },
      {
        text: '关于我',
        link: '/about/'
      },
      {
        text: '个人博客',
        link: 'https://zhousiwei.gitee.io/'
      }
      // {
      // text: 'GitHub',
      // link: 'https://github.com/JoeyBling/'
      // }
    ],
    sidebar: {
      '/opensource/': [{
        title: '开源项目',
        collapsable: false,
        children: [
          ['', '开源项目'], 'springboot_mybatisplus', 'bootplus', 'fastjson-spring-boot-starter',
          'anires', 'cv', 'hexo-theme-yilia-plus', 'yilia-plus-demo', 'hexo-filter-image',
          'vuepress-theme-yilia-plus', 'vuepress-plugin-helper-live2d',
          'vuepress-plugin-mygitalk', 'vuepress-plugin-gotop-plus', 'live2d-widget.js',
          'mybatis-generator', 'ftp4che', 'busuanzi.pure.js',
        ]
      }],
      '/java/': [{
        title: 'Java笔记',
        collapsable: false,
        children: ['springboot2', 'springboot_druid', 'springboot_index', 'ajax_type']
      }],
      '/web/': [{
          title: '前端开发笔记',
          collapsable: false,
          children: [
            ['', '前端开发笔记'], 'collect', 'notice'
          ]
        },
        {
          title: 'nodejs项目配置文件介绍',
          collapsable: false,
          children: [
            ['node/nodejs', 'nodejs项目配置文件介绍'], 'node/gulpfilejs', 'node/packagejson', 'node/configrb', 'node/gitignore'
          ]
        },
        {
          title: '模块化管理工具及框架',
          collapsable: true,
          children: [
            ['frame/', '模块化管理工具及框架'], 'frame/webpack', 'frame/seajs'
          ]
        },
        {
          title: '常见js模块',
          collapsable: true,
          children: [
            ['js/', 'js模块'], 'js/time', 'js/commonjs', 'js/ele_opera', 'js/function', 'js/ajax'
          ]
        },
        {
          title: '常用插件',
          collapsable: true,
          children: [
            ['plugin/', '常用插件'], 'plugin/model', 'plugin/plugins'
          ]
        }
      ],
      '/hexo/': [{
        title: 'Hexo博客',
        collapsable: false,
        children: ['hexo_music', 'hexo_live2d', 'hexo_pv', 'hexo_github', 'article_set_top']
      }],
      '/notes/': [{
        title: '日记本',
        collapsable: false,
        children: ['git_branch', 'git_history', 'gitbook', 'gitbook_config', 'idea_jrebel', 'idea_lombok', 'idea_norm', 'idea_tomcat', 'mysql_config', 'bitcomet']
      }],
      '/linux/': [{
        title: 'Linux',
        collapsable: false,
        children: ['glibc', 'python', 'rabbitmq', 'erlang', 'command', 'view_hardware', 'time', 'node', 'git', 'tomcat_config', 'nohup', 'selinux', 'vim', 'mysql', 'mysql_storage', 'linux_mysql_log', 'mariadb_config', 'virtualbox', 'vnc_server', 'visual', 'apache', 'linux_apache', 'orange', 'gitlab', 'sshkey_github', 'fsck_unresolve', 'unmount', 'new_ext_par', 'parted', 'fdisk', 'bond_network', 'uuid']
      }],
      '/elk/': [{
        title: 'ELK日志分析',
        collapsable: false,
        children: ['linux_es5', 'es_cluster', 'es_head', 'es_bigdesk', 'logstash_tomcat_log', 'kibana_map', 'grok_debugger']
      }]
    },
    /* 最大的深度为 2，它将同时提取 h2 和 h3 标题 */
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    /* 显示所有页面的标题链接 */
    displayAllHeaders: false
  }
}
