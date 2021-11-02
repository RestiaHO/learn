# `Vue`的优缺点

优点： 渐进式，组件化，轻量级，虚拟DOM，响应式，单页面路由，数据与视图分开

缺点：单页面不利于`seo`，不支持`IE8`以下，首屏加载时间长

# `Vue`跟`React`的异同点

相同点：

- 都用了虚拟`DOM`
- 组件化开发
- 都是单项数据流（父子组件之间，不建议修改父传下来的数据）
- 都支持服务端渲染

不同点：

- `React`的`JSX`, `Vue`的`template`
- 数据变化，`React`手动（`setState`），`Vue`
- `React`单项绑定，`Vue`双向绑定
- `React`的`Redux`，`Vue`的`Vuex`

# `MVVM`是什么？和`MVC`有何区别呢？

`MVC`

- `Model(模型)`：负责从数据库中取数据
- `View(视图)`：负责展示数据的方法
- `Controller(控制器)`：用户交互的地方，例如点击事件等等
- 思想：`Controller`将`Model`的数据展示在`View`上

![image-20211022113903498](C:\Users\kv\AppData\Roaming\Typora\typora-user-images\image-20211022113903498.png)

`MVVM`

- `VM`: `View-Model`做了两件事达到了数据的双向绑定，一是将[模型]转化成视图，即将后端传递的数据转化所看到的页面。实现的方式是：数据绑定。二是将[视图]转化成[模型]，即将所看到的页面转化成后端的数据。实现的方式是：`DOM`监听。
- 思想：实现了`View`和`Model`的自动同步，也就是当`Model`的属性改变时，我们不用再自己手动，操作`DOM`元素，来改变`View`的显示，而是改变属性后该属性对应`View`层显示会自动改变(对应`Vue`数据驱动的思想)

![image-20211022115154875](C:\Users\kv\AppData\Roaming\Typora\typora-user-images\image-20211022115154875.png)

**区别：**

整体看来，`MVVM`比`MVC`精简很多，不仅简化了业务与界面，还解决了数据频繁更新的问题，不用在用选择器操作`DOM`元素。因为在`MVVM`中，`View`不知道`Model`的存在，`Model`和`ViewModel`也观察不到`View`，这种低耦合模式提高代码的可复用性。

**`Vue`是不是`MVVM`框架？**

`Vue`是`MVVM`框架，但是不是严格符合`MVVM`，因为`MVVM`规定`Model`和`View`不能直接通信，而`Vue`的`ref`可以做到这点。

# `Vue`和`JQuery`的区别是在哪？为什么放弃`JQuery`用`Vue`?

- `JQuery`是直接操作`DOM`,`Vue`不直接操作`DOM`，`Vue`的数据与视图是分开的，`Vue`只需要操作数据即可
- 在操作`DOM`频繁的场景里，`JQuery`的操作`DOM`行为是频繁的，而`Vue`利用虚拟`DOM`的技术，大大提高了更新`DOM`时的性能
- `Vue`中不提倡直接操作`DOM`，开发者只需要把大部分精力放在数据上
- `Vue`集成的一些库，大大提升开发效率，比如`Vuex``Router`等

# 为什么data是函数并且返回一个对象呢？

`data`之所以是一个函数，是因为一个组件可能会多处调用，而每次调用就会执行`data函数`并返回新的数据对象，这样，可以避免多处调用之间的`数据污染`。

# 使用过那些`Vue`的修饰符？

