# 2023

## 04/19 egg 混合 react 页面项目

老项目采用 egg、jquery 开发、部分页面采用 react 重构、目前方案是将新页面放在一个 react 项目内打包放在老项目里，路由直接读取打包后的产物，问题：

1. 统一导航栏，新老页面都是用 react 中的导航栏  
    将导航栏单独打包输出，在老页面读取产物

   ```js
   //webpack 配置
   webpackConfig.entry = {
     header: path.resolve(__dirname, "./src/header.tsx"),
   };
   plugins: [
     new htmlWebpackPlugin({
       filename: "header.html",
       chunks: ["header"],
       template: path.resolve(__dirname, "./public/header.html"),
     }),
   ];
   ```

2. 需要区分环境读取对应的 build 包，全局变量\_system_env 通过中间件统一传入

   ```ejs
   <%- include('../../public/build-'+_system_env+'/header.html') -%>
   ```
  
3. antd全局样式污染问题  
  没有发现好的解决办法、暂时通过覆盖解决

## 04/20 协助 App 解决问题

### 内嵌 H5 页面获取 app 的 token，首次未获取到

安卓环境，清除缓存后重新登录 App，进入 h5 页面，未获取到 token，第二次进入 h5 页面正常。

- h5 页面 PC、H5、App 共用，需要区分当前环境
- token 有三种情况、H5 自身登录、PC 跳转 URL 带入、App 登录获取
- 区分是否首次从 App 进入，决定是否要获取 App token

### app 内退出登录需要跳转到 App 登录页

- 区分环境
- 跳转 URL Schema
