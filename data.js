const navData = [
    // =========================
    // 第一列 (Column 1)
    // =========================
    [
        {
            title: "Coding study | 编程学习",
            items: [
                { subtitle: "Rust" },
                { name: "Rust 官方文档", url: "https://doc.rust-lang.org/nightly/" },
                { name: "Rust Wiki", url: "https://rustwiki.org/" },
                { name: "Rust 圣经", url: "https://course.rs" },
                { name: "Rust 秘典（死灵书）", url: "https://nomicon.purewhite.io/" },

                { name: "Rust by practice", url: "https://github.com/sunface/rust-by-practice" },
                { name: "Rust 算法俱乐部", url: "https://weihanglo.tw/rust-algorithm-club/" },
                { name: "Rust 异步编程", url: "https://huangjj27.github.io/async-book/" },
                { name: "Rust 语言之旅", url: "https://tourofrust.com/" },

                { subtitle: "Golang" },
                { name: "Golang 网站导航", url: "https://hao.studygolang.com/" },
                { name: "Go 语言设计与实现", url: "https://draven.co/golang/" },
                { name: "Go 并发编程", url: "https://www.kancloud.cn/mutouzhang/go/596804" },

                { subtitle: "TS & JS & Nodejs" },
                { name: "TypeScript 平滑文档", url: "https://doc.cherrychat.org/ts/" },
                { name: "Node 平滑文档", url: "https://doc.cherrychat.org/node/" },
                { name: "现代 JavaScript 教程", url: "https://zh.javascript.info" },

                { subtitle: "FE | 前端" },
                { name: "Svelte", url: "https://svelte.dev/", desc: "前端框架" },
                { name: "Lit", url: "https://lit.dev/", desc: "Google 的前端框架" },
                { name: "Next.js", url: "https://nextjs.org/", desc: "React 开发框架" },
                { name: "Tailwind CSS", url: "https://tailwindcss.com/", desc: "日益流行的 CSS 框架" },

                { subtitle: "Cross-platform | 跨平台框架" },
                { name: "Flutter", url: "https://flutter.dev/", desc: "Google 推出的移动应用开发框架" },
                { name: "Tauri", url: "https://tauri.app/", desc: "后端基于 Rust 的跨平台框架" },
                { name: "gpui", url: "https://github.com/zed-industries/zed/tree/main/crates/gpui", desc: "Zed 编辑器采用的 gui 技术方案" },
                { name: "gpui-component", url: "https://github.com/longbridge/gpui-component", desc: "longbridge 开源的 gpui 组件" },

                { subtitle: "Editor | 编辑器" },
                { name: "21 天学会 Emacs（2022 Edition）", url: "https://book.emacs-china.org" },
                { name: "EmacsWiki", url: "https://www.emacswiki.org/emacs" },
                { name: "vimgolf", url: "https://www.vimgolf.com" },
                { name: "Vim options 手册", url: "https://yianwillis.github.io/vimcdoc/doc/options.html" },

                { subtitle: "devdocs | 开发文档" },
                { name: "devdocs.io", url: "https://devdocs.io" },
                { name: "devhints.io", url: "https://devhints.io/" },
                { name: "docs.rs", url: "https://docs.rs/" },
                { name: "lib.rs", url: "https://lib.rs/" },

                { subtitle: "学习网站" },
                { name: "慕课网", url: "https://www.imooc.com/" },
                { name: "极客时间", url: "https://time.geekbang.org/" },
                { name: "《编程之法：面试和算法心得》", url: "https://wizardforcel.gitbooks.io/the-art-of-programming-by-july/content/index.html" },

                { subtitle: "技术社区" },
                { name: "rustcc.cn", url: "https://rustcc.cn" }
            ]
        },
        {
            title: "Reader & Rss | 阅读订阅",
            items: [
                { subtitle: "Reader | 阅读" },
                { name: "Foliate", url: "https://johnfactotum.github.io/foliate/", desc: "Linux PDF 阅读器" },
                { name: "koodo-reader", url: "https://github.com/koodo-reader/koodo-reader", desc: "跨平台电子书阅读器" },
                { name: "Sumatra PDF", url: "https://www.sumatrapdfreader.org/free-pdf-reader", desc: "Windows PDF 阅读器" },
                { name: "MuPDF", url: "https://www.mupdf.com/", desc: "Windows PDF 阅读器" },

                { subtitle: "Rss" },
                { name: "inoreader", url: "https://www.inoreader.com", desc: "综合类 Rss 订阅网站" },
                { name: "feedx", url: "https://feedx.net", desc: "订阅源" },
                { name: "newreleases", url: "https://newreleases.io/", desc: "各种服务的更新通知" }
            ]
        },
        {
            title: "Proxy & VPN",
            items: [
                { subtitle: "VPN 机场" },
                { name: "白嫖机场", url: "https://白嫖机场.com" },
                { name: "三毛机场", url: "https://三毛导航.com" },
                { name: "挂梯子", url: "https://guatizi.com" },
                { name: "低价机场推荐", url: "https://github.com/jichangtuijian-cheap/cheap-airports" },
            ]

        }
    ],

    // =========================
    // 第二列 (Column 2)
    // =========================
    [
        {
            title: "Dev Assistance | 开发辅助",
            items: [
                { subtitle: "命令行工具" },
                { name: "GitHub Cli", url: "https://cli.github.com/manual", desc: "github 命令行客户端" },
                { name: "gitui", url: "https://github.com/extrawurst/gitui", desc: "使用 rust 语言开发的 git ui 工具" },
                { name: "rust-command-line-utilities", url: "https://gist.github.com/sts10/daadbc2f403bdffad1b6d33aff016c0a", desc: "Rust 实现的各种命令行工具" },
                { name: "chezmoi", url: "https://www.chezmoi.io", desc: "Dotfiles 文件管理工具" },

                { subtitle: "iOS/Mac dev" },
                { name: "XcodesApp", url: "https://github.com/XcodesOrg/XcodesApp", desc: "Xcodes版本下载工具" },

                { subtitle: "Inspect & API | 诊断和API" },
                { name: "Apifox", url: "https://apifox.com/", desc: "类似 Postman 的 api 工具" },
                { name: "Reqable", url: "https://reqable.com", desc: "类似 Postman 的 api 工具" },
                { name: "Scalar", url: "https://scalar.com", desc: "类似 Postman 的 api 工具" },
                { name: "Usebruno", url: "https://www.usebruno.com/", desc: "类似 Postman，支持 git 管理" },

                { subtitle: "IP utils | IP 工具" },
                { name: "ping0cc", url: "https://ping0.cc", desc: "检查 IP 纯净度" },
                { name: "whoer", url: "https://whoer.net" },
                { name: "ip111", url: "http://ip111.cn", desc: "检查 IP 地址" },
                { name: "zerossl", url: "https://zerossl.com", desc: "免费 SSL 证书申请与使用" },

                { subtitle: "Docker" },
                { name: "Docker 从入门到实践", url: "https://yeasy.gitbook.io/docker_practice" },

                { subtitle: "数据库工具" },
                { name: "TablePlus", url: "https://tableplus.com/", desc: "数据库管理工具" },
                { name: "SQL Studio", url: "https://sql.studio", desc: "数据库管理工具" },
                { name: "PgManage", url: "https://github.com/commandprompt/pgmanage", desc: "数据库管理工具" },
                { name: "Beekeeper Studio", url: "https://www.beekeeperstudio.io" },
                { name: "dbeaver", url: "https://dbeaver.io" },
                { name: "dbgate", url: "https://www.dbgate.io/zh/" }
                
                { subtitle: "website tools | 网站工具" },
                { name: "jsonplaceholder.typicode.com", url: "https://jsonplaceholder.typicode.com/", desc: "一个免费的在线 REST API 服务，它专门为开发者提供伪造数据（Fake Data）" },
                { name: "httpbin.org", url: "https://httpbin.org/ ", desc: "用来调试 HTTP 客户端" },
            ]
        },
        {
            title: "System tools | 系统工具",
            items: [
                { subtitle: "Win / Linux / Mac" },
                { name: "Snipaste", url: "https://www.snipaste.com", desc: "多平台的截图工具" },
                { name: "Pixpin", url: "https://pixpin.cn", desc: "Win/macOS 下截图、贴图工具" },

                { subtitle: "Windows" },
                { name: "unigetui", url: "https://www.marticliment.com/unigetui/", desc: "winget 的图形化工具" },

                { subtitle: "macOS" },
                { name: "stats", url: "https://github.com/exelban/stats", desc: "macOS 的菜单栏工具" },
                { name: "BetterDisplay", url: "https://github.com/waydabber/BetterDisplay" },
                { name: "iShot Pro", url: "https://apps.apple.com/cn/app/ishot-pro/id1611347086?mt=12", desc: "macOS 下的截图和录屏工具" },
                { name: "Raycast", url: "https://www.raycast.com/", desc: "快捷启动器" },
                { name: "AltTab", url: "https://alt-tab-macOS.netlify.app/", desc: "macOS 下的窗口切换工具" },

                { subtitle: "Images tools" },
                { name: "Ventoy", url: "https://www.ventoy.net", desc: "U 盘镜像工具" }
            ]
        },
        {
            title: "Net tools | 网络工具",
            items: [
                { subtitle: "Download | 下载" },
                { name: "FDM", url: "https://www.freedownloadmanager.org/zh/", desc: "多平台的下载工具" },
                { name: "Xdown", url: "https://www.xdown.org/", desc: "支持 BT/HTTP/FTP" },
                { name: "Motrix", url: "https://motrix.app/", desc: "基于 Aria2 的下载工具" },
                { name: "filecxx", url: "https://github.com/filecxx/FileCentipede", desc: "下载工具 (Win/Lin)" },

                { subtitle: "File share | 文件共享" },
                { name: "Blip", url: "https://blip.net", desc: "类似 airdrop 的跨平台工具" },
                { name: "LocalSend", url: "https://localsend.org/", desc: "PC/平板/手机文件发送" },


                { subtitle: "Website tools | 网站工具" },
                { name: "Slidev", url: "https://cn.sli.dev" },
                { name: "editor.mdnice.com", url: "https://editor.mdnice.com" },
                { name: "即时工具", url: "https://www.67tool.com/" },
                { name: "独特工具箱", url: "https://www.dute.org/" },
                { name: "Pixso", url: "https://pixso.cn", desc: "产品原型设计" },
                { name: "boardmix", url: "https://boardmix.cn", desc: "白板工具" },
                { name: "transform.tools", url: "https://transform.tools", desc: "数据格式变换工具" },
                { name: "Gcopy", url: "https://gcopy.rutron.net/zh", desc: "剪贴板同步和文件共享" }
            ]
        },
    ],

    // =========================
    // 第三列 (Column 3)
    // =========================
    [
        {
            title: "Resources | 资源",
            items: [
                { subtitle: "网站资讯" },
                { name: "显卡天梯榜", url: "https://www.hellowindows.cn/" },

                { subtitle: "Windows 镜像" },
                { name: "HelloWindows", url: "https://www.hellowindows.cn/" },
                { name: "MSDN sjjzm", url: "https://msdn.sjjzm.com/" },
                { name: "RG-Adguard", url: "https://files.rg-adguard.net" },
                { name: "Next I Tell You", url: "https://next.itellyou.cn/" },
                { name: "系统库", url: "https://www.xitongku.com/" },

                { subtitle: "Art/Wallpaper" },
                { name: "wallhaven", url: "https://wallhaven.cc/", desc: "壁纸" },
                { name: "deviantart", url: "https://www.deviantart.com/", desc: "壁纸" },

                { subtitle: "Reading" },
                { name: "Z-library", url: "http://zlib.re" },

                { subtitle: "Apps" },
                { name: "知您网", url: "https://www.zhiniw.com", desc: "macOS app 下载" },
                { name: "谷多", url: "https://www.coodoor.com", desc: "macOS app 下载" },
                { name: "腾讯柠檬精选APP", url: "https://lemon.qq.com/lab/" },
                { name: "Digit77", url: "https://www.digit77.com/" },
                { name: "iSofts", url: "https://www.isofts.org" },
                { name: "macwk", url: "https://www.macwk.com" },

                { subtitle: "导航网" },
                { name: "快导航网", url: "https://www.hifast.cn" },

                { subtitle: "Telegram" },
                { name: "电报频道", url: "https://telegramchannels.me/zh" },
                { name: "玩转电报", url: "https://tgnav.com" },

                { subtitle: "Others" },
                { name: "RPM Pbone", url: "http://rpm.pbone.net/", desc: "RPM 包搜索和下载" },
                { name: "pkgs", url: "https://pkgs.org", desc: "for linux and unix" }
            ]
        },
        {
            title: "Entertainment | 休闲娱乐",
            items: [
                { subtitle: "Games" },
                { name: "gamekegs", url: "https://gkinto.com/", desc: "游戏大桶" },
                { name: "游戏星辰", url: "https://www.2023game.com" },
                { name: "flysheep6", url: "https://www.flysheep6.com" },
                { name: "youxiji", url: "https://youxiji.org" },

                { subtitle: "在线影视" },
                { name: "茶杯狐", url: "https://cupfox.app/" },
                { name: "网飞猫", url: "https://www.ncat.app" },
                { name: "可可影视", url: "https://www.keke1.app" },
                { name: "ppnix", url: "https://www.ppnix.com/cn/" },
                { name: "爱看机器人", url: "https://v.ikanbot.com/" },
                { name: "奈飞工厂", url: "https://yanetflix.com" },
                { name: "Gimy TV剧迷", url: "https://gimytv.ai" },
                { name: "Auete影视", url: "https://auete.com" },
                { name: "人人影视 renren.pro", url: "https://renren.pro" },

                { subtitle: "影视下载" },
                { name: "音范丝", url: "https://www.yinfans.net" },
                { name: "6v电影网", url: "https://www.6vdyy.com" },
                { name: "比特大雄", url: "http://www.btdx8.net/" },

                { subtitle: "种子搜索" },
                { name: "bt4gprx", url: "https://bt4gprx.com" },

                { subtitle: "在线漫画" },
                { name: "漫画大全", url: "https://www.manhuaren.com/manhua-list/" }
            ]
        }
    ]
];
