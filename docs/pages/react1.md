# React

## 完整流程

触发更新（ReactDom.render,classcomponent,fncomponent）
&emsp;&emsp;|  
&emsp;&emsp;|  
&emsp;&emsp;↓  
调度  
&emsp;&emsp;|  
&emsp;&emsp;|  
&emsp;&emsp;↓  
render 阶段  
&emsp;&emsp;|  
&emsp;&emsp;|  
&emsp;&emsp;↓  
commit 阶段

## 时间切片

### requestIdleCallback

```js
const callback=(deadline)=>{
  console.log(deadline.didTimeout) //是否在超时前已完成
  console.log(deadline.timeRemaining()) //本次空闲周期内剩余时间
}
var handle = window.requestIdleCallback(callback[, options])
// Window.cancelIdleCallback(handle) 取消
```

- requestIdleCallback 每秒只会被执行 20 次，一个空闲周期最长 50ms
- 低优先级的任务适用

### requestFrameAnimation

```js
Window.requestAnimationFrame(() => {
  // dom操作
});
```

### react v16 rAF + postMessage

> window.postMessage() 方法可以安全地实现跨源通信。

## render 阶段

### diff

- 单一节点 diff
- 多节点 diff

对比更新前后的 nodeList,为 node 标记 flag,需要考虑是以下三种情况的哪种情况：

1. 节点增删
2. 节点属性变化
3. 节点位置移动

三种情况的处理逻辑不同，情况 1&2 属于常见情况，3 不常见。  
经历多轮遍历，优先处理常见情况，后处理不常见情况。

```js
// 虚拟dom节点数据结构
type flag = "Placement" | "Deletion"; //Placement新增或移动，Deletion删除
interface Node {
  key: string; //node的唯一标识
  flag?: Flag; // 标记操作类型
  index?: number; //该node在同级node中的索引位置
}

type NodeList = Node[];
function diff(before: NodeList, after: NodeList): NodeList {
  const result:NodeList = [];
  // 遍历前准备工作
  // 1.需要存一份beforeNode,且以O(1)复杂度就能找到对应的node
  const beforeMap = new Map<string,Node>();
  before.forEach((node,i)=>{
    node.index=i;
    beforeMap.set(node.key,node));
  });
    // 2.遍历after,对比before，after，都存在的node，可复用，将存在两种情况：移动、不移动，如何判断？
  for(let i=0;i<after.length;i++>){
    // 遍历逻辑
  }

  return result;
}
```

demo1:

```js
// 更新前
const before = [{ key: "a" }];

// 更新后
const after = [{ key: "d" }];

console.log(diff(before, after));
/*
[
  {key:'a',flag:"Deletion"},
  {key:'d',flag:"Placement"}
]
*/
```

demo2:

```js
// 更新前
const before = [
  {key: 'a'},
  {key: 'b'},
  {key: 'c'},
]
// 更新后
const after = [
  {key: 'c'},
  {key: 'b'},
  {key: 'a'}
]

diff(before, after) 输出
/*
[
  {key: "b", flag: "Placement"},
  {key: "a", flag: "Placement"}
]

由于b之前已经存在，{key: "b", flag: "Placement"}代表b对应DOM需要向后移动（对应parentNode.appendChild方法）。abc经过该操作后变为acb。

由于a之前已经存在，{key: "a", flag: "Placement"}代表a对应DOM需要向后移动。acb经过该操作后变为cba。

执行后的结果就是：页面中的abc变为cba。
*/
```

### update 计算

### 优先级调度

## commit 阶段
