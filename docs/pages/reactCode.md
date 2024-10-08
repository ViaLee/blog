# React

设计理念：快速响应  
制约因素：CPU、IO  
节流防抖：限制触发更新频率  
React 通过异步可中断更新解决 CPU 瓶颈；  
将人机交互的成果融入 UI 交互，使异步无感知。

## react 启动模式

- legacy 模式：` ReactDOM.render(<App />, rootNode)`。这是当前 React app 使用的方式。当前没有计划删除本模式，但是这个模式可能不支持这些新功能。
- blocking 模式： `ReactDOM.createBlockingRoot(rootNode).render(<App />)`。目前正在实验中。作为迁移到 concurrent 模式的第一个步骤。
- concurrent 模式： `ReactDOM.createRoot(rootNode).render(<App />)`。目前在实验中，未来稳定之后，打算作为 React 的默认开发模式。这个模式开启了所有的新功能。

## 完整流程

### 更新流程

触发更新的方法：ReactDOM.render,setState,forceUpdate,useState,useReducer  
每次触发更新会创建一个 Update，存储更新相关。保存在 pending（环状链表）中

dispatchAction 触发更新

- (调度)`scheduleUpdateOnFiber` 调度 Update
- `markUpdateLaneFromFiberToRoot` 从触发更新的 fiber 向上遍历到 rootFiber 触发深度优先遍历
- 调度 rootFiber，`ensureRootIsScheduled`，标记过期未执行的类，判断当前任务优先级，获取当前优先级最高的类
- 调度 `performConcurrentWorkOnRoot` 或 `performSyncWorkOnRoot` 进入 render 阶段

render 阶段入口 performConcurrentWorkOnRoot

commit 阶段入口 commitRoot

### Update 计算

低于本次更新优先级的 state 不参与计算，计算完之后以新 state 为 initialstate 恢复上次计算

```js
Update:{ //对象（两种 FC,CC） 保存在 fiber.updateQueue 中
  eventTime,
  lane,
  suspenseConfig,
  tag, //更新类型
  payload, //新数据
  callback, //更新回调
  next
}

UpdateQueue:{
  baseState,
  firstBaseUpdate,lastBaseUpdate, //已存在的 update 链表，头尾，如上次被打断的 update
  shared.pending, //本次更新产生的 Update 环状链表，在 render 阶段会被剪开，连接到 lastBaseUpdate 后
  effects:[] callback
}
```

遍历 `updateQueue.baseUpdate` 链表，以 `updateQueue.baseState` 为初始 state，依次计算产生新的 state（memoizedState）

**被打断的低优先级 update 如何不丢失?**  
render 阶段：  
 被剪开的环状链表 `shared.pending` 会同时保存在 `workInProgress`和 `current` 的 `updateQueue.lastBaseUpdate` 后  
 被中断后重新开始时，会基于 `current` 的 `updateQueue.lastBaseUpdate` 克隆出 `workInProgress` 的 `updateQueue`.`lastBaseUpdate`
commit 阶段：  
 渲染完成，workInProgress 变成 current，也不会丢失

**高优先级 update 优先计算出 state 同时如何保持依赖连续性？**  
 被跳过的低优先级 update 以及后面的所有 update 会作为下一次计算的 baseUpdate，因此不会丢失

### 优先级调度

NoPriority 0 初始化
ImmediatePriority 1 同步，最高
UserBlockingPriority 2 用户交互 点击事件
NormalPriority 3 ajax
LowPrority 4 suspense
IdlePriority 5

## hooks 闭包缺陷

与 classComponents 不同，不是用`this.`获取 state 的值，而是直接获取，这样在类似 setTimeout 的函数中读取的值不是最新值。  
 functionComponents 中使用 hooks 存储、更新状态，内部也是通过闭包获取状态值，每次更新都会生成一个新的闭包。  
 闭包缺陷分为两种：

- useState 的 setState 可能取不到最新值
  避免方法：使用回调方式更新值
