---
title: Spring
date: 2022-12-17 10:00:54
permalink: /pages/466e90/
categories:
  - 学习笔记
tags:
  - 
---
## Maven
### 是什么
![](/Spring/6c5326620aaf4b0fb4edd9fede83688c.png)
### 作用
![](/Spring/470c02821566481b84fbba1ae030e3cc.png)
### 安装
1. 首先去官网[下载](https://maven.apache.org/download.cgi)
2. 下载之后解压,接着配置环境变量JAVA_HOME和MAVEN_HOME
3. 配置完之后在path环境变量加上%JAVA_HOME%\bin还有%MAVEN_HOME%\bin
4. 接着cmd输入mvn看看效果
### Maven中央仓库和坐标
1. > 仓库是开源的,不能随便上传企业私服的
2. > Maven通过坐标来描述资源位置,坐标由groupid(所属组织),artfactid(模块名),version(版本号)以及packaging(打包方式)等组成
::: danger 必须记住
Maven[仓库网址](https://mvnrepository.com)
:::
### Maven配置
    <localRepository>D:\apache-maven-3.6.1-bin\apache-maven-3.6.1\mvn-resp</localRepository>
```
	 <mirror>
      <id>alimaven</id>
      <mirrorOf>central</mirrorOf>
      <name>aliyun maven</name>
      <url>https://maven.aliyun.com/repository/public</url>
    </mirror>
```
#### 目录结构
![](/Spring/93a15000d7494e868918d8ed5e2078cf.png)  
::: tip  注意
src同级目录还有个pom.xml
:::
#### 相关命令
- maven构建项目前首先要编译我们的java文件,命令是 mvn compile
- 接着会生成一个target目录,我们通过mvn clean可以删除它,
- 如果我们要测试 代码,我们可以输入 mvn test
- 不过最主要的是mvn package,它可以打包我们的项目,
- 我们的项目可能以后要用,我们可以mvn install 安装在我们的本地仓库  
::: tip
现在你已经会maven命令了
:::
### idea构建项目
光知道命令还不行,为了快速开发,我们还需要在idea里进行一次实战
这里请看[教程](https://blog.csdn.net/hgnuxc_1993/article/details/125427590)
::: tip
alt insert 可以快速帮我们配置一些插件
:::
### 导依赖
经常用到最好背下来
![](/Spring/3d721a4c6728451b9155ffdff629898e.png)
#### 依赖传递
我们可以把我们的工程当做资源导入,工程里有的,导入之后原项目也有
::: tip
当别人想导入我们的坐标时,但是我们不想暴露一些我们引用的坐标
可以在dependency里假如<optional>true</optional
:::
#### 排除依赖
![](/Spring/4e5a04a3eedf4152a3f259d8a0d97583.png)
### 依赖范围
![](/Spring/684457174dfe46eeb5b1c38323908e0b.png)
