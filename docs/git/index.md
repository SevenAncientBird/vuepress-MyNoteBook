# Git 配置操作等

[引用自此](https://zhuanlan.zhihu.com/p/389814854)


## 一、基础命令
| 命令      |   内容 |
| :-------- | -------------: |
| git init  | 初始化本地git仓库（创建新仓库）|
| git config --global user.name "xxx" |  配置用户名 |
| git config --global user.email "xxx@xxx.com"| 配置邮件 |
| git config --global --unset http.proxy | remove  proxy configuration on git |
| git clone git+ssh://git@192.168.53.168/xx.git | clone远程仓库 |
| git status | 查看当前版本状态（是否修改）|
| git add abc | 添加abc文件至index |
| git add . | 增加当前子目录下所有更改过的文件至index |
| git commit -m 'xxx' | 提交 |
| git commit --amend -m 'xxx' | 合并上一次提交（用于反复修改） |
| git commit -am 'xxx' | 将add和commit合成一步 |
<p align="left">git init</p>        <p align="right">初始化本地git仓库（创建新仓库）</p>


## 二、常见问题