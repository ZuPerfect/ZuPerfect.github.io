(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{449:function(e,t,a){"use strict";a.r(t);var _=a(65),v=Object(_.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"_1、虚拟dom中key的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、虚拟dom中key的作用"}},[e._v("#")]),e._v(" 1、虚拟DOM中key的作用？")]),e._v(" "),a("p",[e._v("key是虚拟DOM对象的标识，当状态中的数据发生变化的时，Vue会根据“新数据”生成“新的虚拟DOM”，随后Vue进行“新虚拟DOM”的差异比较，比较规则如下：")]),e._v(" "),a("ol",[a("li",[e._v("旧虚拟DOM中找到了与新虚拟DOM相同的key：")])]),e._v(" "),a("ul",[a("li",[e._v("若虚拟DOM中的内容没有变，直接使用之前的真实DOM")]),e._v(" "),a("li",[e._v("若虚拟DOM中内容变了，则生成新的真实DOM，随后替换掉页面中之前的真实DOM")])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("旧虚拟DOM中未找到与新虚拟DOM相同的key")])]),e._v(" "),a("ul",[a("li",[e._v("创建新的真实DOM，随后渲染到页面")])]),e._v(" "),a("h2",{attrs:{id:"_2、用index作为key可能会引发的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、用index作为key可能会引发的问题"}},[e._v("#")]),e._v(" 2、用index作为key可能会引发的问题？")]),e._v(" "),a("ol",[a("li",[e._v("若对数据进行：逆序添加、逆序删除等破坏顺序操作：会产生没有必要的真实DOM更新（界面效果没问题，但效率低）")]),e._v(" "),a("li",[e._v("如果结构中还包含输入类的DOM：会产生错误DOM更新（界面有问题）")])]),e._v(" "),a("h2",{attrs:{id:"_3、开发中如何选择key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、开发中如何选择key"}},[e._v("#")]),e._v(" 3、开发中如何选择key？")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("最好使用每条数据的唯一标识作为key，比如id、手机号、身份证号、学号等唯一值")])]),e._v(" "),a("li",[a("p",[e._v("如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的")])])]),e._v(" "),a("h2",{attrs:{id:"_4、vue-组件中-data-为什么必须是函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、vue-组件中-data-为什么必须是函数"}},[e._v("#")]),e._v(" 4、Vue 组件中 data 为什么必须是函数？")]),e._v(" "),a("p",[e._v("保证组件的独立性和可复用性，data是一个函数，组件实例化的时候将会调用这个函数，返回一个对象，计算机会给这个对象分配一个内存地址，你实例化几次，就分配几个内存地址，他们的地址都不一样，所以每个组件中的数据不会相互干扰，改变其中一个组件的状态，其它组件不变。")]),e._v(" "),a("h2",{attrs:{id:"_5、vuex的state特性是"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、vuex的state特性是"}},[e._v("#")]),e._v(" 5、vuex的State特性是？")]),e._v(" "),a("p",[e._v("state属性是Vuex中用于存放组件之间共享的数据；也就是说，我们把一些组件之间共享的状态主要存放在state属性中；它采用的是单一状态树——用一个对象就包含了全部的应用层级状态。这也意味着，每个应用将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。")]),e._v(" "),a("h2",{attrs:{id:"_6、vue声明组件的state是用data方法-那为什么data是通过一个function来返回一个对象-而不是直接写一个对象呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、vue声明组件的state是用data方法-那为什么data是通过一个function来返回一个对象-而不是直接写一个对象呢"}},[e._v("#")]),e._v(" 6、Vue声明组件的state是⽤data⽅法，那为什么data是通过⼀个function来返回⼀个对象，⽽不是直接写⼀个对象呢？")]),e._v(" "),a("p",[e._v("从语法上说，如果不⽤function返回就会出现语法错误导致编译不通过。从原理上的话，⼤概就是组件可以被多次创建，如果不使⽤function就会使所有调⽤该组件的页⾯公⽤同⼀个数据域，这样就失去了组件的概念了")]),e._v(" "),a("h2",{attrs:{id:"_7、介绍一下vue的响应式系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、介绍一下vue的响应式系统"}},[e._v("#")]),e._v(" 7、介绍一下Vue的响应式系统")]),e._v(" "),a("ol",[a("li",[e._v("任何一个 Vue Component 都有一个与之对应的 Watcher 实例")]),e._v(" "),a("li",[e._v("Vue 的 data 上的属性会被添加 getter 和 setter 属性")]),e._v(" "),a("li",[e._v("当 Vue Component render 函数被执行的时候, data 上会被 触碰(touch), 即被读, getter 方法会被调用, 此时 Vue 会去记录此 Vue component 所依赖的所有 data。(这一过程被称为依赖收集)")]),e._v(" "),a("li",[e._v("data 被改动时（主要是用户操作）, 即被写, setter 方法会被调用, 此时 Vue 会去通知所有依赖于此 data 的组件去调用他们的 render 函数进行更新")])]),e._v(" "),a("h2",{attrs:{id:"_8、computed与watch的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8、computed与watch的区别"}},[e._v("#")]),e._v(" 8、computed与watch的区别？")]),e._v(" "),a("ol",[a("li",[e._v("computed擅长处理的场景：一个数据受多个数据影响；watch擅长处理的场景：一个数据影响多个数据。")]),e._v(" "),a("li",[e._v("功能上：computed是计算属性，watch是监听一个值的变化，然后执行对应的回调。")]),e._v(" "),a("li",[e._v("是否调用缓存：computed支持缓存，只有依赖数据发生改变,才会重新进行计算;而watch不支持缓存，数据变,直接会触发相应的操作。")]),e._v(" "),a("li",[e._v("是否调用return：computed中的函数必须要用return返回，watch中的函数不是必须要用return。")]),e._v(" "),a("li",[e._v("computed不支持异步，当computed内有异步操作时无效，无法监听数据的变化;而watch支持异步。")]),e._v(" "),a("li",[e._v("computed默认第一次加载的时候就开始监听；watch默认第一次加载不做监听，如果需要第一次加载做监听，添加immediate属性，设置为true（immediate:true）")])]),e._v(" "),a("h2",{attrs:{id:"_9、介绍一下vue的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9、介绍一下vue的生命周期"}},[e._v("#")]),e._v(" 9、介绍一下Vue的生命周期")]),e._v(" "),a("p",[e._v("每一个vue实例从创建到销毁的过程，就是这个vue实例的生命周期。在这个过程中，他经历了从开始创建、初始化数据、编译模板、挂载Dom、渲染→更新→渲染、卸载等一系列过程。")]),e._v(" "),a("ul",[a("li",[e._v("将要创建 ===>调用beforeCreate函数")]),e._v(" "),a("li",[e._v("创建完毕 ===>调用created函数")]),e._v(" "),a("li",[e._v("将要挂载 ===>调用beforeMount函数")]),e._v(" "),a("li",[e._v("挂载完毕 ===>调用mounted函数")]),e._v(" "),a("li",[e._v("将要更新 ===>调用beforeUpdate函数")]),e._v(" "),a("li",[e._v("更新完毕 ===>调用uodated函数")]),e._v(" "),a("li",[e._v("将要销毁 ===>调用beforeDestory函数")]),e._v(" "),a("li",[e._v("销毁完毕 ===>调用destroyed函数")])]),e._v(" "),a("h2",{attrs:{id:"_10、vue生命周期的作用是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10、vue生命周期的作用是什么"}},[e._v("#")]),e._v(" 10、vue生命周期的作用是什么?")]),e._v(" "),a("p",[e._v("Vue生命周期中有多个事件钩子，让我们在控制整个Vue实例过程时更容易形成好的逻辑。")]),e._v(" "),a("h2",{attrs:{id:"_11、第一次页面加载会触发哪几个钩子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11、第一次页面加载会触发哪几个钩子"}},[e._v("#")]),e._v(" 11、第一次页面加载会触发哪几个钩子?")]),e._v(" "),a("p",[e._v("第一次页面加载时会触发 beforeCreate, created, beforeMount, mounted 这几个钩子")]),e._v(" "),a("h2",{attrs:{id:"_12、dom-渲染在-哪个周期中就已经完成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12、dom-渲染在-哪个周期中就已经完成"}},[e._v("#")]),e._v(" 12、DOM 渲染在 哪个周期中就已经完成?")]),e._v(" "),a("p",[e._v("DOM 渲染在 mounted 中就已经完成了。")]),e._v(" "),a("h2",{attrs:{id:"_13、简单描述每个周期具体适合哪些场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13、简单描述每个周期具体适合哪些场景"}},[e._v("#")]),e._v(" 13、简单描述每个周期具体适合哪些场景")]),e._v(" "),a("ul",[a("li",[e._v("beforecreate : 可以在这加个loading事件，在加载实例时触发")]),e._v(" "),a("li",[e._v("created : 初始化完成时的事件写在这⾥，如在这结束loading事件，异步请求也适宜在这⾥调⽤")]),e._v(" "),a("li",[e._v("mounted : 挂载元素，获取到DOM节点")]),e._v(" "),a("li",[e._v("updated : 如果对数据统⼀处理，在这⾥写上相应函数")]),e._v(" "),a("li",[e._v("beforeDestroy : 可以做⼀个确认停⽌事件的确认框")]),e._v(" "),a("li",[e._v("nextTick : 更新数据后⽴即操作dom")])]),e._v(" "),a("h2",{attrs:{id:"_14、组件之间是怎么通信的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14、组件之间是怎么通信的"}},[e._v("#")]),e._v(" 14、组件之间是怎么通信的")]),e._v(" "),a("p",[e._v("组件之间通信主要分为三种：父子传参，子父传参，兄弟传参。")]),e._v(" "),a("ul",[a("li",[e._v("父子传参：父组件通过自定义属性的方式传参，通过props属性给子组件传参，子组件通过props属性去接收参数。")]),e._v(" "),a("li",[e._v("子父传参：子组件通过自定义事件的方式传参，通过$emit去进行传参。")])]),e._v(" "),a("h2",{attrs:{id:"_15、vue-cli中怎样使用自定义的组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15、vue-cli中怎样使用自定义的组件"}},[e._v("#")]),e._v(" 15、Vue.cli中怎样使用自定义的组件？")]),e._v(" "),a("ol",[a("li",[e._v("在 components 目录新建组件文件")]),e._v(" "),a("li",[e._v("在需要用到的页面import中导入")]),e._v(" "),a("li",[e._v("使用component注册")]),e._v(" "),a("li",[e._v("在 template 视图中使用组件标签")])]),e._v(" "),a("h2",{attrs:{id:"_16、vue如何实现按需加载配合webpack设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16、vue如何实现按需加载配合webpack设置"}},[e._v("#")]),e._v(" 16、Vue如何实现按需加载配合webpack设置？")]),e._v(" "),a("ul",[a("li",[e._v("webpack中提供了require.ensure( )来实现按需加载。以前引入路由是通过import这样的方式引入，改为const定义方式进行引入。")]),e._v(" "),a("li",[e._v("不进行页面按需加载引入方式 import home from ../../common/home.vue")]),e._v(" "),a("li",[e._v("进行页面按需加载的引入方式：const home = r =>require.ensure([],() =>require('../../common/home.vue)))")])])])}),[],!1,null,null,null);t.default=v.exports}}]);