| 修饰符               | 描述                                                         |
| :------------------- | ------------------------------------------------------------ |
| .lazy                | 作用是，改变输入框的值时value不会改变，当光标离开输入框时，v-model绑定的值value才会改变 |
| .trim                | 作用类似JavaScript()中的trim()方法，作用是把v-model绑定的值的首尾空格给过滤掉 |
| .number              | 作用是将值转化成数字，但是先输入的字符串和先输入数字，是两种情况。先输入数字的化，只取前面的数字部分，先输入字母时，number修饰符无效 |
| .stop                | 作用是阻止冒泡                                               |
| .capture             | 事件默认是由里向外冒泡，capture修饰符的作用是反过来，由外往内捕获 |
| .self                | 作用是，只有点击事件绑定的本身才会触发事件                   |
| .once                | 作用是，事件只执行一次                                       |
| .prevent             | 作用是阻止默认事件（例如a标签的跳转）                        |
| .native              | 加在自定义组件的事件上，保证事件能执行                       |
| .left .right .middle | 这三个修饰符是鼠标的左中右案件触发的事件                     |
| .passive             | 当我们在监听元素滚动事件的时候，会一直触发`onscroll`事件，在`pc`端没啥问题的，但是在移动端，会让我们的网页变卡，因此我们使用这个修饰符的时候，相当于给`onscroll`事件整一个.lazy修饰符 |
| .camel               | 确保绑定参数被识别为驼峰写法                                 |
| .sync                | 父子组件传值，子组件想更新这个值，使用此修饰符可简写         |



# 使用过哪些`Vue`的内部指令？

| 指令      | 描述                                                         |
| :-------- | ------------------------------------------------------------ |
| v-text    | 更新元素的`textContent`                                      |
| v-html    | 更新元素的innerHTML                                          |
| v-show    | 根据表达式之真假值，切换元素的display CSS property,当条件变化时该指令触发过渡效果。 |
| v-if      | 根据表达式的值的 truthiness 来有条件的渲染元素。在切换时元素及它的数据绑定/组件被销毁并重构。如果元素是<template>，将提出它的内容作为条件块，当条件变化时该指令触发过度效果 |
| v-else    | 前一兄弟元素必须有v-if或v-else-if，类似于`js`中的if else     |
| v-else-if | 前一兄弟元素必须有v-if或v-else-if                            |
| v-for     | 列表循环渲染，数组，对象，数字，字符串都可以                 |
| v-on      | 缩写是@，绑定事件                                            |
| v-bind    | 缩写是：，用于动态绑定各种变量                               |
| v-model   | 双向便规定表单项的值                                         |
| v-slot    | 缩写是#，插槽名                                              |
| v-once    | 元素和组件只渲染一次                                         |
| v-pre     | 跳过这个元素和它的子元素的编译过程。可以用来显示原始Mustache标签，跳过大量没有指令的节点会加快编译。 |
| v-cloak   | 这个指令保持在元素上直到关联实例结束编译，和CSS规则如[v-cloak]{display:none}一起用时，这个指令可以隐藏未编译的mustache标签直到实例准备完毕。 |

# 组件之间的传值方式有哪些？

- 父组件传值给子组件，子组件使用`props`进行接收
- 子组件传值给父组件，子组件使用`$emit+事件`对父组件进行传值
- 组件中可以使用`$parent`和`$children`获取到父组件实例和子组件实例，进而获取数据
- 使用`$attrs`和`$listeners`，在对一些组件进行二次封装时可以方便传值，例如A->B->C
- 使用`$refs`获取组件实例，进而获取数据
- 使用`Vuex`进行状态管理
- 使用`eventBus`进行跨域组件触发事件，进而传递数据
- 使用`provide`和`inject`，官方建议我们不要用这个，*但`ElementUI`源码在大量使用*
- 使用浏览器本地缓存，例如`localStorage`

# 路由有哪些模式呢？又有什么不同呢？

- hash模式：通过`#`号后面的内容的更新，触发`hashchange`事件，实现路由切换
- history模式：通过`pushState`和`replaceState`切换url，触发`popstate`事件，实现路由切换，需要后端配合

# 如何设置class，动态style

- 动态class对象：`<div :class="{'is-active': true, 'red': isRed}"></div>`
- 动态class对象：`<div :class="['is-active', isRed ? 'red': '']"></div>`
- 动态style对象：`<div :style="{color: textColor, fontSize: '10px'}"></div>`
- 动态style对象：`<div :style="[{color: textColor, fontSize: '100px'}, {fontWeight: '300'}]"></div>`

# `v-if`和`v-show`的区别

