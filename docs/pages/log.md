### install 报错
// error An unexpected error occurred: "https://r2.cnpmjs.org/rc-menu/-/rc-menu-9.1.1.tgz: unable to verify the first certificate".


### eslint 报错 忽略
1. /* eslint-disable */
2. 在.eslintrc.js>rules添加@typescript-eslint/no-var-requires ，如下：
  rules: {
    "@typescript-eslint/no-var-requires": 0,
  }



### 下载文件 文件过大 报错
```js
export const download = (url, name)=>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    // 以二进制文件修改
    xhr.responseType = 'blob';
    xhr.onload = () => {
        const url = window.URL.createObjectURL(xhr.response);
        var a = document.createElement('a'); //新建a标签
        a.download = name || 'file'; //下载下来的文件名
        a.href = url;
        var event = new MouseEvent('click');
        a.dispatchEvent(event);
    };
      xhr.onreadystatechange = function() {
        // 下载时readyState===3，一次请求一直被调用
            console.log(xhr.readyState)
      }
      //  中途 xhr.abort() xhr.readyState===0 且 xhr.status===0
    xhr.send();
  }
```
readyState 属性表示Ajax请求的当前状态。
0 代表未初始化。 还没有调用 open 方法
1 代表正在加载。 open 方法已被调用，但 send 方法还没有被调用
2 代表已加载完毕。send 已被调用。请求已经开始
3 代表交互中。服务器正在发送响应
4 代表完成。响应发送完毕

场景：某些电脑(同一用户)，下载同样的文件，从页面点击下载报错，浏览器贴链接下载正常
报错： Get net::ERR_CONTENT_LENGTH_MISMATCH 200 (OK)
Status Code: 200 OK
network status (failed)net::ERR_CONTENT_LENGTH_MISMATCH	



### chrome 点击浏览器回退 页面不刷新，走缓存了
chrome 的 back/forward cache


### umi request 做了哪些处理

### 微前端 通讯