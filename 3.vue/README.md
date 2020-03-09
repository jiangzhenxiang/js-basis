# vue原理

## 1、请说一下响应式原理
object对象的实现

理解：

- 1、核心点： `object.defineProperty`
- 2、默认vue在初始化函数数据时，会给data中的属性使用`object.defineProperty`重新定义所有属性，当页面取到对应属性时，会进行依赖收集（收集当前组件中的watcher），如果属性发送变化会通知相关依赖进行更新操作

> 看vue源码 src/core/observer/index.js

1. `initData` 初始化用户传入的data数据 （core/instance/state.js）
2. `new Observer` 将数据进行观测（core/observer/index.js）
3. `this.walk(value)` 进行对象的处理（core/observer/index.js）
4. `defineReactive` 循环对象属性 定义响应式变化（core/observer/index.js）
5. `使用object.defineProperty`重新定义数据（core/observer/index.js）

拦截属性的截取 -进行依赖收集 - 拦截属性的更新操作-对相关依赖进行通知

## 2、vue中是如何检测数组变化?
理解：

- 使用函数劫持的方式，重写了数组的方法
- vue将data中的数组，进行了原型链重新。指向了自己定义的数组原型方法，这样当调用数组api时，可以通知依赖更新。如果数组中包含着引用类型。会对数组中的引用类型再次进行监控。

> 总结是两点: 1、更改了数组的原型。2、对数组中的每项进行观测监控，如果是对象也会视图更新。

> vue源码：

1. `initData`
2. `new Observer`
3. `protoAugment(value, arrayMethods) `将数组的原型方法指向重新的原型。 其中arrayMethods是对数组的原型方法进行重写。
4. `observerArray` 深度观察数组中的每一项（对象类型）


## 3、为何vue采用异步渲染

异步更新队列指的是当状态发生变化时，Vue异步执行DOM更新。

我们在项目开发中会遇到这样一种场景：当我们将状态改变之后想获取更新后的DOM，往往我们获取到的DOM是更新前的旧DOM，我们需要使用`vm.$nextTick`方法异步获取DOM，例如：

```js
Vue.component('example', {
  template: '<span>{{ message }}</span>',
  data: function () {
    return {
      message: '没有更新'
    }
  },
  methods: {
    updateMessage: function () {
      this.message = '更新完成'
      console.log(this.$el.textContent) // => '没有更新'
      this.$nextTick(function () {
        console.log(this.$el.textContent) // => '更新完成'
      })
    }
  }
})
```

如果同步更新DOM将会有这样一个问题，我们在代码中同步更新数据N次，DOM也会更新N次，伪代码如下：

```js
this.message = '更新完成' // DOM更新一次
this.message = '更新完成2' // DOM更新两次
this.message = '更新完成3' // DOM更新三次
this.message = '更新完成4' // DOM更新四次
```
但事实上，我们真正想要的其实只是最后一次更新而已，也就是说前三次DOM更新都是可以省略的。

**所以我们在使用Vue时，修改状态后更新DOM都是异步的。**



## vue.extend
