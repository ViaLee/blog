## 依赖

devDependencies：开发时所依赖的工具包，是用于开发环境的依赖项；  
dependencies：项目正常运行时需要的依赖包，是用于生产环境的依赖项。  
npm install A：A 组件依赖的 devDependencies 不会被下载，只会下载 A 组件的 dependencies

### install 命令

```
# 安装模块到项目目录下
npm install moduleName

#-g 的意思是将模块安装到全局
npm install moduleName -g

#-save 的意思是将模块安装到项目目录下，并在package.json文件的dependencies节点写入依赖。
npm install moduleName -save

#--save-dev 的意思是将模块安装到项目目录下，并在package.json文件的devDependencies节点写入依赖。
npm install moduleName --save-dev
```