- `v-if`是通过控制`dom`元素的删除和生成来实现显隐，每次显隐都会使组件重新跑一边生命周期，因为显隐决定了组件生成和销毁
- `v-show`是通过控制`dom`元素的`css`样式来实现显隐，不会销毁
- 需要频繁或大量显隐使用v-show，否则使用`v-if`

# `computed`和`watch`的区别

- `computed`是依赖已有的变量来计算一个目标变量，大多数情况都是`多个变量`凑在一起计算出`一个变量`，并且`computed`具有`缓存机制`，依赖值不变的情况下其会直接读取缓存进行服用，`computed`不能进行`异步处理`
- `watch`是监听某一个变量的变化，并执行相应的回调函数，通常是`一个变量`的变化决定`多个变量`的变化，`watch`可以进行`异步操作`
- 简单记就是：一般情况下`computed`是`多对一`， `watch`是`一对多`

#  `Vue`的生命周期

| 钩子          | 描述                                                         |
| ------------- | ------------------------------------------------------------ |
| veforeCreate  | 实例了`Vue`但没有进行数据的                                  |
| created       | 数据已被初始化响应式处理，在这里可以访问到数据，也可以修改数据 |
| beforeMount   | `render`函数在这里被调用，生成虚拟`DOM`，但是还没转成真实`DOM`并替换到`el` |
| Mounted       | 在这里，真实`DOM`挂载完毕                                    |
| beforeUpdate  | 数据更新后，新的虚拟`DOM`生成，但还没跟旧虚拟`DOM`对比打补丁 |
| updated       | 新旧虚拟`DOM`对比打补丁后，进行真实`DOM`的更新               |
| activated     | 被`keep-alive`缓存的组件停用时调用                           |
| beforeDestroy | 实例销毁之前调用，在这一步，依然可以访问数据                 |
| destroyed     | 实例销毁后调用。该钩子被调用后，对应`Vue`实例所有指令都被解绑，所有时间监听器被移除，所有的子实例也都被销毁 |
| errorCaptured | 当捕获一个来自子孙质检的错误时被调用，此钩子会接受3个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串，此钩子可以返回false以阻止该错误继续向上传播 |

# 为什么`v-if`和`v-for`不建议用在同一个标签

在`VUE2`中，`v-for`优先级是高于`v-if`的

```html
<div v-for="item in [1,2,3,4,5,6,7]" v-if="item !== 3">
	{{item}}
</div>
```

在上面的写法是`v-for`和`v-if`同时存在，会先把7个元素都遍历出来，然后再一个个判断是否为3，并把3给隐藏掉，这样的坏处就是，渲染了无用的3节点，增加无用的`dom`操作，建议使用，computed来解决这个问题：

```html
<div v-for="item in list">
	{{item}}
</div>

computed () {
	list () {
		return [1,2,3,4,5,6,7].filter(item => item != 3)
	}
}
```

# `vuex`的属性有哪些，作用是？

![image-20211022151338298](C:\Users\kv\AppData\Roaming\Typora\typora-user-images\image-20211022151338298.png)

- State：定义了应用状态的数据结构，可以在这里设置默认的初始状态
- Getter：允许组件从`store`中获取数据，`mapGetters`辅助函数仅仅是将`store`中的`getter`映射到局部计算属性
- Mutation：是唯一更改`store`中状态的方法，且必须是同步函数
- Action：用于提交mutation，而不是直接改变状态，可以包含任意异步操作
- Module：允许将单一的`Store`拆分为多个`store`且同时保存在单一的状态树中

# 不需要响应式的数据应该怎么办

在我们的`VUE`开发中，会有一些数据始终都没有改变，这种`死数据`，既然`不改变`，那也就`不需要对他做响应式处理`了，不然只会做一些无用功消耗性能，比如一些写死的下拉框，写死的表格数据，这些数据量大的`死数据`，如果都进行响应式处理，那会消耗大量性能。

```
// 方法一：将数据定义在data之外
data () {
	this.list = {xx}
	return {}
}

// 方法二 Object.freeze()
data () {
	return {
		list1: Object.freeze({xx})
	}
}
```

# watch 有哪些属性

当监听一个基本数据类型时：

