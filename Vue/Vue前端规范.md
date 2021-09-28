# vue开发管理规范

## 开发规范

### 一. 目录结构

  ├── build              构建脚本目录

  │  ├──build.js             生产环境构建（编译打包）脚本

  │  ├──check-versions.js       版本验证工具

  │  ├──utils.js            主要用来处理css类文件的loader

  │  ├──vue-loader.conf.js      处理vue中的样式

  │  ├── webpack.base.conf.js     webpack基础配置

  │  ├── webpack.dev.conf.js      webpack开发环境配置

  │  └── webpack.prod.conf.js      webpack生产环境配置

  ├── config              项目配置

  │  ├── dev.env.js            开发环境变量

  │  ├── index.js             项目配置文件

  │  ├── prod.env.js           生产环境变量

  ├── node_modules            项目依赖模块  

  ├── src               项目源码目录 

  │  ├── pages               多页面目录

  │  │  ├── admin               主页面

  │  │  │  ├── app.js               入口js文件

  │  │  │  ├── app.vue               根组件

  │  ├── components           公共组件目录

  │  ├── assets              资源目录，资源会被wabpack构建

  │  │  └── css               第三方css文件，全局css文件

  │  │  └── font              字体

  │  ├── routes              前端路由

  │  │  └── index.js

  │  ├── vuex               应用级数据（state）

  │  │  └── store.js            分组数据存贮

  ├── static              纯静态资源，不会被wabpack构建。



### 二. 文件名要求

文件名以小写开头，取有意义的英文名字，H5文件名与对应的JS文件名相同，命名以模块名开头加数字（该模块第几个文件），加一杠，以内容名结尾，如`live1-ctrol.vue`。

### 三. 文件格式

`UTF-8`格式

### 四. vue文件内容要求

1. 功能模块的入口页，需要包含基本类库，以及入口页对应的JS脚本；

2. 对没有任何业务逻辑控制的页面，可以直接跳转；

3. 对于有业务逻辑控制的页面，应绑定链接事件方式，在事件中需要显示loading层，转到目标页面后，再隐藏loading层；

4. 弹框、select等需要大量代码去实现，要以组件的方式引入。

组件书写

- 组件结构

  遵循从上往下template, script, style 的结构。

- 采用vue推荐的通信方式， props、emit、vuex、provide、inject

- props 必须定义值类型

组件样式

单个组件样式一般可直接写到组件下style标签下，为了防止样式污染，可添加scoped 属性，也可以通过设置作用域来防止样式污染，写样式的时候尽量少写元素选择器，为了提高代码查找速度，可以用类选择器。

template模板文件

- 尽量使用以.vue结束的单文件组件，方便管理，结构清晰。
- 标签语义化，避免清一色的div元素
- 尽量减少无用的标签嵌套
- 样式class的命名：采用BEM规范

```
1. 给组件添加命名空间，表示 模块，防止和第三方组件命名冲突
2. 所有单词一律小写
3. 单词之间用 - 分隔，命名尽量不要超过三个单词，避免命名过长
4. 在组件开发中避免使用全局的OOCSS原子类，因为这会降低组件的可复用性；如：pull-left、pull-right、clearfix
尽量避免使用子选择器，如果层次关系过长，逻辑不清晰，非常不利于维护；如: .kso-nav ul li a {}
```

- 多特性，分行写，提高可读性。即一个标签内有多个属性，属性分行写。
- 自定义标签：使用自闭标签的写法。例如：，如果自定义标签中间需要传入slot，则写开始标签和结束标签，结束标签必须加/。
- 组件/实例选项中的空行。便于阅读和代码架构清晰。

### 五. JS内容要求

1. 需要用请求和公共方法的文件，要用import引入；

   import store from '../vuex/store'

   import { sendDataRes } from '../vuex/shore'

   *注：禁止使用绝对路径*

2. 子组件引用方法

   A. 公共组件经常使用

   先import {xyHeader,xySide} from '@/components';

   再暴露components: {xyHeader,xySide};

   B. 单独组件不经常使用，会单独打包出来，需要引用自己加载出来

   ​	 'xyDrowDown': () => import('component/drowDown.vue') 

3. 暴露出去的部分，要按顺序排序：

   ```
   export default {
   	name: 'index', // 名称
   	components: {},  // 组件
   	data(){return{}}, // 数据
   	watch：{'demo': {}}, // 监听
   	computed: {'val': function(){return 'demo'}}, // 计算属性
   	beforeCreate () {}, // 创建之前
   	created () {}, // 创建完成
   	beforeMount () {}, // 挂载前
   	mounted () {}, // 挂载完成
   	beforeUpdate () {}, // 更新前
   	updated () {}, // 更新完成
   	methods: {}, // 方法
       beforeDestroy () {}, // 销毁前
   	destroyed () {}, // 销毁后
   }
   ```

   4. 在script 标签中，应该遵守js的规范和ES6的规范
      - 组件名称：必须以大写字母开头驼峰法命名。
      - Data必须是一个函数。
      - Props定义：提供默认值，使用type属性校验类型，使用props之前先检查prop是否存在；
      - 调试信息 console.log() debugger使用完及时删除；
      - 为v-for设置Key值；
      - 使用计算 规避v-if和v-for用在一起；
      - 无特殊情况不允许使用原生API操作dom,谨慎使用this.$refs直接操作dom；
      - 使用ES6风格编码源码,定义变量使用let,定义常量使用const,使用export,import模块化；
      - 指令缩写：都用指令缩写 (用 : 表示 v-bind: 和用 @ 表示 v-on:)；
      - 使用 data 里的变量时请先在 data 里面初始化；
      - 函数中统一使用_this / that = this来解决全局指向问题；
      - 能用单引号不用双引号；
      - 尽量使用===；
      - 声明变量必须赋值。

   ### 六. 接口要求

   1. 请求用Axios ， Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。
   2. 看后台需要配置post、get请求，目前只用这两种，只需要读取文件，put（PUT 往服务器上上传文件）、delect（删除）直接对数据进行操作相对不安全 。
   3. 登录安全(双重验证)
      - 前端判断sessionStorage是否存在
      - 看后台返回token是否过期，不过期就执行删除sessionStorage 操作，并重新登录。

![image-20210927164726322](C:\Users\kv\AppData\Roaming\Typora\typora-user-images\image-20210927164726322.png)





























