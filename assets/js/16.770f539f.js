(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{436:function(t,o,r){"use strict";r.r(o);var _=r(65),e=Object(_.a)({},(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"一张图看清楚原型链"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一张图看清楚原型链"}},[t._v("#")]),t._v(" 一张图看清楚原型链")]),t._v(" "),r("p",[r("img",{attrs:{src:"/img/jsPrototype.png",alt:"方法执行图",title:"JS原型链"}})]),t._v(" "),r("h2",{attrs:{id:"概括"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概括"}},[t._v("#")]),t._v(" 概括")]),t._v(" "),r("p",[t._v("每个函数都有prototype属性，除了Function.prototype.bind()，该属性指向原型(注意：typeof Function.prototype -> 'function')")]),t._v(" "),r("p",[t._v("每个对象都有__proto__属性，指向创建该对象的构造函数的原型。")]),t._v(" "),r("p",[t._v("对象可以通过__proto__来寻找不属于该对象的属性，__proto__将对象连接起来组成了原型链")]),t._v(" "),r("h2",{attrs:{id:"理解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#理解"}},[t._v("#")]),t._v(" 理解")]),t._v(" "),r("p",[t._v("原型是一个特殊的对象，它继承于Object")]),t._v(" "),r("p",[t._v("Object是JS内部定义好的一个构造函数，可以创建JS对象，当然我们也可以自己定义构造函数，比如function Foo(){}，也可以用这个构造函数去创建对象（var f =new Foo()），但是自己定义的构造函数创建的对象f，Foo.prototype相当于它爸爸，因为它的__proto__指向Foo.prototype,Object相当于它爷爷，因为它爸爸（Foo.prototype）的__proto__指向Object.prototype.")]),t._v(" "),r("h2",{attrs:{id:"继承"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#继承"}},[t._v("#")]),t._v(" 继承")]),t._v(" "),r("p",[t._v("把父类的原型挂到子类的原型上面")])])}),[],!1,null,null,null);o.default=e.exports}}]);