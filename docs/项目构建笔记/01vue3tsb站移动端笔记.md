---
title: vue3+ts b站移动端笔记
date: 2022-12-13 17:27:22
permalink: /pages/apple/
categories:
  - 项目构建笔记
tags:
  -
---

## 准备编辑器
vscode+安装插件volar vue3 snippets并把vetur禁用

## 创建项目,这里基于vue-cli

- npm i -g @vue/cli
- npm i vue@next 表示安装最新版,安装完之后
  package.json的depencies会显示最新版本
- vue create 项目名称

## 删除多余目录

<img src="/vue/img.png">

## 布置路由

> view下面新建Home/Index.vue和Video/Index.vue
> 并给内容:

```vue
Home
<template>
  <h1>b站首页</h1>
  <router-link to="/video/1">点我去视频区</router-link>
</template>
Video
<template>
  <h1>b站内容</h1>
  <router-link to="/">点我去首页</router-link>
</template>
```

router/index.ts

```ts
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/Home/Index.vue')
  },
  {
    path: '/video/:id',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/Video/Index.vue')

  }
]
```

注意报错 :

> Component name "Index" should always be multi-word  vue/multi-word-component-names
> 表示要用驼峰命名

## 使用自定义组件

<img src="/vue/img_1.png">

## vant组件库

### 网址

https://vant3.uihtm.com/#/zh-CN/tab

### 安装

npm i vant@next -S
npm i babel-plugin-import -D

### 使用

```vue
import {tab,tabs} from 'vant'
app.use(tabs)
app.use(tab)
```

## mock

### 作用

前端模拟数据接口

### 安装

npm i mockjs
npm i --save-dev @types/mockjs

## ts语法

ts接口
interface 接口名称{
字段:类型
字段?:类型 (?表示参数是可选的)
...
}

## 图片引入问题

~~~
<meta name="referrer" content="no-referrer" />
~~~

## 父传子

![](/01vue3tsb站移动端笔记/a2b87914288645b89aec3609c1cf662c.png)

