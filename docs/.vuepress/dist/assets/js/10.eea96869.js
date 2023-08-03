(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{351:function(t,e,s){t.exports=s.p+"assets/img/lifeCycle.cac7e5e5.png"},352:function(t,e,s){t.exports=s.p+"assets/img/renderControl.09225c1d.png"},379:function(t,e,s){"use strict";s.r(e);var a=s(17),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"react"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react"}},[t._v("#")]),t._v(" React")]),t._v(" "),e("h2",{attrs:{id:"jsx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsx"}},[t._v("#")]),t._v(" Jsx")]),t._v(" "),e("p",[t._v("经过 babel 编译--\x3eReact.createElement(react 17 不需要显式导入 react)交由 React 处理、渲染。"),e("br"),t._v("\nReact DOM 在渲染所有输入内容之前，默认会进行转义，这样可以有效地防止 XSS（cross-site-scripting, 跨站脚本）攻击。"),e("br"),t._v("\n可通过@babel/plugin-transform-react-jsx (opens new window)插件显式告诉 Babel 编译时需要将 JSX 编译为什么函数的调用（默认为 React.createElement）。")]),t._v(" "),e("h3",{attrs:{id:"react-createelement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-createelement"}},[t._v("#")]),t._v(" React.createElement")]),t._v(" "),e("p",[t._v("createElement 方法会创建并返回一个对象，存放组件的信息，其$$typeof 为'REACT_ELEMENT_TYPE'，react.element 类型"),e("br"),t._v("\nReact.isValidElement()检测是否为合法组件")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("isValidElement")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("object")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" object "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n    object "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n    object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$$"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REACT_ELEMENT_TYPE")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),t._v(" "),e("h2",{attrs:{id:"children-相关-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#children-相关-api"}},[t._v("#")]),t._v(" Children 相关 API")]),t._v(" "),e("p",[t._v("React.isValidElement(item) 判断是否 react element\nReact.Children.only 子节点是否单一\nReact.Children.forEach 遍历子节点\nReact.Children.forEach = React.Children.toArray + Array.prototype.forEach")]),t._v(" "),e("blockquote",[e("p",[t._v("通常与 React.cloneElement()一起使用操作 children,注入新的属性")])]),t._v(" "),e("h2",{attrs:{id:"生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),e("p",[e("img",{attrs:{src:s(351),alt:"LifeCycle"}}),t._v("\n错误处理："),e("br"),t._v("\nstatic getDerivedStateFromError(error) render 阶段，不可有副作用"),e("br"),t._v("\ncomponentDidCatch() commit 阶段，可有副作用"),e("br"),t._v("\ncomponentDidUpdate 与 useEffect 无依赖类似，每一次执行函数组件都会执行")]),t._v(" "),e("h3",{attrs:{id:"useeffect-和-uselayouteffect-和-componentdidmount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#useeffect-和-uselayouteffect-和-componentdidmount"}},[t._v("#")]),t._v(" useEffect 和 useLayoutEffect 和 componentDidMount")]),t._v(" "),e("p",[t._v("useEffect 在 commit 阶段的 layout 子阶段结束后异步调用（渲染后调用）"),e("br"),t._v("\ncomponentDidMount 和 useLayoutEffect：commit 的 layout 阶段同步调用（渲染前调用）")]),t._v(" "),e("h2",{attrs:{id:"_15vs16"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_15vs16"}},[t._v("#")]),t._v(" 15vs16")]),t._v(" "),e("h3",{attrs:{id:"更新过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新过程"}},[t._v("#")]),t._v(" 更新过程")]),t._v(" "),e("p",[t._v("15：同步不可中断")]),t._v(" "),e("ul",[e("li",[t._v("Reconciler（协调器）—— 负责找出变化的组件")]),t._v(" "),e("li",[t._v("Renderer（渲染器）—— 渲染更新。递归处理虚拟 DOM。")])]),t._v(" "),e("p",[t._v("16：异步可中断，优先级调度")]),t._v(" "),e("ul",[e("li",[t._v("Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入 Reconciler"),e("br"),t._v("\n模拟 requestIdleCallback。"),e("br"),t._v("\n不直接使用的原因：浏览器兼容性；触发频率不稳定（切换 tab）。")]),t._v(" "),e("li",[t._v("Reconciler（协调器）—— 负责找出变化的组件"),e("br"),t._v("\n调用 shouldYield，判断是否有剩余时间，用 EffectTag 标记有改变的节点")]),t._v(" "),e("li",[t._v("Renderer（渲染器）—— 渲染更新")])]),t._v(" "),e("h2",{attrs:{id:"fiber"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fiber"}},[t._v("#")]),t._v(" Fiber")]),t._v(" "),e("h3",{attrs:{id:"fiber-节点-动态工作单元"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fiber-节点-动态工作单元"}},[t._v("#")]),t._v(" fiber 节点——动态工作单元")]),t._v(" "),e("p",[t._v("ReactElement —— reconciler ——> fiber"),e("br"),t._v("\n14 中 fiber 类型，关系有三种：child，return，sibling")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" FunctionComponent "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数组件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ClassComponent "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 类组件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" IndeterminateComponent "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化的时候不知道是函数组件还是类组件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HostRoot "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Root Fiber 可以理解为根元素 ， 通过reactDom.render()产生的根元素")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HostPortal "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应  ReactDOM.createPortal 产生的 Portal")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HostComponent "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dom 元素 比如 <div>")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HostText "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文本节点")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Fragment "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应 <React.Fragment>")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Mode "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应 <React.StrictMode>")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ContextConsumer "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应 <Context.Consumer>")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ContextProvider "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应 <Context.Provider>")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ForwardRef "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应 React.ForwardRef")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Profiler "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应 <Profiler/ >")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" SuspenseComponent "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应 <Suspense>")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MemoComponent "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应 React.memo 返回的组件")]),t._v("\n")])])]),e("h3",{attrs:{id:"fiber-架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fiber-架构"}},[t._v("#")]),t._v(" fiber 架构")]),t._v(" "),e("p",[t._v("fiber——纤程，理解为协程的一种实现，js 中协程的实现：generator"),e("br"),t._v("\n不使用 generator 的原因：")]),t._v(" "),e("ul",[e("li",[t._v("有传染性，当某个函数变为 generator 后，该函数调用链上的其他函数会有影响")]),t._v(" "),e("li",[t._v("无法实现优先级。Generator 执行的中间状态是上下文关联的。")])]),t._v(" "),e("p",[t._v("特点：更新可中断再继续，优先级调度")]),t._v(" "),e("p",[t._v("首次调用 ReactDOM.render——创建 FiberRootNode(整个应用的根节点)"),e("br"),t._v("\n             ↓ current Fiber 树(当前页面内容)"),e("br"),t._v("\n之后调用 ReactDOM.render——创建 RootFiber(当前应用的根节点)")]),t._v(" "),e("h3",{attrs:{id:"首屏渲染、更新区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#首屏渲染、更新区别"}},[t._v("#")]),t._v(" 首屏渲染、更新区别")]),t._v(" "),e("p",[e("code",[t._v("双缓存")]),t._v("：在内存中构建 fiber 节点树 current fiber 树和 workinprogress fiber 树，替换")]),t._v(" "),e("p",[t._v("首屏渲染与更新的区别，首屏渲染创建 fiber 树的过程没有 diff 算法"),e("br"),t._v("\n对于两棵树都存在的 fiber 节点用 alternate 属性连接"),e("br"),t._v("\n若 rootFiber 有 alternate 指向，则会基于该指向树创建 workInProgress Fiber 树。"),e("br"),t._v("\n将 alternate 指向的 current fiber 和当前返回的 jsx 结构做对比，生成 workInProgress Fiber 树的过程就是进行"),e("code",[t._v("diff算法")]),t._v("。"),e("br"),t._v("\nworkInProgress Fiber 树 commit 后成为 FiberRootNode 的 current 指向，即变成 current 树。")]),t._v(" "),e("h3",{attrs:{id:"强制重新渲染"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强制重新渲染"}},[t._v("#")]),t._v(" 强制重新渲染")]),t._v(" "),e("ol",[e("li",[t._v("forceUpdate："),e("br"),t._v("\n如果组件调用 forceUpdate,则全局的 hasForceUpdate=true，组件更新前检查如果为 true，则跳过 PureComponent 的浅比较和 shouldComponentUpdate 自定义比较，直接更新")]),t._v(" "),e("li",[t._v("context 的更新")])]),t._v(" "),e("h3",{attrs:{id:"suspense"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#suspense"}},[t._v("#")]),t._v(" Suspense")]),t._v(" "),e("p",[t._v("Suspense 在执行内部可以通过 try{}catch{} 方式捕获异常，这个异常通常是一个 Promise ，可以在这个 Promise 中进行数据请求工作，Suspense 内部会处理这个 Promise ，Promise 结束后，Suspense 会再一次重新 render 把数据渲染出来，达到异步渲染的效果。")]),t._v(" "),e("h3",{attrs:{id:"dangerouslysetinnerhtml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dangerouslysetinnerhtml"}},[t._v("#")]),t._v(" dangerouslySetInnerHTML")]),t._v(" "),e("p",[t._v("dangerouslySetInnerHTML 是 React 为浏览器 DOM 提供 innerHTML 的替换方案。直接设置 HTML 存在风险(xss 攻击)。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div dangerouslySetInnerHTML"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("__html")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<a href=\"\">跳转</a>'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("p",[t._v("内容不能包含 react 组件，如果包含，需要用 ReactDom.render 包裹渲染")]),t._v(" "),e("h2",{attrs:{id:"hooks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[t._v("#")]),t._v(" Hooks")]),t._v(" "),e("h3",{attrs:{id:"代数效应"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代数效应"}},[t._v("#")]),t._v(" 代数效应")]),t._v(" "),e("p",[t._v("hooks 思想：将副作用从函数中分离，使函数功能纯粹。")]),t._v(" "),e("h3",{attrs:{id:"useeffect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#useeffect"}},[t._v("#")]),t._v(" useEffect")]),t._v(" "),e("p",[t._v("在 fiber 节点上维护了一个链表(memorizedState)，每个 hooks 都在对应的链表元素上存取数据，每个 hooks 有 mount 和 update 两个阶段。"),e("br"),t._v(" "),e("strong",[t._v("areHookInputsEqual")]),t._v("函数用来处理第二个参数：")]),t._v(" "),e("ul",[e("li",[t._v("当热更新的时候，就算依赖没有变，也需要重新执行 effect，这个是通过 ignorePreviousDependencies 变量来控制的。")]),t._v(" "),e("li",[t._v("deps 与上一个 deps 最对比，不一样则返回 false，触发更新，如果 prevDeps 是 null，直接返回 false，因此 useEffect 第二个参数传 undefined 或者 null 的话 effect 函数都会执行。")])]),t._v(" "),e("h3",{attrs:{id:"usecallback-和-usememo-区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usecallback-和-usememo-区别"}},[t._v("#")]),t._v(" useCallback 和 useMemo 区别")]),t._v(" "),e("p",[t._v("useCallback 缓存第一个参数；"),e("br"),t._v("\nuseMemo 执行第一个参数，缓存其结果。")]),t._v(" "),e("h2",{attrs:{id:"react-中的性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-中的性能优化"}},[t._v("#")]),t._v(" React 中的性能优化")]),t._v(" "),e("h3",{attrs:{id:"性能优化原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能优化原则"}},[t._v("#")]),t._v(" 性能优化原则：")]),t._v(" "),e("p",[t._v("当父组件满足性能优化条件(state 不变--\x3eprops 不变) eagerState 策略"),e("br"),t._v("\n子孙组件可能命中性能优化(子组件的 state&context 不变时命中) bailout 策略"),e("br"),t._v("\n三者都不变则不会重新渲染")]),t._v(" "),e("h4",{attrs:{id:"如何比较-props-是否改变"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何比较-props-是否改变"}},[t._v("#")]),t._v(" 如何比较 props 是否改变")]),t._v(" "),e("ul",[e("li",[t._v("全等比较 高效，但不易命中 （react 默认）O(1)")]),t._v(" "),e("li",[t._v("浅比较 遍历对象 key/value 不高效，但易命中 （memo）O(n)")])]),t._v(" "),e("p",[t._v("为什么父组件 states 变子组件 props 就一定改变?"),e("br"),t._v("\n因为子组件 props 永远是一个新的{}，{}!=={}"),e("br"),t._v("\n根组件的 props 永远不变。")]),t._v(" "),e("p",[t._v("react 重新渲染会重新构建整棵树，递归遍历每个节点，每次访问节点都会有两个回调："),e("br"),t._v("\n递：每次访问节点会调用 "),e("code",[t._v("beginWork")]),t._v("，处理 newProps 和 oldProps 的对比等"),e("br"),t._v("\n归：直至访问到没有子节点的组件，则向上回归，依次调用 "),e("code",[t._v("completeWork")])]),t._v(" "),e("h3",{attrs:{id:"不使用-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不使用-api"}},[t._v("#")]),t._v(" 不使用 api")]),t._v(" "),e("p",[t._v("把变的部分和不变的部分分离（props,state,context）")]),t._v(" "),e("ul",[e("li",[t._v("拆分为两个组件")]),t._v(" "),e("li",[t._v("不必重新渲染组件放在 children 里")])]),t._v(" "),e("h3",{attrs:{id:"相关-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关-api"}},[t._v("#")]),t._v(" 相关 api")]),t._v(" "),e("h4",{attrs:{id:"purecomponent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#purecomponent"}},[t._v("#")]),t._v(" PureComponent")]),t._v(" "),e("p",[t._v("浅比较 state 和 props 是否相等；\nshouldComponentUpdate 的权重，大于 PureComponent；\n更新阶段对 state 和 props 的比较，用了 "),e("em",[t._v("shallowEqual")]),t._v(" 函数：")]),t._v(" "),e("ol",[e("li",[t._v("判断新老 state/props 是否相等")]),t._v(" "),e("li",[t._v("新老 state/props 是否为非对象/null")]),t._v(" "),e("li",[t._v("新老 state/props 的 keys 长度是否相等")]),t._v(" "),e("li",[t._v("遍历老 state/props，对比对应新 state/props 的值是否相等")])]),t._v(" "),e("h4",{attrs:{id:"react-memo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-memo"}},[t._v("#")]),t._v(" React.memo")]),t._v(" "),e("p",[t._v("是一个高阶组件")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("React"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("memo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Component"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" compare"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// compare 返回true：缓存，false：更新")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// shouldComponentUpdate 返回true：更新，false：缓存")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// compare 不传->使用shallowEqual函数浅比较props")]),t._v("\n")])])]),e("h3",{attrs:{id:"渲染控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#渲染控制"}},[t._v("#")]),t._v(" 渲染控制")]),t._v(" "),e("p",[e("img",{attrs:{src:s(352),alt:"RenderControl"}}),t._v("\n控制 render 的方法：")]),t._v(" "),e("ul",[e("li",[t._v("从父组件直接隔断子组件的渲染，经典的就是 memo，缓存 element 对象。")]),t._v(" "),e("li",[t._v("组件从自身来控制是否 render ，比如：PureComponent ，shouldComponentUpdate。")])])])}),[],!1,null,null,null);e.default=r.exports}}]);