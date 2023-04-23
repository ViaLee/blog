(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{442:function(e,t,r){e.exports=r.p+"assets/img/browser.f04b3c3b.jpg"},443:function(e,t,r){e.exports=r.p+"assets/img/chrome.b3d7a249.jpg"},462:function(e,t,r){"use strict";r.r(t);var s=r(57),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"浏览器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器"}},[e._v("#")]),e._v(" 浏览器")]),e._v(" "),s("h2",{attrs:{id:"浏览器里的进程线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器里的进程线程"}},[e._v("#")]),e._v(" 浏览器里的进程线程")]),e._v(" "),s("p",[e._v("一个浏览器，它可以是单进程多线程的应用，也可以是使用 IPC 通信的多进程应用。\n"),s("img",{attrs:{src:r(442),alt:"Browser",title:"不同浏览器的架构"}}),e._v("\nChrome 采用多进程架构，其顶层存在一个 Browser process 用以协调浏览器的其它进程。\n"),s("img",{attrs:{src:r(443),alt:"Chrome",title:"Chrome的进程"}}),e._v("\nChrome 把浏览器不同程序的功能看做服务，这些服务可以方便的分割为不同的进程或者合并为一个进程。以 Broswer Process 为例，如果 Chrome 运行在强大的硬件上，它会分割不同的服务到不同的进程，这样 Chrome 整体的运行会更加稳定，但是如果 Chrome 运行在资源贫瘠的设备上，这些服务又会合并到同一个进程中运行，这样可以节省内存。"),s("br"),e._v(" "),s("a",{attrs:{href:"https://developers.google.com/web/updates/2018/07/site-isolation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Site Isolation"),s("OutboundLink")],1),e._v(" 机制从 Chrome 67 开始默认启用。这种机制允许在同一个 Tab 下的跨站 iframe 使用单独的进程来渲染，这样会更为安全。")]),e._v(" "),s("h2",{attrs:{id:"从-url-到页面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从-url-到页面"}},[e._v("#")]),e._v(" 从 URL 到页面")]),e._v(" "),s("h3",{attrs:{id:"导航"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导航"}},[e._v("#")]),e._v(" 导航")]),e._v(" "),s("p",[e._v("浏览器 Tab 外的工作主要由 Browser Process 掌控，属于"),s("strong",[e._v("导航流程")]),e._v("，Browser Process 对这些工作进一步划分，使用不同线程进行处理：")]),e._v(" "),s("ul",[s("li",[e._v("UI thread ： 控制浏览器上的按钮及输入框；")]),e._v(" "),s("li",[e._v("network thread: 处理网络请求，从网上获取数据；")]),e._v(" "),s("li",[e._v("storage thread: 控制文件等的访问；")])]),e._v(" "),s("p",[s("strong",[e._v("导航流程：")])]),e._v(" "),s("ol",[s("li",[e._v("UI thread 解析地址栏输入的信息，判断是否为合法 URL\n"),s("ul",[s("li",[e._v("否：使用默认搜索引擎合成带有输入信息的 url 进行搜索")]),e._v(" "),s("li",[e._v("是：url 则判断是否完整，弱不完整则通过内置的方案来对其进行补全")])])]),e._v(" "),s("li",[e._v("通知 network thread\n"),s("ul",[s("li",[e._v("检查本地缓存资源，如果有直接返给浏览器进程。")]),e._v(" "),s("li",[e._v("没有找到本地缓存资源或者需要验证资源是否有效，则会进入网络请求流程。")]),e._v(" "),s("li",[e._v("如果 url 是 ip 地址，则直接进入 TCP 连接阶段。")]),e._v(" "),s("li",[e._v("如果 url 是域名则需要 DNS 解析，得到 ip 地址，再建立 TCP 连接。")]),e._v(" "),s("li",[e._v("进入 TCP 队列，单域名限制最多 6 个，超过需要排队等待。浏览器和服务器通过三次握手建立连接。")]),e._v(" "),s("li",[e._v("如果是 Https，则建立 TCP 连接之后建立 TLS 连接，安全地交换对称密钥。")]),e._v(" "),s("li",[e._v("连接建立后，构建请求行，请求头等信息，发送请求，接收响应。")]),e._v(" "),s("li",[e._v("解析响应头，状态码，301、302 则通知 UI thread 服务器要求重定向，之后，另外一个 URL 请求会被触发。")]),e._v(" "),s("li",[e._v("状态码 200 则解析响应体，contentTpe，若为字节流类型则提交给下载管理器处理，Html 类型则准备进入渲染阶段。Safe Browsing 检查也会在此时触发，如果域名或者请求内容匹配到已知的恶意站点，network thread 会展示一个警告页。此外 CORB 检测也会触发确保敏感数据不会被传递给渲染进程。")])])]),e._v(" "),s("li",[e._v("network thread 确信浏览器可以导航到请求网页，network thread 会通知 UI thread 数据已经准备好，UI thread 会查找到一个 renderer process 进行网页的渲染。如果当前打开的页面和该请求是同一个站点，则复用该渲染进程，否则新创建一个渲染进程。")]),e._v(" "),s("li",[e._v("Browser Process 将 network thread 接收的 HTML 数据提交给 renderer process。进入渲染流程。")]),e._v(" "),s("li",[e._v("渲染结束，renderer process 通知 Browser Process，UI thread 停止 tab 中的 spinner")])]),e._v(" "),s("h3",{attrs:{id:"渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染"}},[e._v("#")]),e._v(" 渲染")]),e._v(" "),s("p",[e._v("由 JS 引擎和渲染引擎处理\n"),s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/13528958b6804c16a1dafb613d24b8a9~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp",alt:"fps"}})]),e._v(" "),s("h4",{attrs:{id:"渲染进程-renderer-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染进程-renderer-process"}},[e._v("#")]),e._v(" 渲染进程 renderer process")]),e._v(" "),s("ol",[s("li",[e._v("主线程 Main thread")]),e._v(" "),s("li",[e._v("工作线程 Worker thread")]),e._v(" "),s("li",[e._v("合成器线程 Compositor thread")]),e._v(" "),s("li",[e._v("光栅线程 Raster thread")])]),e._v(" "),s("h4",{attrs:{id:"渲染流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染流程"}},[e._v("#")]),e._v(" 渲染流程")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("解析 html"),s("br"),e._v("\nhtml 源码通过 xml parser 解析成 dom")])]),e._v(" "),s("li",[s("p",[e._v("加载资源"),s("br"),e._v("\n主线程会请求构建 dom 过程中引用的资源或从 cache 读取，如果在 html 中存在 "),s("code",[e._v("<img>")]),e._v(" "),s("code",[e._v("<link>")]),e._v(" 等标签，preload scanner 会把这些请求传递给 Browser process 中的 network thread 进行相关资源的下载。")])]),e._v(" "),s("li",[s("p",[e._v("加载执行 js(js 引擎)"),s("br"),e._v("\n因为 "),s("code",[e._v("document.write()")]),e._v("等 API 会影响 Dom 结构，所以遇到"),s("code",[e._v("<script>")]),e._v("，会停止解析 HTML，而去加载解析和执行 JS 代码，因此为其添加"),s("code",[e._v("async")]),e._v("或"),s("code",[e._v("defer")]),e._v("等属性异步加载，不会阻塞渲染。")])]),e._v(" "),s("li",[s("p",[e._v("解析样式"),s("br"),e._v("\ncss 源码通过 css parser 解析，获取每个节点的样式，构建出 style 树，包含节点内容和样式。")])]),e._v(" "),s("li",[s("p",[e._v("布局"),s("br"),e._v("\n遍历 dom，及节点样式，主线程基于 style 树构建出 layout 树(仅包含可见 dom)，包含位置信息。")])]),e._v(" "),s("li",[s("p",[e._v("绘制"),s("br"),e._v("\n主线程遍历 layout 树，创建绘制记录(包含绘制顺序)。")])]),e._v(" "),s("li",[s("p",[e._v("合成帧"),s("br"),e._v("\n主线程遍历 layout 树来创建 layer tree（层树，包含层级），主线程会把这些信息通知给 compositor thread。compositor thread 对"),s("code",[e._v("层")]),e._v("进行栅格化，有的层的可以达到整个页面的大小，compositor thread 会将它切块(磁贴)后发送给 Raster thread，栅格化每一个块并存储在 GPU 显存中。compositor thread 会收集称为绘制四边形的磁贴信息以创建合成帧。当页面合成时，compositor thread 会标记页面中绑定有事件处理器的区域为 non-fast scrollable region。")]),e._v(" "),s("p",[s("strong",[e._v("Tips:")])]),e._v(" "),s("ul",[s("li",[e._v("由于浏览器的 UI 改变或者其它拓展的渲染进程也可以添加合成帧。")]),e._v(" "),s("li",[e._v("合成器无关主线程，不涉及重绘重排，因此"),s("a",{attrs:{href:"https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/",target:"_blank",rel:"noopener noreferrer"}},[e._v("合成器相关动画"),s("OutboundLink")],1),e._v("最流畅。")]),e._v(" "),s("li",[e._v("滚动发生或非快速滚动区域（non-fast scrollable region）外的事件触发，重复该步骤。该区域内的事件触发会提交给主线程同步处理。")])]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"touchstart"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("target "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" area"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("preventDefault")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" passive"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// passive: true 使监听相关事件时，又不阻塞合成器线程在等待主线程响应前构建新的组合帧。 且不调用preventDefault")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener#%E4%BD%BF%E7%94%A8_passive_%E6%94%B9%E5%96%84%E7%9A%84%E6%BB%9A%E5%B1%8F%E6%80%A7%E8%83%BD")]),e._v("\n")])])])]),e._v(" "),s("li",[s("p",[e._v("合成帧通过 IPC 传递给 Browser Process，Browser Process 再传递给 GPU 用以展示在屏幕上。")]),e._v(" "),s("blockquote",[s("p",[e._v("原文："),s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/47407398",target:"_blank",rel:"noopener noreferrer"}},[e._v("图解浏览器的基本工作原理"),s("OutboundLink")],1)])])])]),e._v(" "),s("h4",{attrs:{id:"回流与重绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回流与重绘"}},[e._v("#")]),e._v(" 回流与重绘")]),e._v(" "),s("p",[e._v("回流必将引起重绘，重绘不一定会引起回流。"),s("br"),e._v(" "),s("strong",[e._v("回流")]),e._v("：Render Tree 中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档。"),s("br"),e._v("\n导致回流的操作：")]),e._v(" "),s("ul",[s("li",[e._v("浏览器窗口大小发生改变")]),e._v(" "),s("li",[e._v("元素尺寸或位置发生改变")]),e._v(" "),s("li",[e._v("元素内容变化（文字数量或图片大小等等）")]),e._v(" "),s("li",[e._v("元素字体大小变化")]),e._v(" "),s("li",[e._v("添加或者删除可见的 DOM 元素")]),e._v(" "),s("li",[e._v("激活 CSS 伪类（例如：:hover）")]),e._v(" "),s("li",[e._v("查询某些属性或调用某些方法")])]),e._v(" "),s("p",[s("strong",[e._v("重绘")]),e._v("：元素样式的改变并不影响它在文档流中的位置，浏览器会将新样式赋予给元素并重新绘制它。")]),e._v(" "),s("p",[s("strong",[e._v("性能影响")]),e._v("："),s("br"),e._v("\n浏览器会维护一个队列，把所有引起回流和重绘的操作放入队列中，如果队列中的任务数量或者时间间隔达到一个阈值的，浏览器就会将队列清空，进行一次批处理，这样可以把多次回流和重绘变成一次。"),s("br"),e._v("\n当你访问 dom 定位、宽高相关属性或方法时，浏览器会立刻清空队列。")]),e._v(" "),s("p",[s("strong",[e._v("如何避免")]),s("br"),e._v("\ncss")]),e._v(" "),s("ul",[s("li",[e._v("尽可能在 DOM 树的最末端改变 class。")]),e._v(" "),s("li",[e._v("避免设置多层内联样式。")]),e._v(" "),s("li",[e._v("将动画效果应用到 position 属性为 absolute 或 fixed 的元素上。")]),e._v(" "),s("li",[e._v("避免使用 CSS 表达式（例如：calc()）。")])]),e._v(" "),s("p",[e._v("js")]),e._v(" "),s("ul",[s("li",[e._v("避免频繁操作样式，最好一次性重写 style 属性，或者定义为 class，统一修改。")]),e._v(" "),s("li",[e._v("避免频繁操作 DOM，在 documentFragment 上面操作 dom，最后将其添加到文档中。")]),e._v(" "),s("li",[e._v("先将元素设置 display: none，操作结束后显示。(在 display 属性为 none 的元素上进行的 DOM 操作不会引发回流和重绘)")]),e._v(" "),s("li",[e._v("避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。")]),e._v(" "),s("li",[e._v("对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。")])]),e._v(" "),s("h2",{attrs:{id:"事件循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[e._v("#")]),e._v(" 事件循环")]),e._v(" "),s("p",[e._v("由上可知浏览器内核：渲染引擎和 JS 引擎，js 和渲染是分开的。"),s("br"),e._v("\nJS 引擎处理 JavaScript 语言的一大特点就是单线程，同一个时间只能做一件事。为了协调事件、用户交互、脚本、UI 渲染和网络处理等行为，防止主线程的阻塞，才有 Event Loop。")]),e._v(" "),s("ol",[s("li",[e._v("先同步执行 js，遇到宏任务将其推入宏任务队列，遇到微任务，将其推入当前宏任务的微任务队列，执行完 js 同步代码后检查微任务队列，微任务执行完之后，执行下一个宏任务")]),e._v(" "),s("li",[e._v("然后检查是否需要渲染")]),e._v(" "),s("li",[e._v("需要渲染则执行 requestAnimationFrame(重绘之前执行)后切换到渲染引擎渲染")]),e._v(" "),s("li",[e._v("渲染后/不需要渲染则检查 worker")]),e._v(" "),s("li",[e._v("然后在一帧中的剩余时间内执行 requestIdleCallback")])]),e._v(" "),s("p",[e._v("宏任务："),s("br"),e._v("\nsetTimeout、setInterval、setImmediate、I/O、postMessage、MessageChannel"),s("br"),e._v("\n微任务："),s("br"),e._v("\nmutationObserve：比如 vue 的 nextTick 的实现之前使用到了（仅浏览器）"),s("br"),e._v("\npromise 的 resolve，async,await"),s("br"),e._v("\nprocess.nextTick ：每个类型队列结束后执行")]),e._v(" "),s("blockquote",[s("p",[e._v("原文："),s("br"),e._v(" "),s("a",{attrs:{href:"https://juejin.cn/post/6961349015346610184",target:"_blank",rel:"noopener noreferrer"}},[e._v("Event Loop 和 JS 引擎、渲染引擎的关系"),s("OutboundLink")],1),s("br"),e._v(" "),s("a",{attrs:{href:"https://www.bilibili.com/video/BV1864y117PQ?p=3",target:"_blank",rel:"noopener noreferrer"}},[e._v("node 中的事件循环"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"浏览器一帧内发生了什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器一帧内发生了什么"}},[e._v("#")]),e._v(" 浏览器一帧内发生了什么")]),e._v(" "),s("ul",[s("li",[e._v("处理用户输入事件；")]),e._v(" "),s("li",[e._v("执行 JS；")]),e._v(" "),s("li",[e._v("check 渲染")]),e._v(" "),s("li",[e._v("requestAnimation 调用")]),e._v(" "),s("li",[e._v("渲染")]),e._v(" "),s("li",[e._v("check worker")]),e._v(" "),s("li",[e._v("requestIdleCallback 回调"),s("br"),e._v("\n浏览器空闲时间：16ms 内处理完以上的剩余时间就是空闲时间"),s("br"),e._v("\n浏览器很忙的情况：\nrequestIdleCallback 的 timeout 参数，如果超过这个时间，还没被执行，那么会在下一帧强制执行回调（兼容性较差）")])]),e._v(" "),s("h2",{attrs:{id:"垃圾回收机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收机制"}},[e._v("#")]),e._v(" 垃圾回收机制")]),e._v(" "),s("p",[e._v("在 Chrome 中，v8 被限制了内存的使用（64 位约 1.4G/1464MB ， 32 位约 0.7G/732MB）。栈内的内存，操作系统会自动进行内存分配和内存释放，而堆中的内存，由 JS 引擎（如 Chrome 的 V8）手动进行释放。")]),e._v(" "),s("h3",{attrs:{id:"chrome-垃圾回收算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chrome-垃圾回收算法"}},[e._v("#")]),e._v(" Chrome 垃圾回收算法")]),e._v(" "),s("p",[e._v("为了提高回收效率，V8 将堆分为两类"),s("code",[e._v("新生代")]),e._v("和"),s("code",[e._v("老生代")]),e._v("，分别使用两个不同的垃圾回收器，新生代中存放生存时间短的对象，老生代中存放生存时间久的对象。")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("副垃圾回收器 - Scavenge 算法：主要负责"),s("code",[e._v("新生代")]),e._v("的垃圾回收。"),s("br"),e._v(" "),s("code",[e._v("Scavenge算法")]),e._v("是一个典型的牺牲空间换取时间的复制算法，在占用空间不大的场景上非常适用。原理：将"),s("code",[e._v("from-space")]),e._v("中存活的活动对象(有被引用的对象)复制到"),s("code",[e._v("to-space")]),e._v("中，并将这些对象的内存有序的排列起来，然后将 from-space 中的非活动对象的内存进行释放，完成之后，将 from-space 和 to-space 进行互换。"),s("br"),e._v("\nnursery 子代——初次分配内存的对象；intermediate 子代——一次垃圾回收后还存在的对象，再经过一次垃圾回收还存在则转移到"),s("code",[e._v("老生代")]),e._v("中。")])]),e._v(" "),s("li",[s("p",[e._v("主垃圾回收器 - Mark-Sweep & Mark-Compact：主要负责老生代的垃圾回收。"),s("br"),e._v(" "),s("code",[e._v("Mark-Sweep")]),e._v("：采用标记清除法进行回收。标记活动对象，清除非活动对象"),s("br"),e._v(" "),s("code",[e._v("Mark-Compact")]),e._v("：Sweep 后清除掉的地方变成内存碎片，无法满足大内存对象的存储需求，因此进行活动对象整理：将所有的活动对象往一端移动，移动完成后，直接清理掉边界外的内存。")])])]),e._v(" "),s("h3",{attrs:{id:"全停顿"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全停顿"}},[e._v("#")]),e._v(" 全停顿")]),e._v(" "),s("p",[e._v("垃圾回收器会将 JavaScript 应用暂停，进行垃圾回收。因此老生代的处理可能使页面卡顿。")]),e._v(" "),s("h3",{attrs:{id:"v8-中的-orinoco"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v8-中的-orinoco"}},[e._v("#")]),e._v(" V8 中的 Orinoco")]),e._v(" "),s("p",[e._v("解决垃圾回收长时间全停顿的问题。")]),e._v(" "),s("ul",[s("li",[e._v("增量标记"),s("br"),e._v("\n标记由一次，变为多次。当一定量的内存分配后，脚本的执行就会停顿并进行一次增量标记。")]),e._v(" "),s("li",[e._v("惰性清理"),s("br"),e._v(" "),s("code",[e._v("写屏障")]),e._v("成本是弊端")]),e._v(" "),s("li",[e._v("并发——允许在在垃圾回收的同时不需要将主线程挂起，两者可以同时进行")]),e._v(" "),s("li",[e._v("并行——主线程和辅助线程同时执行同样的 GC 工作")])]),e._v(" "),s("h3",{attrs:{id:"v8-当前垃圾回收机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v8-当前垃圾回收机制"}},[e._v("#")]),e._v(" V8 当前垃圾回收机制")]),e._v(" "),s("p",[e._v("并发标记（Concurrent），同时在并发的基础上添加并行（Parallel）技术。")]),e._v(" "),s("blockquote",[s("p",[e._v("原文："),s("br"),e._v(" "),s("a",{attrs:{href:"https://segmentfault.com/a/1190000025129635",target:"_blank",rel:"noopener noreferrer"}},[e._v("深入理解 Chrome V8 垃圾回收机制"),s("OutboundLink")],1)])]),e._v(" "),s("h3",{attrs:{id:"浏览器-observer-方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器-observer-方式"}},[e._v("#")]),e._v(" 浏览器 Observer 方式")]),e._v(" "),s("p",[e._v("addEventListener 用于监听交互行为。\n非交互行为的监听，有一下 5 种：")]),e._v(" "),s("ul",[s("li",[e._v("IntersectionObserver：监听元素可见性变化，常用来做元素显示的数据采集、图片的懒加载")]),e._v(" "),s("li",[e._v("MutationObserver：监听元素属性和子节点变化，比如可以用来做去不掉的水印")]),e._v(" "),s("li",[e._v("ResizeObserver：监听元素大小变化")]),e._v(" "),s("li",[e._v("PerformanceObserver：监听性能相关")]),e._v(" "),s("li",[e._v("ReportingObserver：监听过时的 api、浏览器的一些干预行为的报告")])]),e._v(" "),s("blockquote",[s("p",[e._v("相关：\n"),s("a",{attrs:{href:"https://mp.weixin.qq.com/s/c3sYhwrunLqCRfPI9ZCzOg",target:"_blank",rel:"noopener noreferrer"}},[e._v("observer"),s("OutboundLink")],1)])]),e._v(" "),s("h3",{attrs:{id:"鼠标事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#鼠标事件"}},[e._v("#")]),e._v(" 鼠标事件")]),e._v(" "),s("p",[e._v("onmouseleave 与 onmouseout 区别：")]),e._v(" "),s("ol",[s("li",[e._v("onmouseenter、onmouseleave，鼠标进入到指定元素区域内触发事件，不支持冒泡，不包含子元素的区域。")]),e._v(" "),s("li",[e._v("onmouseover、onmouseout，鼠标进入指定元素触发事件，含子元素区域。")])])])}),[],!1,null,null,null);t.default=a.exports}}]);