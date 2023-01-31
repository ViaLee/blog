(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{470:function(t,s,a){"use strict";a.r(s);var n=a(57),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[t._v("#")]),t._v(" webpack")]),t._v(" "),a("p",[t._v("本质是一个现代 js 应用程序静态模块打包器，当 webpack 处理应用程序时，会递归的创建一个依赖关系图，包含需要的每个模块，将所有模块打包成一个或多个 bundle。")]),t._v(" "),a("h2",{attrs:{id:"module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module"}},[t._v("#")]),t._v(" module")]),t._v(" "),a("p",[t._v("ESModule，commenJs，AMD，Assets"),a("br"),t._v(" "),a("code",[t._v("ES6 module")]),t._v(" 特点：")]),t._v(" "),a("ul",[a("li",[t._v("只能作为模块顶层的语句出现")]),t._v(" "),a("li",[t._v("import 的模块名只能是字符串常量")]),t._v(" "),a("li",[t._v("import binding 是 immutable 的")])]),t._v(" "),a("p",[a("strong",[t._v("引入方式")]),t._v("："),a("br"),t._v(" "),a("strong",[a("code",[t._v("ESModule")])]),t._v("：export，import"),a("br"),t._v(" "),a("strong",[a("code",[t._v("commenJs")])]),t._v("：module.exports，require")]),t._v(" "),a("h2",{attrs:{id:"chunk-和-bundle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chunk-和-bundle"}},[t._v("#")]),t._v(" chunk 和 bundle")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("chunk")])]),t._v(": 打包过程中 modules 的集合\n从入口模块开始，引入其他模块...通过引入关系逐个打包，这些 module 就形成了一个 chunk。"),a("br"),t._v("\n如果有多个入口，会产出多条打包路径，每条路径会形成一个 chunk。"),a("br"),t._v(" "),a("strong",[a("code",[t._v("bundle")])]),t._v("：最终输出的一个或多个打包好的文件"),a("br"),t._v(" "),a("strong",[t._v("chunk 和 bundle 的关系")]),t._v("："),a("br"),t._v("\n大多数情况 一个 chunk 会产生一个 bundle，但是有例外")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"production"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    index"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/index.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//入口文件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//index: ['./src/index.js','./src/add.js']   //多个入口，一个chunk")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n  entry:{  //多个chunk\n    index: './src/index.js'    \n    common:'./src/common.js'\n  },\n  */")]),t._v("\n  output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[name].js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出bundle的文件名")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  devtool"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"source-map"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出源代码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("h3",{attrs:{id:"path和publicpath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path和publicpath"}},[t._v("#")]),t._v(" path和publicPath")]),t._v(" "),a("p",[t._v("区别："),a("br"),t._v("\npath: 输出文件存放目录，必须是绝对路径（使用 Node.js 的 path 模块）"),a("br"),t._v("\npublicPath: 读取文件目录，url 相对于 HTML 页面。常用来设置资源请求前缀。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[name].bundle.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      publicPath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist/'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"plugin-和-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-和-loader"}},[t._v("#")]),t._v(" plugin 和 loader")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("loader")])]),t._v("：模块转换器。"),a("br"),t._v("\n将非 js 模块转化为 webpack 能识别的 js 模块，将 A.less 转换为 A.css。"),a("br"),t._v("\nwebpack 自身只支持 js 和 json 这两种格式的文件。"),a("br"),t._v("\nloader 的执行顺序和配置中的顺序是相反的，即最后一个 loader 最先执行，第一个 loader 最后执行。第一个执行的 loader 接收源文件内容作为参数，其它 loader 接收前一个执行的 loader 的返回值作为参数，最后执行的 loader 会返回此模块的 JavaScript 源码。"),a("br"),t._v(" "),a("strong",[t._v("本质")]),t._v("：将所有类型的文件转换为应用程序的依赖图可直接引用的模块。"),a("br"),t._v(" "),a("strong",[a("code",[t._v("plugin")])]),t._v(":拓展"),a("br"),t._v("\n针对 loader 结束后，基于事件机制工作，会监听 webpack 打包过程中的某些节点。\n在 webpack 运行的生命周期中会广播出许多事件，plugin 可以监听这些事件，在合适的时机通过 webpack 提供的 API 改变输出结果。"),a("br"),t._v(" "),a("strong",[a("code",[t._v("compliation")])]),t._v("：包含当前模块资源，编译生成资源，webpack 开发模式下运行时，当检测到任意一个文件变化，都会创建一次新的 compliation")]),t._v(" "),a("h2",{attrs:{id:"打包流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包流程"}},[t._v("#")]),t._v(" 打包流程")]),t._v(" "),a("ol",[a("li",[t._v("初始化参数：shell weback.config.js")]),t._v(" "),a("li",[t._v("开始编译：（启动 webpack）：初始化一个 compiler 对象，加载配置，开始执行编译"),a("br"),t._v("\ncompiler 对象:全局唯一，是 webpack 的实例，包含了 webpack 环境的所有配置信息")]),t._v(" "),a("li",[t._v("确定入口：根据 entry 中的配置，找出所有入口文件")]),t._v(" "),a("li",[t._v("编译模块：从入口文件开始，调用所有 loader，再递归找依赖")]),t._v(" "),a("li",[t._v("完成模块编译：得到每个模块被翻译后的最终内容以及他们之间的关系（依赖图）")]),t._v(" "),a("li",[t._v("输出资源：根据依赖关系组装成一个个包含多个 module 的 chunk")]),t._v(" "),a("li",[t._v("输出完成：根据配置，确定输出的文件名以及路径")])]),t._v(" "),a("h2",{attrs:{id:"split-chunks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#split-chunks"}},[t._v("#")]),t._v(" Split Chunks")]),t._v(" "),a("p",[t._v("优化配置")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n               index"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/index.js'")]),t._v("\n                other"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/multiply.js'")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\noutput"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nfilename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[name].js"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出bundle的文件名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  optimization"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//优化")]),t._v("\n    runtimeChunk"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'single'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将模块交互时连接所需的加载和解析逻辑提成一个chunk")]),t._v("\n    splitChunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      cacheGroups"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        commons"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 公共chunk，如果被至少minChunks个chunk 用到了，就单独提成一个chunk")]),t._v("\n          chunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'initial'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          minChunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          minSize"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 达到该大小才提成一个chunk")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        vendor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将第三方包 拆出一个chunk")]),t._v("\n          test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("node_modules")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//正则 匹配node_modules下的文件")]),t._v("\n          chunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'initial'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vendor'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          enforce"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"tree-shaking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking"}},[t._v("#")]),t._v(" Tree Shaking")]),t._v(" "),a("p",[t._v("用来移除 JavaScript 上下文中的未引用代码(dead-code)，是 DCE 的一种新实现，所有导入文件都会受到 tree shaking 的影响。"),a("br"),t._v("\n其消除原理依赖于 ES6 的模块特性，ES6 模块依赖关系是确定的，和运行时的状态无关，可以进行可靠的静态分析，这是 tree-shaking 的基础。")]),t._v(" "),a("h3",{attrs:{id:"dce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dce"}},[t._v("#")]),t._v(" DCE")]),t._v(" "),a("p",[t._v("Dead Code Elimination——消除死代码"),a("br"),t._v("\n传统编译型的语言中，都是由编译器将 Dead Code 从 AST（抽象语法树）中删除，js 需要压缩工具 uglify 做处理（webpack 自身集成 uglify）。"),a("br"),t._v("\nDead Code 一般具有以下几个特征："),a("br"),t._v("\n• 代码不会被执行\n• 代码执行的结果不会被用到"),a("br"),t._v("\n• 代码只会影响死变量（只写不读）")]),t._v(" "),a("h3",{attrs:{id:"如何配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何配置"}},[t._v("#")]),t._v(" 如何配置")]),t._v(" "),a("h4",{attrs:{id:"条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件"}},[t._v("#")]),t._v(" 条件")]),t._v(" "),a("ol",[a("li",[t._v("ES6，用支持 tree-shaking 的方式写代码")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全部导入 (不支持 tree-shaking)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" _ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lodash"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 具名导入(支持 tree-shaking)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" debounce "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lodash"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 直接导入具体的模块 (支持 tree-shaking)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" debounce "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lodash/lib/debounce"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("处于生产模式，只有在压缩代码的时候会 tree-shaking")])]),t._v(" "),a("h4",{attrs:{id:"配置-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-2"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("ol",[a("li",[t._v("标记未引用代码 —— usedExports"),a("br"),t._v("\n配置"),a("code",[t._v("optimization")]),t._v("选项的"),a("code",[t._v("usedExports: true")]),t._v("\n打包结果 js 中未引用的代码会被 unused...注释，\nusedExports 依赖于 terser 去检测语句中的副作用。我们可以通过 "),a("code",[t._v("/*#__PURE__*/")]),t._v("注释来帮忙 terser 标记为没有副作用。如果一个没被使用的变量定义的初始值被认为是无副作用的（pure），它会被标记为死代码，不会被执行且会被压缩工具清除掉(当 "),a("code",[t._v("optimization.innerGraph")]),t._v(" 被设置成 true 时生效)。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Base Webpack Config for Tree Shaking")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n optimization"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  usedExports"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  minimizer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 支持删除死代码的压缩器，识别出 Webpack 是如何标记它认为没有被使用的代码，并将其剥离。")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TerserPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打包结果")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 1 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/***/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __webpack_exports__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __webpack_require__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"use strict"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* unused harmony export square */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* harmony export (immutable) */")]),t._v(" __webpack_exports__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("square")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cube")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("标记 side-effect-free 文件 —— sideEffects"),a("br"),t._v('\n通过 package.json 的 "sideEffects" 属性，声明该包模块是否包含 sideEffects(副作用)，如果被标记为无副作用的模块没有被直接导出使用，打包工具会跳过进行模块的副作用分析评估。')])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your-project"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sideEffects"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果所有代码都不包含副作用，我们就可以简单地将该属性标记为 false，来告知 webpack 它可以安全地删除未用到的 export。")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sideEffects"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/some-side-effectful-file.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*.css"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v('"side effect(副作用)"是，在导入时会执行特殊行为的代码，而不是仅仅暴露一个 export 或多个 export。举例说明，例如 polyfill，它影响全局作用域，并且通常不提供 export。')])]),t._v(" "),a("blockquote",[a("p",[t._v("参考："),a("br"),t._v(" "),a("a",{attrs:{href:"https://juejin.cn/post/6844903998634328072",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack 4 Tree Shaking 终极优化指南"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://webpack.docschina.org/guides/tree-shaking/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tree Shaking"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);