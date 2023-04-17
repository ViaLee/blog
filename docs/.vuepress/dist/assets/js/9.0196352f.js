(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{348:function(t,s,a){t.exports=a.p+"assets/img/lifeCycle.cac7e5e5.png"},349:function(t,s,a){t.exports=a.p+"assets/img/renderControl.09225c1d.png"},374:function(t,s,a){"use strict";a.r(s);var e=a(17),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"react"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react"}},[t._v("#")]),t._v(" React")]),t._v(" "),s("h2",{attrs:{id:"jsx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsx"}},[t._v("#")]),t._v(" Jsx")]),t._v(" "),s("p",[t._v("经过 babel 编译--\x3eReact.createElement(react 17 不需要显式导入 react)交由React处理、渲染。"),s("br"),t._v("\nReact DOM 在渲染所有输入内容之前，默认会进行转义，这样可以有效地防止 XSS（cross-site-scripting, 跨站脚本）攻击。"),s("br"),t._v("\n可通过@babel/plugin-transform-react-jsx (opens new window)插件显式告诉 Babel 编译时需要将 JSX 编译为什么函数的调用（默认为 React.createElement）。")]),t._v(" "),s("h3",{attrs:{id:"react-createelement"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-createelement"}},[t._v("#")]),t._v(" React.createElement")]),t._v(" "),s("p",[t._v("createElement 方法会创建并返回一个对象，存放组件的信息，其$$typeof 为'REACT_ELEMENT_TYPE'，react.element类型"),s("br"),t._v("\nReact.isValidElement()检测是否为合法组件")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isValidElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" object "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n    object "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n    object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$$"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REACT_ELEMENT_TYPE")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),t._v(" "),s("h2",{attrs:{id:"children-相关-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#children-相关-api"}},[t._v("#")]),t._v(" Children 相关 API")]),t._v(" "),s("p",[t._v("React.isValidElement(item) 判断是否 react element\nReact.Children.only 子节点是否单一\nReact.Children.forEach 遍历子节点\nReact.Children.forEach = React.Children.toArray + Array.prototype.forEach")]),t._v(" "),s("blockquote",[s("p",[t._v("通常与 React.cloneElement()一起使用操作 children,注入新的属性")])]),t._v(" "),s("h2",{attrs:{id:"生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),s("p",[s("img",{attrs:{src:a(348),alt:"LifeCycle"}}),t._v("\n错误处理："),s("br"),t._v("\nstatic getDerivedStateFromError(error) render 阶段，不可有副作用"),s("br"),t._v("\ncomponentDidCatch() commit 阶段，可有副作用"),s("br"),t._v("\ncomponentDidUpdate 与 useEffect 无依赖类似，每一次执行函数组件都会执行")]),t._v(" "),s("h3",{attrs:{id:"useeffect-和-uselayouteffect-和-componentdidmount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#useeffect-和-uselayouteffect-和-componentdidmount"}},[t._v("#")]),t._v(" useEffect 和 useLayoutEffect 和 componentDidMount")]),t._v(" "),s("p",[t._v("useEffect 在 commit 阶段的 layout 子阶段结束后异步调用（渲染后调用）"),s("br"),t._v("\ncomponentDidMount 和 useLayoutEffect：commit 的 layout 阶段同步调用（渲染前调用）")]),t._v(" "),s("h2",{attrs:{id:"_15vs16"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_15vs16"}},[t._v("#")]),t._v(" 15vs16")]),t._v(" "),s("h3",{attrs:{id:"更新过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新过程"}},[t._v("#")]),t._v(" 更新过程")]),t._v(" "),s("p",[t._v("15：同步不可中断")]),t._v(" "),s("ul",[s("li",[t._v("Reconciler（协调器）—— 负责找出变化的组件")]),t._v(" "),s("li",[t._v("Renderer（渲染器）—— 渲染更新。递归处理虚拟 DOM。")])]),t._v(" "),s("p",[t._v("16：异步可中断，优先级调度")]),t._v(" "),s("ul",[s("li",[t._v("Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入 Reconciler"),s("br"),t._v("\n模拟 requestIdleCallback。"),s("br"),t._v("\n不直接使用的原因：浏览器兼容性；触发频率不稳定（切换 tab）。")]),t._v(" "),s("li",[t._v("Reconciler（协调器）—— 负责找出变化的组件"),s("br"),t._v("\n调用 shouldYield，判断是否有剩余时间，用EffectTag标记有改变的节点")]),t._v(" "),s("li",[t._v("Renderer（渲染器）—— 渲染更新")])]),t._v(" "),s("h2",{attrs:{id:"fiber"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fiber"}},[t._v("#")]),t._v(" Fiber")]),t._v(" "),s("h3",{attrs:{id:"fiber-节点-动态工作单元"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fiber-节点-动态工作单元"}},[t._v("#")]),t._v(" fiber 节点——动态工作单元")]),t._v(" "),s("p",[t._v("ReactElement —— reconciler ——> fiber"),s("br"),t._v("\n14 中 fiber 类型，关系有三种：child，return，sibling")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" FunctionComponent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数组件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ClassComponent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 类组件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" IndeterminateComponent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化的时候不知道是函数组件还是类组件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HostRoot "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Root Fiber 可以理解为根元素 ， 通过reactDom.render()产生的根元素")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HostPortal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应  ReactDOM.createPortal 产生的 Portal")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HostComponent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dom 元素 比如 <div>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HostText "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文本节点")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Fragment "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应 <React.Fragment>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Mode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应 <React.StrictMode>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ContextConsumer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应 <Context.Consumer>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ContextProvider "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应 <Context.Provider>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ForwardRef "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应 React.ForwardRef")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Profiler "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应 <Profiler/ >")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" SuspenseComponent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应 <Suspense>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MemoComponent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应 React.memo 返回的组件")]),t._v("\n")])])]),s("h3",{attrs:{id:"fiber-架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fiber-架构"}},[t._v("#")]),t._v(" fiber 架构")]),t._v(" "),s("p",[t._v("fiber——纤程，理解为协程的一种实现，js 中协程的实现：generator"),s("br"),t._v("\n不使用 generator 的原因：")]),t._v(" "),s("ul",[s("li",[t._v("有传染性，当某个函数变为 generator 后，该函数调用链上的其他函数会有影响")]),t._v(" "),s("li",[t._v("无法实现优先级。Generator 执行的中间状态是上下文关联的。")])]),t._v(" "),s("p",[t._v("特点：更新可中断再继续，优先级调度")]),t._v(" "),s("p",[t._v("首次调用 ReactDOM.render——创建 FiberRootNode(整个应用的根节点)"),s("br"),t._v("\n             ↓ current Fiber 树(当前页面内容)"),s("br"),t._v("\n之后调用 ReactDOM.render——创建 RootFiber(当前应用的根节点)")]),t._v(" "),s("h3",{attrs:{id:"首屏渲染、更新区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#首屏渲染、更新区别"}},[t._v("#")]),t._v(" 首屏渲染、更新区别")]),t._v(" "),s("p",[s("code",[t._v("双缓存")]),t._v("：在内存中构建fiber节点树current fiber树和workinprogress fiber树，替换")]),t._v(" "),s("p",[t._v("首屏渲染与更新的区别，首屏渲染创建 fiber 树的过程没有 diff 算法"),s("br"),t._v("\n对于两棵树都存在的 fiber 节点用 alternate 属性连接"),s("br"),t._v("\n若 rootFiber 有 alternate 指向，则会基于该指向树创建 workInProgress Fiber 树。"),s("br"),t._v("\n将 alternate 指向的 current fiber 和当前返回的 jsx 结构做对比，生成 workInProgress Fiber 树的过程就是进行"),s("code",[t._v("diff算法")]),t._v("。"),s("br"),t._v("\nworkInProgress Fiber 树 commit 后成为 FiberRootNode 的 current 指向，即变成 current 树。")]),t._v(" "),s("h3",{attrs:{id:"强制重新渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强制重新渲染"}},[t._v("#")]),t._v(" 强制重新渲染")]),t._v(" "),s("ol",[s("li",[t._v("forceUpdate："),s("br"),t._v("\n如果组件调用 forceUpdate,则全局的 hasForceUpdate=true，组件更新前检查如果为 true，则跳过 PureComponent 的浅比较和 shouldComponentUpdate 自定义比较，直接更新")]),t._v(" "),s("li",[t._v("context 的更新")])]),t._v(" "),s("h3",{attrs:{id:"suspense"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#suspense"}},[t._v("#")]),t._v(" Suspense")]),t._v(" "),s("p",[t._v("Suspense 在执行内部可以通过 try{}catch{} 方式捕获异常，这个异常通常是一个 Promise ，可以在这个 Promise 中进行数据请求工作，Suspense 内部会处理这个 Promise ，Promise 结束后，Suspense 会再一次重新 render 把数据渲染出来，达到异步渲染的效果。")]),t._v(" "),s("h3",{attrs:{id:"dangerouslysetinnerhtml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dangerouslysetinnerhtml"}},[t._v("#")]),t._v(" dangerouslySetInnerHTML")]),t._v(" "),s("p",[t._v("dangerouslySetInnerHTML 是 React 为浏览器 DOM 提供 innerHTML 的替换方案。直接设置 HTML 存在风险(xss 攻击)。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div dangerouslySetInnerHTML"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("__html")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<a href=\"\">跳转</a>'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("内容不能包含 react 组件，如果包含，需要用 ReactDom.render 包裹渲染")]),t._v(" "),s("h3",{attrs:{id:"diff-算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#diff-算法"}},[t._v("#")]),t._v(" diff 算法")]),t._v(" "),s("p",[t._v("限制：")]),t._v(" "),s("ol",[s("li",[t._v("同级")]),t._v(" "),s("li",[t._v("同种元素")]),t._v(" "),s("li",[t._v("可通过设置key打破限制2")])]),t._v(" "),s("p",[t._v("diff分两种情况：")]),t._v(" "),s("ol",[s("li",[t._v("单一节点  判断key是否一致、判断是否为同种元素  --是--\x3e 根据currentfiber clone createFiber\n             ↓ 否"),s("br"),t._v("\n         标记删除dom,创建newfiber")]),t._v(" "),s("li",[t._v("多节点\n需要考虑是以下三种情况的哪种情况：")])]),t._v(" "),s("ul",[s("li",[t._v("节点属性变化")]),t._v(" "),s("li",[t._v("节点增删")]),t._v(" "),s("li",[t._v("节点位置移动"),s("br"),t._v("\n三种情况的处理逻辑不同，1情况更常见。"),s("br"),t._v("\n经历两轮遍历，首轮优先处理常见情况1，第二轮后其他情况。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 虚拟dom节点数据结构")]),t._v("\ntype flag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Placement"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Deletion"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Placement新增或移动，Deletion删除")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//node的唯一标识")]),t._v("\n  flag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标记操作类型")]),t._v("\n  index"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//该node在同级node中的索引位置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ntype NodeList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("before")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" NodeList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("after")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" NodeList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" NodeList "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("result")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("NodeList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 遍历前准备工作")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.需要存一份beforeNode,且以O(1)复杂度就能找到对应的node")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" beforeMap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Node"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  before"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("i")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    beforeMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.遍历after,对比before，after，都存在的node，可复用，将存在两种情况：移动、不移动，如何判断？")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("after"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 遍历逻辑")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("demo1:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新前")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" before "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新后")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" after "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("before"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" after"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n[\n  {key:'a',flag:\"Deletion\"},\n  {key:'d',flag:\"Placement\"}\n]\n*/")]),t._v("\n")])])]),s("p",[t._v("demo2:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新前")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" before "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新后")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" after "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("before"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" after"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 输出\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*\n[\n  {key: "b", flag: "Placement"},\n  {key: "a", flag: "Placement"}\n]\n\n由于b之前已经存在，{key: "b", flag: "Placement"}代表b对应DOM需要向后移动（对应parentNode.appendChild方法）。abc经过该操作后变为acb。\n\n由于a之前已经存在，{key: "a", flag: "Placement"}代表a对应DOM需要向后移动。acb经过该操作后变为cba。\n\n执行后的结果就是：页面中的abc变为cba。\n*/')]),t._v("\n")])])]),s("p",[t._v("未完...")]),t._v(" "),s("h2",{attrs:{id:"hooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[t._v("#")]),t._v(" Hooks")]),t._v(" "),s("h3",{attrs:{id:"代数效应"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代数效应"}},[t._v("#")]),t._v(" 代数效应")]),t._v(" "),s("p",[t._v("hooks 思想：将副作用从函数中分离，使函数功能纯粹。")]),t._v(" "),s("h3",{attrs:{id:"useeffect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#useeffect"}},[t._v("#")]),t._v(" useEffect")]),t._v(" "),s("p",[t._v("在 fiber 节点上维护了一个链表(memorizedState)，每个 hooks 都在对应的链表元素上存取数据，每个 hooks 有 mount 和 update 两个阶段。"),s("br"),t._v(" "),s("strong",[t._v("areHookInputsEqual")]),t._v("函数用来处理第二个参数：")]),t._v(" "),s("ul",[s("li",[t._v("当热更新的时候，就算依赖没有变，也需要重新执行 effect，这个是通过 ignorePreviousDependencies 变量来控制的。")]),t._v(" "),s("li",[t._v("deps 与上一个 deps 最对比，不一样则返回 false，触发更新，如果 prevDeps 是 null，直接返回 false，因此 useEffect 第二个参数传 undefined 或者 null 的话 effect 函数都会执行。")])]),t._v(" "),s("h3",{attrs:{id:"usecallback-和-usememo-区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usecallback-和-usememo-区别"}},[t._v("#")]),t._v(" useCallback 和 useMemo 区别")]),t._v(" "),s("p",[t._v("useCallback 缓存第一个参数；"),s("br"),t._v("\nuseMemo 执行第一个参数，缓存其结果。")]),t._v(" "),s("h2",{attrs:{id:"react-中的性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-中的性能优化"}},[t._v("#")]),t._v(" React 中的性能优化")]),t._v(" "),s("h3",{attrs:{id:"性能优化原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能优化原则"}},[t._v("#")]),t._v(" 性能优化原则：")]),t._v(" "),s("p",[t._v("当父组件满足性能优化条件(state 不变--\x3eprops 不变) eagerState 策略"),s("br"),t._v("\n子孙组件可能命中性能优化(子组件的 state&context 不变时命中) bailout 策略"),s("br"),t._v("\n三者都不变则不会重新渲染")]),t._v(" "),s("h4",{attrs:{id:"如何比较-props-是否改变"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何比较-props-是否改变"}},[t._v("#")]),t._v(" 如何比较 props 是否改变")]),t._v(" "),s("ul",[s("li",[t._v("全等比较 高效，但不易命中 （react 默认）O(1)")]),t._v(" "),s("li",[t._v("浅比较 遍历对象 key/value 不高效，但易命中 （memo）O(n)")])]),t._v(" "),s("p",[t._v("为什么父组件 states 变子组件 props 就一定改变?"),s("br"),t._v("\n因为子组件 props 永远是一个新的{}，{}!=={}"),s("br"),t._v("\n根组件的 props 永远不变。")]),t._v(" "),s("p",[t._v("react 重新渲染会重新构建整棵树，递归遍历每个节点，每次访问节点都会有两个回调："),s("br"),t._v("\n递：每次访问节点会调用 "),s("code",[t._v("beginWork")]),t._v("，处理 newProps 和 oldProps 的对比等"),s("br"),t._v("\n归：直至访问到没有子节点的组件，则向上回归，依次调用 "),s("code",[t._v("completeWork")])]),t._v(" "),s("h3",{attrs:{id:"不使用-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不使用-api"}},[t._v("#")]),t._v(" 不使用 api")]),t._v(" "),s("p",[t._v("把变的部分和不变的部分分离（props,state,context）")]),t._v(" "),s("ul",[s("li",[t._v("拆分为两个组件")]),t._v(" "),s("li",[t._v("不必重新渲染组件放在 children 里")])]),t._v(" "),s("h3",{attrs:{id:"相关-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关-api"}},[t._v("#")]),t._v(" 相关 api")]),t._v(" "),s("h4",{attrs:{id:"purecomponent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#purecomponent"}},[t._v("#")]),t._v(" PureComponent")]),t._v(" "),s("p",[t._v("浅比较 state 和 props 是否相等；\nshouldComponentUpdate 的权重，大于 PureComponent；\n更新阶段对 state 和 props 的比较，用了 "),s("em",[t._v("shallowEqual")]),t._v(" 函数：")]),t._v(" "),s("ol",[s("li",[t._v("判断新老 state/props 是否相等")]),t._v(" "),s("li",[t._v("新老 state/props 是否为非对象/null")]),t._v(" "),s("li",[t._v("新老 state/props 的 keys 长度是否相等")]),t._v(" "),s("li",[t._v("遍历老 state/props，对比对应新 state/props 的值是否相等")])]),t._v(" "),s("h4",{attrs:{id:"react-memo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-memo"}},[t._v("#")]),t._v(" React.memo")]),t._v(" "),s("p",[t._v("是一个高阶组件")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("memo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" compare"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// compare 返回true：缓存，false：更新")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// shouldComponentUpdate 返回true：更新，false：缓存")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// compare 不传->使用shallowEqual函数浅比较props")]),t._v("\n")])])]),s("h3",{attrs:{id:"渲染控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染控制"}},[t._v("#")]),t._v(" 渲染控制")]),t._v(" "),s("p",[s("img",{attrs:{src:a(349),alt:"RenderControl"}}),t._v("\n控制 render 的方法：")]),t._v(" "),s("ul",[s("li",[t._v("从父组件直接隔断子组件的渲染，经典的就是 memo，缓存 element 对象。")]),t._v(" "),s("li",[t._v("组件从自身来控制是否 render ，比如：PureComponent ，shouldComponentUpdate。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);