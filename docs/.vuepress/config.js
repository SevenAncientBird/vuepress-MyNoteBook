/**
 * title: 设置网站标题
 * description: 网站的描述
 * base: 设置站点根路径，如果访问的时候是ip+端口，那么这里就是/，如果访问的是ip+端口+工程名，那么这里就是/工程名/
 * dest: 设置编译后的输出目录./ROOT代表在工程的根目录下生成一个ROOT文件，里面是编译好的文件，可以拿ROOT直接部署。
 * port: 本地调试的端口号，默认是8080
 */

module.exports = {
    title:'学习笔记',
    description:'这是我的博客',
    base:'/',
    dest:'./ROOT',
    port:8080,
    head: [],
    plugins:[
        require('./plugins.js'),
    ],
    themeConfig:{
        logo:'',
         // 添加导航栏
        nav:require("./nav.js"),
        // 为以下路由添加左侧边栏
        sidebar:{
            '/vp/vuepress/': [
                {
                    title: 'vue-press学习',
                    collapsable: false,
                    children: [
                        { 
                          title: 'Markdown练习', 
                          path:'/vp/vuepress/markdown.md'
                        },
                    ]
                }
            ],
            '/elementUi/dateTimePicker/':[
                {
                    title:'dateTimePicker时间选择器',
                    collapsable:false,
                    children:[
                        {
                            title:'自定义时间修改',
                            path:'/elementUi/dateTimePicker/value-format.md',
                    
                        },
                 
                    ]
                }
            ]
           
        },
        sidebarDepth:3,//左侧导航显示的层级
        lastUpdated:'Last Updated',

        // 内置搜索栏配置,默认true开启,调整默认搜索框显示的搜索结果数量
        search:true,
        searchMaxSuggestions:19,

        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: false,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: false,

        /**
         * ---
         *  prev: ./some-other-page
         *  next: false
         *  ---
         * */ 

         smoothScroll: true,//你可以通过 themeConfig.smoothScroll 选项来启用页面滚动效果。
    },
    markdown:{
        lineNumbers:true
    }
}