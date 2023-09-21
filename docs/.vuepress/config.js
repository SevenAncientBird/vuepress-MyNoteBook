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
    plugins:[],
    themeConfig:{
         // 添加导航栏
        nav:[
            {text:'主页',link:'/'},
            {text:'首页',link:'/guide/'},
            {text:'生活',link:'/life-ms/'},
            {
                text:'学习',
                items:[
                    {text:'英语',link:'/study-ms/english/english01'},
                    {text:'数学',link:'/study-ms/math/math01'},
                ]
        
            },

        ],
        // 为以下路由添加左侧边栏
        sidebar:{
            '/life-ms/':[
                {
                    title:'生活测试',
                    collapsable:false,
                    children:[
                        {
                            title:'测试页面1',path:'/life-ms/life01'
                        },
                        {
                            title:'测试页面1',path:'/life-ms/life02'
                        },
                        {
                            title:'测试页面1',path:'/life-ms/life03'
                        },
                    ]

                },
            ],
            '/study-ms/english/': [
                {
                    title: '英语',
                    collapsable: false,
                    children: [
                        { title: '第一节', path: '/study-ms/english/english01' },
                        { title: '第二节', path: '/study-ms/english/english02' },
                        { title: '第三节', path: '/study-ms/english/english03' },
                    ]
                }
            ],
            '/study-ms/math/': [
                {
                    title: '数学',
                    collapsable: false,
                    children: [
                        { title: '第一节', path: '/study-ms/math/math01' },
                        { title: '第二节', path: '/study-ms/math/math02' },
                        { title: '第三节', path: '/study-ms/math/math03' },
                    ]
                }
            ],
        },
        sidebarDepth:2,//左侧导航显示的层级
        lastUpdated:'Last Updated'



    }
}