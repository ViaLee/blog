## 基础

#### script 标签

六属性：async(异步脚本) charset defer(延迟脚本) language src type(MIME 类型)  
defer:这个布尔属性被设定用来通知浏览器该脚本将在文档完成解析后，触发 DOMContentLoaded (en-US) 事件前执行。有 defer 属性的脚本会阻止 DOMContentLoaded 事件，直到脚本被加载并且解析完成。

#### 作用域扩展

使用 with 语句 或 try catch

## ES6+

### 箭头函数

```js
const fn = () => {};
fn.__proto__ === Function.prototype; //true
fn.prototype === undefined; //true，因此不能作为构造函数
```

箭头函数不会创建自己的 this，它只会从自己的作用域链的上一层继承 this；通过 call() 或 apply() 方法调用一个函数时，只能传递参数（不能绑定 this），他们的第一个参数会被忽略。

### 可选链

?. 短路返回值是 undefined

```js
obj?.prop;
obj?.[expr];
arr?.[index];
func?.(args);
```

### ||和??

?? 前面是 null、undefined 取后面的

|| 前面值转成布尔类型是 false 取后面的

### for … of

遍历可迭代对象的值（Array，Map，Set，String，TypedArray，arguments，dom 集合，[生成器](#生成器)等），可以由 break，throw，continue 或 return 终止

可迭代对象：该对象（或者它原型链上的某个对象）必须有一个键为 @@iterator 的属性(@@表示 Symbol)，可通过常量 Symbol.iterator 访问该属性

```js
const str = "str";
str[Symbol.iterator](); // 返回Iterator 对象
const obj = {};
console.log(obj[Symbol.iterator]); //undefined
```

### for … in

遍历对象的所有除 Symbol 以外的可枚举属性的 key，包括继承的可枚举属性

```js
// 仅遍历自有属性
const obj = {};
for (var prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}
```

### Promise

```js
Promise.reject("error")
  .then(
    () => {
      console.log("success1");
    },
    () => {
      console.log("error1");
    }
  )
  .then(
    () => {
      console.log("success2");
    },
    () => {
      console.log("error2");
    }
  );

// 结果：
// error1
// success2

Promise.reject("error")
  .then(() => {
    console.log("success1");
  })
  .catch((err) => {
    console.log(err);
  })
  .then(
    () => {
      console.log("success2");
    },
    () => {
      console.log("error2");
    }
  );

// 结果：
// error
// success2
```

## 数据处理

数组去除空值

```js
const arr = [1, 2, 0, undefined, 11, "12", null];

console.log(arr.filter((i) => i)); //  [1, 2, 11, '12']
```

对象数组根据某一属性去重  
```js
let amap = new Map();
data = data.filter((a) => !amap.has(a.value) && amap.set(a.value, 1));
```
