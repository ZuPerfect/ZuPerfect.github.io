(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{437:function(e,t,r){"use strict";r.r(t);var a=r(65),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("在了解VUE数据双向绑定之前，必须得先知道Object.defineProperty()方法，该方法便是VUE双向数据绑定的核心！")]),e._v(" "),r("h1",{attrs:{id:"object-defineproperty"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#object-defineproperty"}},[e._v("#")]),e._v(" Object.defineProperty()")]),e._v(" "),r("h1",{attrs:{id:"createdocumentfragment"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#createdocumentfragment"}},[e._v("#")]),e._v(" createDocumentFragment()")]),e._v(" "),r("h2",{attrs:{id:"简单思路"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简单思路"}},[e._v("#")]),e._v(" 简单思路")]),e._v(" "),r("p",[e._v("1、重写Object.defineProperty()方法的get，set方法")]),e._v(" "),r("p",[e._v("2、set的时候给当前属性添加订阅，也就是使用一个数组记录下当前发生变化了的属性")]),e._v(" "),r("p",[e._v("3、get的时候，取出当前订阅的属性值，进行发布，也就是更新网页上面显示的内容")]),e._v(" "),r("h2",{attrs:{id:"vue3种使用proxy实现的数据双向绑定-那proxy-与-object-defineproperty有什么区别呢"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue3种使用proxy实现的数据双向绑定-那proxy-与-object-defineproperty有什么区别呢"}},[e._v("#")]),e._v(" vue3种使用proxy实现的数据双向绑定，那Proxy 与 Object.defineProperty有什么区别呢？")]),e._v(" "),r("p",[e._v("Object.defineProperty虽然可以实现数据的双向绑定，但是它是有缺陷的\n1、只能对属性进行数据劫持，所以需要深度遍历整个对象")]),e._v(" "),r("p",[e._v("2、对于数组，不能监听到数据的变化")])])}),[],!1,null,null,null);t.default=o.exports}}]);