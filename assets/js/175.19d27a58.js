(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{704:function(e,t,v){"use strict";v.r(t);var _=v(59),a=Object(_.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"编写通用的代码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编写通用的代码"}},[e._v("#")]),e._v(" 编写通用的代码")]),e._v(" "),v("p",[e._v("在更进一步之前，让我们花一些时间讨论一下编写“通用的”代码时的约束——那就是代码同时运行在服务端和客户端。因为用例及平台 API 不同，运行于不同环境下的代码行为也会不尽相同。我们在此会涉及一些需要注意的关键环节。")]),e._v(" "),v("h2",{attrs:{id:"服务端的数据响应性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#服务端的数据响应性"}},[e._v("#")]),e._v(" 服务端的数据响应性")]),e._v(" "),v("p",[e._v("在只有客户端的应用中，每个用户都在各自的浏览器中使用一个干净的应用实例。对于服务端渲染来说我们也希望如此：每个请求应该拥有一个干净的相互隔离的应用实例，以避免跨请求的状态污染。")]),e._v(" "),v("p",[e._v("因为实际渲染过程需要确定性，我们也会从服务器“预获取”数据——这意味着应用状态在我们开始渲染之前已经被解析好了。这也意味着数据响应性在服务端是不必要的，因此它默认是不开启的。禁用数据响应性也避免了将数据转换为响应式对象的性能损耗。")]),e._v(" "),v("h2",{attrs:{id:"组件生命周期钩子"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件生命周期钩子"}},[e._v("#")]),e._v(" 组件生命周期钩子")]),e._v(" "),v("p",[e._v("因为这里没有动态更新，唯一会在 SSR 过程中被调用的"),v("RouterLink",{attrs:{to:"/guide/instance.html#生命周期钩子"}},[e._v("生命周期钩子")]),e._v("是 "),v("code",[e._v("beforeCreate")]),e._v(" 和 "),v("code",[e._v("created")]),e._v("。这意味着其它生命周期钩子诸如 "),v("code",[e._v("beforeMount")]),e._v(" 或 "),v("code",[e._v("mounted")]),e._v(" 只会在客户端被执行。")],1),e._v(" "),v("p",[e._v("另一个值得注意的是你应该避免代码在 "),v("code",[e._v("beforeCreate")]),e._v(" 或 "),v("code",[e._v("created")]),e._v(" 中产生全局的副作用，例如通过 "),v("code",[e._v("setInterval")]),e._v(" 设置定时器。在只有客户端的代码中我们可以设置定时器然后在 "),v("code",[e._v("beforeUnmount")]),e._v(" 或 "),v("code",[e._v("unmounted")]),e._v(" 时撤掉。然而，因为销毁相关的钩子在 SSR 过程中不会被调用，这些定时器就会永久地保留下来。为了避免这件事，请把副作用移至 "),v("code",[e._v("beforeMount")]),e._v(" 或 "),v("code",[e._v("mounted")]),e._v(" 以代之。")]),e._v(" "),v("h2",{attrs:{id:"访问特定平台的-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#访问特定平台的-api"}},[e._v("#")]),e._v(" 访问特定平台的 API")]),e._v(" "),v("p",[e._v("通用的代码无法假设对特定平台 API 的访问，因此如果你的代码直接使用只存在于浏览器的全局变量例如 "),v("code",[e._v("window")]),e._v(" 或 "),v("code",[e._v("document")]),e._v("，它们会在 Node.js 里执行的时候抛出错误。反之亦然。")]),e._v(" "),v("p",[e._v("对共享于服务端和客户端但使用不同平台 API 的任务来说，我们推荐把这些特定平台的实现包裹在一个通用的 API 里，或使用现有的库来替你做这件事。例如 "),v("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[e._v("axios"),v("OutboundLink")],1),e._v(" 是一个在服务端和客户端暴露相同 API 的 HTTP 客户端。")]),e._v(" "),v("p",[e._v("对于只存在于浏览器的 API 来说，通常的建议是晚些时候在只存在于客户端的生命周期钩子里访问。")]),e._v(" "),v("p",[e._v("注意如果一个三方库没有为通用的用法而编写，它可能需要技巧性地集成到服务端渲染应用中。你"),v("em",[e._v("可以")]),e._v("通过仿造一些全局变量让其工作起来，但是会比较“hacky”且可能妨碍到其它库的环境监测代码。")]),e._v(" "),v("h2",{attrs:{id:"自定义指令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#自定义指令"}},[e._v("#")]),e._v(" 自定义指令")]),e._v(" "),v("p",[e._v("大多数"),v("RouterLink",{attrs:{to:"/guide/custom-directive.html#自定义指令"}},[e._v("自定义指令")]),e._v("都会直接操作 DOM，这会导致 SSR 的错误。所以我们推荐使用组件这种抽象机制而不是指令。")],1)])}),[],!1,null,null,null);t.default=a.exports}}]);