- useEffect 中在 setTimeout 中读取 state，取不到最新值
  避免方法：：添加依赖，每次渲染都更新读取的这个 state

## setState 同步异步

### reactV15

- 根据 `excutionContext` 有值(Y 异 N 同)，在一个上下文中同时触发多次更新，这些更新会合并成一次更新
- 根据 `isBatchingUpdates` true(Y 异 N 同)

同步更新/不合并：原生事件、异步代码
异步更新/合并：React 合成事件、生命周期钩子、在原生事件和异步代码中使用`ReactDOM.unstable_batchedUpdates`

### reactV16.8

## 时间切片

FPS(frame per second) 每秒显示帧数  
浏览器一帧干了些啥  
![fps](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/13528958b6804c16a1dafb613d24b8a9~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

### requestFrameAnimation

#### 基本用法

```js
let fn = () => {};
let count = 0;
function animation() {
  if (count > 200) return;

  dom.style.marginLeft = `${count}px`;
  count++;
}
Window.requestAnimationFrame(fn);
Window.cancelAnimationFrame(fn);
```

> 每一帧只会调用一次 rAF

#### 兼容性

理论上不能使用 setTimeout 兜底：  
当执行完 setTimeout 回调后，浏览器发现还有时间，于是又执行了几次 setTimeout 回调，最后再一起渲染，所以在原本一帧的时间内执行了多次 setTimeout 回调，动画自然就会快很多。且 setTimeout 有最低 4ms 延时。

### requestIdleCallback

```js
const callback=(deadline)=>{
  console.log(deadline.didTimeout) //是否在超时前已完成
  console.log(deadline.timeRemaining()) //本次空闲周期内剩余时间
}
var handle = window.requestIdleCallback(callback[, options])
Window.cancelIdleCallback(handle)  //取消
```

- requestIdleCallback 每秒只会被执行 20 次，一个空闲周期最长 50ms
- 低优先级的任务适用

### web 通信

都属于宏任务

1. 跨文档通信 PostMessage，方法可以安全地实现跨源通信。
2. 通道通信 MessageChannel

```js
var channel = new MessageChannel();
channel.port1.onmessage = (e) => {
  console.log(e.data);
};
channel.port2.postMessage("Hello World");
```

### react v16.0.0 rAF + postMessage

1. 获取当前帧最晚结束时间（当前执行时间 + 33ms）
2. postmessage 推入一个任务（完成其他任务之后）  
   &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;↓
3. 执行 messageListenr 回调, 获取当前帧剩余时间
4. 将剩余时间传入到 rAF 的 callback 函数中

> requestAnimationFrame() 会被暂停调用以提升性能和电池寿命，会影响 react 执行。

### react v16.2.0+ MessageChannel

flushWork 返回是否还有未完成的任务，如果有则会进行下一次 PostMessage，让出线程，告诉浏览器执行完高优任务后继续执行，进入下一个切片

```js
function flushWork(hasTimeRemaining, initialTime) {
  return workLoop(hasTimeRemaining, initialTime);
}

var currentTask;

function workLoop(hasTimeRemaining, initialTime) {
  currentTask = taskQueue[0];
  // 1.从任务队列第一个开始遍历执行
  while (currentTask != null) {
    // 2.已无剩余时间或主动交还执行权则跳出遍历
    if (
      currentTask.expirationTime > initialTime &&
      (!hasTimeRemaining || shouldYieldToHost())
    ) {
      break;
    }
    // 3.执行回调、从任务队列移除该任务
    const callback = currentTask.callback;
    callback();

    taskQueue.shift();

    currentTask = taskQueue[0];
  }
  // 4. 返回是否还有未完成的任务
  if (currentTask !== null) {
    return true;
  } else {
    return false;
  }
}

// 默认的时间切片
const frameInterval = 5;
// 5. 如果当前时间 - 开始时间，即执行时间，大于时间切片预设时间则主动中断
function shouldYieldToHost() {
  const timeElapsed = getCurrentTime() - startTime;
  if (timeElapsed < frameInterval) {
    return false;
  }

  return true;
}
```

## render 阶段

采用深度优先遍历，递归的方式遍历  
递阶段：
遍历每个节点的 fiber 调用 beginWork 方法
mount:

- 根据 fiber.tag 创建当前 fiber 节点的第一个子 fiber 节点
- 标记 effectTag

update:

- 满足一定条件时克隆 current.child 作为 workInProgress.child
- diff
- 创建 fiber 初始化 dom 属性

**当遍历到叶子节点时就会进入到归阶段**
归阶段：completeWork

### diff

本质：对比 current fiber 和 jsx 对象，生成 workInProgress Fiber。源码中的入口函数为 reconcileChildFibers

限制：

1. 同级
2. 同种元素
3. 可通过设置 key 打破限制 2

判断当前 newChild
单一节点：是否 React.Fragment，是否 Object  
多节点: 是否 array

diff 分两种情况：

1. 单一节点 判断 key 是否一致、判断是否为同种元素 &emsp;--是--> 根据 currentfiber clone createFiber
   &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ↓ 否  
   &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 标记删除 dom,创建 newfiber
2. 多节点
   对比更新前后的 nodeList,为 node 标记 flag,需要考虑是以下三种情况的哪种情况：

- 节点更新(属性变化)、类型变化
- 节点增删
- 节点位置移动  
  三种情况的处理逻辑不同，1 情况更常见。  
  经历两轮遍历，首轮优先处理常见情况 1，第二轮后其他情况。

  数组与数组对比，采用双指针的方式，newjsx 数组和 fiber 链表的比较，采用两轮遍历。  
  第一轮遍历：newChildren[i] 与 oldFiber 比较，是否可复用，可复用继续比较 newChildren[i+1] 与 oldFiber.subling
  跳出的条件：

  1. 不可复用：

  - key 不同，结束第一轮
  - key 相同，类型不同，oldFiber 标记 DELETION，基于 jsx 创建新的 fiber，继续遍历

  2. newChildren 遍历完或 oldFiber 遍历完或同时遍历完  
     第一轮结束返回 resultingFirstChild, 第一个 workinprogressfiber

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

## commit 阶段

## Hooks

### useState

```js
let isMount = true; //在react中通过currentFiber判断
const workInProgressHook = null //当前正在执行的hook

// FC的fiber
const fiber: {
  memorizedState:null, //fiber中保存的第一个hook
  stateNode: 当前FC
}

// 触发更新
function run() {
  workInProgressHook = fiber.memorizedState
  // 模拟schedule render commit流程
  // 遍历updateQueue,计算state

  // render、commit阶段
  const fc = fiber.stateNode()
  isMount = false;
  return fc
}

// 处理update
function dispatchAction(queue,action) {
  // 创建update,并存入环状链表中 hook.queue.pengding
  const update = {
    action,
    next:null
  }
  if (queue.pending===null) {
    //不存在
    // 创建环状链表，首尾指向自己
    update.next = update
  } else {
    // 插入环状链表中
    update.next = queue.pending.next
    queue.pending.next = update
  }
    queue.pending = update
}

// 处理hook
function useState(initialState) {
  let hook;

// 准备当前hook
  if(isMount){
// 第一次 创建新的hook
    hook = {
      queue:{
        pending:null  //TODO:是update?
      },
      memorizedState: initialState,
      next: null
    }

    if(!fiber.memorizedState){
      // 首个hook 存入fiber中
      fiber.memorizedState = hook
    }else{
      // TODO: 此处workInProgressHook 已是fiber.memorizedState？
      // 如果fiber中有hook，则把当前的hook作为下一个hook
      workInProgressHook.next = hook
    }
  } else {
    // 获取当前hook
    hook = workInProgressHook;
    workInProgressHook = workInProgressHook.next  //下一个待执行的hook
  }


// 计算state，根据memorizedState,和update计算剩余的update,newState
  let baseState = hook.memorizedState  //上次计算得出的state
  if(hook.queue.pending){
    let firstUpdate = hook.queue.pending.next  //这个pending从哪来

// 遍历hook.queue
    do{
      let action = firstUpdate.action
      baseState = action(baseState)
      firstUpdate = firstUpdate.next
    }while(firstUpdate !== hook.queue.pending.next)

    hook.queue.pending = null
  }

  hook.memorizedState = baseState

  return [baseState, dispatchAction.bind(null,hook.queue)];
}
```

### useEffect

Commit 阶段：

- beforeMutation
  检测到 useEffect,调度 flushPassiveEffects
- mutation
- layout
  注册 destroy、create 到 flushPassiveEffects 上
- commit 完成后
  执行 flushPassiveEffects，判断是否为 mount 阶段，即 current 是否为 null，如果为 null，则不会执行 destroy

对于页面刷新、关闭、跳转相当于实例销毁，于 useEffect 无关。  
useEffect 是异步执行，因为从检测到实际执行经历了多个阶段，原因是：防止同步执行阻塞浏览器渲染。  
useLayoutEffect 则是在 mutation 阶段执行 destroy 回调，在 layout 阶段同步执行。

## Context

定义、赋值、消费  
React 性能一大关键在于，减少不必要的 render。  
Context 会通过 Object.is()，即 === 来比较前后 value 是否严格相等。这里可能会有一些陷阱：当注册 Provider 的父组件进行重渲染时，会导致消费组件触发意外渲染。  
当每一次 Provider 重渲染时，以下的代码会重渲染所有消费组件，因为 value 属性总是被赋值为新的对象。

当 context value 发生变化时（这里使用的是 Object.is，通常我们传递的 value 都是一个复杂对象类型，它将比较两个对象的引用地址是否相同，若引用地址未发生变化，则会进入 bailout 复用当前 Fiber 节点，在 bailout 中，会检查该 Fiber 的所有子孙 Fiber 是否存在 lane 更新。若所有子孙 Fiber 本次都没有更新需要执行，则 bailout 会直接返回 null，整棵子树都被跳过更新），创建一个更新，并进行深度优先遍历子节点，检查消费组件 fiber 中的 dependence，遍历对比当前更新的 context，如果一致则标记该 fiber 的 lane 属性，

```js
const ctx = createContext(0);

function App() {
  return (
    <ctx.Provider value={1}>
      <ctx.Provider value={2}>
        <ctx.Provider value={3}>
          <Cpn /> {/* 3 */}
        </ctx.Provider>
        <Cpn /> {/* 2 */}
      </ctx.Provider>
      <Cpn /> {/* 1 */}
    </ctx.Provider>
  );
}

function Cpn() {
  const num = useContext(ctx);
  return <div>{num}</div>;
}
```

```js
function createContext(initialValue) {
  const context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _currentValue: initialValue,
    Provider: null,
  };

  // context.Provider = ({ children, value }) => {
  //   context.value = value;
  //   return <div>{children}</div>;
  // };

  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context,
  };

   context.Consumer = context;

  return context;
}

function useContext(context) {
  const contextItem = {
    context
    next:null //链表，同一组件上注册的多个context
  }
// 是否已有context
if(lastContextDependency===null){
   lastContextDependency = contextItem;
   currentlyRenderFiber.dependencies = {
    lanes: NoLanes,
    firstContext: contextItem,
    responders: null,
  };
}else{
  lastContextDependency = lastContextDependency.next = contextItem
}
  return context._currentValue;
}

const preContextValueStack = [];
let preContextValue = null;

function pushProvider(context, newValue) {
  preContextValueStack.push(preContextValue._currentValue);

  preContextValue = newContext._currentValue;
  context._currentValue = newValue;
}

function popProvider(context) {
  context._currentValue = preContextValue;
  preContextValue = preContextValueStack.pop();
}
```

## scheduler