```js
watch: {
    value () {
        // do something
    }
}
```

当我们监听一个引用数据类型时：

```js
watch: {
    obj: {
       handler () { // 执行回调
           // do something
       },
       deep: true, // 是否进行深度监听
       immediate: true // 是否初始执行handler函数
    }
}
```

# 父组件生命周期顺序

`父beforeCreate` -> `父created` -> `父beforeMount` -> `子beforeCreate` -> `子created` -> `子beforeMount` -> `子mounted` -> `父mounted`

# 对象新属性无法更新视图，删除属性无法更新视图，为什么，怎么解决？

- 原因： `Object.defineProperty`没有对对象的新属性进行属性劫持
- 对象新属性无法更新视图：使用`Vue.$set(obj, key, value)`，组件中`this.$set(obj, key, value)`
- 删除属性无法更新视图：使用`Vue.$delete(obj, key)`，组件中`this.$delete(obj, key)`

## 直接`arr[index] === xxx`无法更新视图，怎么办，为什么？

- 原因：`Vue`没有对数组进行`Object.defineProperty`的属性劫持，所有直接`arr[index] === xxx`是无法更新视图的
- 使用数组的splice方法，`arr.splice(index, 1, item)`
- 使用 `Vue.$set(arr, index, value)`

# 自定义指令（8个）

在 `Vue`，除了核心功能默认内置的指令 ( `v-model` 和 `v-show` )，`Vue` 也允许注册自定义指令。它的作用价值在于当开发人员在某些场景下需要对普通 `DOM` 元素进行操作。

`Vue` 自定义指令有全局注册和局部注册两种方式。先来看看注册全局指令的方式，通过 `Vue.directive( id, [definition] )` 方式注册全局指令。然后在入口文件中进行 `Vue.use()` 调用。

批量组成指令，新建directives/index.js文件

```js
import copy from './copy'
import longpress from './longpress'

// 自定义指令
const directives = {
    copy, longpress
}

export default {
    install (Vue) {
        Object.keys(directives).forEach(key) => {
            Vue.directive(key, directives[key])
        }
    }
}
```

在`main.js` 引入并调用

```js
import Vue from 'vue'
import Directives from './js/directives'
Vue.use(Directives)
```

指令定义函数提供了几个钩子函数（可选）：

- `bind`：只调用一次，指令第一次绑定到元素时调用，可以定义一个在绑定时执行一次的初始化动作
- `inserted`：被绑定元素插入父节点时调用（父节点存在即可调用，不必存在document中）
- `update`：被绑定元素所在的模板更新时调用，而不论绑定值是否变化，通过比较更新前后的绑定值
- `componentUpdated`：被绑定元素所在模板完成一次更新周期时调用
- `unbind`：只调用一次，指令与元素解绑时调用

下面分享几个实用的`VUE`自定义指令

- 复制粘贴指令 `v-copy`
- 长按指令`v-longpress`
- 输入框防抖指令`v-debounce`
- 禁止表情及特殊字符`v-emoji`
- 图片懒加载`v-LazyLoad`
- 权限校验指令`v-premission`
- 实现页面水印`v-waterMarker`
- 拖拽指令`v-draggable`

## `v-copy`

需求：实现一键复制文本内容，用于鼠标右键粘贴。

思路：

1. 动态创建 textarea 标签，并设置 readOnly 属性及移出可视区域
2. 将要复制的值赋给 textarea 标签的 value 属性，并插入到 body
3. 选中值 textarea 并复制
4. 将 body 中插入的 textarea 移除
5. 在第一次调用时绑定事件，在解绑时移除事件

