// 标题右侧导航栏
module.exports = [
        {text:'首页',link:'/guide/'},
        {
            text:'学习内容',
            items:[
                {
                    text:'vuepress练习',
                    items:[
                            {
                                text:'markdown练习',
                                link: '/vp/vuepress/markdown/'
                            },
                    ]
                
                },
                {
                    text:'elementUI',
                    items:[
                        {
                            text:'element学习首页',
                            link:'/elementUi/elementMain.md'
                        },
                        {
                            text:'date-Time-Picker时间选择器',
                            link:'/elementUi/dateTimePicker/value-format.md'
                        }
                    ]
                },
                {
                    text:'git',
                    items:[
                        {
                            text:'git操作大全',
                            link:'/git/index.md'
                        }
                    ]
                }
            ]
        },
 


    ];
