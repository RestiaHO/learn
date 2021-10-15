## 出现的问题：

1. 页面1地址为`http://localhost:3000/index/index.html/`,点击路由-test后，页面上显示出了对应的组件，但地址修改为了`http://localhost:3000/test`
2. 地址被修改为了`http://localhost:3000/test`后，对页面进行回车刷新会找不到页面

## 解决历程：

网上找了很多搜索了很多也没有找到对应的方案，虽然猜测是router配置原因但是当时并不知道如何解决，但是一次偶然机会发现`createWebHistory`是可以写入参数的，修改后的配置

```
...
// 导出路由
const router = createRouter({
    history: createWebHistory('/index/index.html'), // 具体字段根据不同页面所在地址进行配置
    routes
});
...
```

修改过后第一个问题：页面1地址为`http://localhost:3000/index/index.html/`，点击路由-test后，页面上显示出了对应的组件，而且地址也被修改为了`http://localhost:3000/index/index.html/test`，
这样就解决了在多页面配置下，不同的页面能够使用不同的路由进行跳转，相应的router逻辑也可以使用

但是第二问题，地址跳转后再回车无法对页面进行刷新还是存在的，看了下当前地址`http://localhost:3000/index/index.html/test`，猜想是否是地址拼接问题，router有history和hash两种，如果换一换能否解决，查了相关的一些文章资料发现`createWebHistory`可以修改为`createWebHashHistory`

```
import {createRouter, createWebHashHistory} from "vue-router";
...
// 导出路由
const router = createRouter({
    history: createWebHashHistory('/index/index.html'), // 具体字段根据不同页面所在地址进行配置
    routes
});
...
```

## 效果

原地址：`http://localhost:3000/index/index.html#/`
点击路由-index：`http://localhost:3000/index/index.html#/index`
点击路由-test：`http://localhost:3000/index/index.html#/test`
切换路由后，在url栏回车后也能刷新展示出当前页面

## 最终配置

其实只对`history: createWebHashHistory("/index/index.html")`,进行了修改

```
import {createRouter, createWebHashHistory} from "vue-router";

// 路由信息
const routes = [
    {
        path: "/",
        name: "index",
        component:  () => import('../views/index.vue'),
    },
    {
        path: "/index",
        name: "index",
        component:  () => import('../views/index.vue'),
    },
    {
        path: "/test",
        name: "test",
        component:  () => import('../views/test.vue'),
    },
];

// 导出路由
const router = createRouter({
    history: createWebHashHistory("/index/index.html"),
    routes
});

export default router;
```