```js
const copy = {
    bind (el, { value }) {
        el.$value = value
        el.handler = () => {
            if (!el.$value) {
                // 值为空的时候，给出提示。可根据项目UI仔细设计
                console.log('无复制内容')
                return
            }

            // 动态创建textarea标签
            const textarea = document.createElement('textarea')
            // 将该 textarea 设为 readonly 防止 IOS 下自动唤起键盘，同事将textarea移除可视区域
            textarea.readonly = 'readonly'
            textarea.style.position = 'absolute'
            textarea.style.left = '-9999px'
            // 将copy的值赋给textarea标签的value属性
            textarea.value = el.$value
            // 将textarea 插入 body 中
            document.body.appendChild(textarea)
            // 选中并复制
            textarea.select()
            const result = document.execCommand('Copy')
            if (result) {
                console.log('复制成功')
            }    
            document.body.removeChild(textarea)
        }
        // 绑定点击事件, 就是所谓的一键copy
        el.addEventListener(textarea)
    }

    // 当传进来的值更新的时候触发
    componentUpdated (el, { value }) {
        el.$value = value
    }

    // 指令与元素解绑的时候,移除事件绑定
    unbind (el) {
        el.removeEventListener('click', el.handler)
    }
}

export default copy
```

使用： 给`DOM`加上`v-copy`及复制的文本即可

```html
<template>
	<button v-copy="copyText">
        复制
    </button>
</template>

<script>
	export default {
        data () {
            return {
                copyText: 'a copy directives'
            }
        }
    }
</script>
```

## `v-longpress`

需求： 实现长按，用户需要按下并按住按钮几秒，触发相应事件

思路：

1. 创建一个计时器， n秒后执行函数
2. 当用户按下按钮触发mousedown事件，启动计时器；用户松开按钮时调用mouseout事件
3. 如果mouseup事件2秒内被触发，就清除计时器，当一个普通的点击事件
4. 如果计时器没有在2秒内清除，则判定为一次长按，可以执行关联的函数
5. 在移动端要考虑touchstart，touchend事件

```js
const longpress = {
    bind: function (el, binding, vNode) {
        if (typeof binding.value !== 'function') {
            throw 'callback must be a function'
        }

        // 定义变量
        let pressTimer = null

        // 创建计时器
        let start = (e) => {
            if (e.type === 'click' && e.button !== 0) {
                return
            }
            if (pressTimer === null) {
                pressTimer = setTimeout(() => {
                    handler()
                }, 2000)
            }
        }

        // 取消计时器
        let cancel = (e) => {
            if (pressTimer !== null) {
                clearTimeout(pressTimer)
                pressTimer = null
            }
        }

        // 运行函数
        const handler = (e) => {
            binding.value(e)
        }

        // 添加事件监听
        el.addEventListener('mousedown', atart)
        el.addEventListener('touchstart', start)

        // 取消计时器
        el.addEventListener('click', cancel)
        el.addEventListener('mouseout', cancel)
        el.addEventListener('touchend', cancel)
        el.addEventListener('touchcancel', cancel)
    },


    // 当传进来的值更新的时候触发
    componentUpdated: (el, { value }) => {
        el.$value = value
    },

    unbind: (el) => {
        el.removeEventListener('click', handler)
    }
}
```

使用： 给`DOM`加上`v-longpress`及回调函数即可

```html
<template>
	<button v-longpress="longpress">
        长按
    </button>
</template>

<script>
export default {
    method: {
        longpress () {
            alert('长按')
        }
    }
}
</script>
```

## `v-dedbounce`

背景：在开发中，有些提交保存按钮有时候会在短时间内被点击多次，这样就会出现重复请求接口，造成数据的混乱，比如新增表单的提交接口，多次点击就会多条重复的数据。

需求：防止按钮在短时间内多次点击，使用防抖数据限制规定事件内只能点击一次

思路：

1. 定义一个延迟执行的方法，如果在延迟事件内再调用该方法，则重新计算执行时间。
2. 将时间绑定在click方法上。

```js
const debounce = {
    inserted: function (el, binding) {
        let timer
        el.addEventListener('keyup', () => {
            if (timer) {
                clearTimeout(timer)
            }

            timer = setTimeout(() => {
                binding.value()
            }, 1000)
        })
    }
}

export default debounce
```

使用： 给`DOM`加上`v-debounce`及回调函数即可

```html
<template>
	<button v-debounce="debounceClick">
        防抖
    </button>
</template>

<script>
export default {
    methods: {
        debounceClick () {
            console.log('只触发一次')
        }
    }
}
</script>
```

## `v-emoji`

背景：开发中遇到的表单输入，往往会有对输入内容的限制，比如不能输入表情和特殊字符，只能输入数字或字母等

我们常规方法是在每一个表单的`on-change`事件上做处理

```html
<template>
	<input type="text" v-model="note" @change="vaidateEmoji"/>
</template>

<script>
export default {
    methods: {
        vaidateEmoji () {
            let reg = /[^u4E00-u9FA5|d|a-zA-Z|rns,.?!,。？！…-&$=()-+/*{}[]]|s/g
            this.note = this.note.replace(reg, '')
        }
    }
}
</script>
```

这样代码量比较大而且不好维护，所以我们需要自定义一个指令来解决问题。

需求：根据正则表达式，设计自定义处理表单输入规则的指令，下面以禁止输入表情和特殊字符为例。

```js
let findEle = (parent, type) => {
    return parent.tagName.toLowerCase() = type ? parent : parent.querySelecotor(type)
}

const trigger = (el, type) => {
    const e = document.createEvent('HTMLevents')
    e.initEvent(type, true, true)
    el.dispatchEvent(e)
}

const emoji = {
    bind: function (el, binding, vnode) {
        // 正则规则可根据需求自定义
        var regRule = /[^u4E00-u9FA5|d|a-zA-Z|rns,.?!，。？！…—&$=()-+/*{}[]]|s/g
        let $inp = findEle(el, 'input')
        el.$inp = $inp
        $inp.handle = function () {
          let val = $inp.value
          $inp.value = val.replace(regRule, '')
     
          trigger($inp, 'input')
        }
        $inp.addEventListener('keyup', $inp.handle)
      },
      unbind: function (el) {
        el.$inp.removeEventListener('keyup', el.$inp.handle)
      }
}

export default emoji
```

使用：将需要校验的输入框加上 v-emoji 即可

```html
<template>
  <input type="text" v-model="note" v-emoji />
</template>
```

# 为什么不建议用index做key，为什么不建议用随机数做key？

用`index`和用`随机数`原理相同， 每次渲染都会改变，会很消耗性能

# `nextTick`的用处

我们修改N个变量，那每一次修改并不是就会更新一次。`vue`采用的是`异步更新`的策略，通俗点来说就是：`同一事件循环内`多次修改，会`统一`进行一次`视图更新`，这样才能节省性能

如

```
<div ref="testDiv">{{name}}</div>

name: '小林'

this.name = '林三心'
console.log(this.$refs.testDiv.innerHTML) // 这里打印为 ‘小林’
```

因为`vue`是`异步更新`，所以数据一更新，视图缺没有更新，所以拿到的还是上一次的旧数据，那么想要拿到最新视图怎么办

```
this.name = '林三心'
this.$nextTick(() => {
    console.log(this.$refs.testDiv.innerHTML) // 林三心
})
```

# `vue`的`SSR`是什么？有什么好处

- `SSR`就是服务端渲染
- 基于`nodejs serve`服务环境开发，所有`html`代码在服务端渲染
- 数据返回给前端，然后前端进行“激活”，即可成为浏览器识别的html代码
- `SSR`首次加载更快，有更好的用户体验，有更好的seo优化，因为爬虫能看到整个页面的内容，如果是vue项目，由于数据还要经过解析，就造成爬虫并不会等待你的数据加载完成，所以其实vue项目的seo体验并不是很好。

# `Vue`响应式是怎么实现的？

整体思路是数据劫持 + 观察者模式

对象内部通过`defineReactive`方法，使用`Object.defineProperty`将属性进行劫持（只会劫持已存在的属性），数组则是通过重写数组方法来实现。当页面使用对应属性时，每个属性都拥有自己的`dep`属性，春芳他所依赖的`watcher`（依赖收集），当属性变化后会通知自己对于应的`watcher`去更新（派发更新）

# 为什么只对对象劫持，而要对数组进行方法重写

因为对象最多也就几十个属性，拦截起来数量不多，但是数组可能会有几百几千项，拦截起来非常消耗性能，所以直接重写数组原型上的方法，是比较节省性能的方案。































