## React项目  

### 1.只有一个index.html文件
### 2.入口文件为index.js  
### 3.所有html模块以组件的形式编写，追加在App.js  
### 4.使用 ```npm start```来启动

---

## 跨域配置  
`npm install http-proxy-middleware --save`  
在src目录下新建`setupProxy.js`文件
```js
const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
             '/api',
             proxy.createProxyMiddleware({
               target: 'http://127.0.0.1:9000/api',
               changeOrigin: true,
               pathRewrite: {
                 '^/api': ''
               }
         })
       );
};

```  
请求使用axios,配置中`/api`字符代替了http://127.0.0.1:9000/api ,然后完成拼串
```js
componentDidMount() {
    axios.get('/api/mirrors')
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error);
    })
 }
```
### 引用的外部依赖
1.bootstrap  
使用的是bootstrap v3版本的框架

2.rsuite  
```shell script
    npm i rsuite --save
```  

```js
    import 'rsuite/dist/styles/rsuite-default.css';
    import { Button } from 'rsuite';
```  

3.react-router-dom  
```shell script
npm install react-router-dom
```  

4.react-toastify 提示框插件  
官方首页地址:https://www.npmjs.com/package/react-toastify  
可自定义地址: https://fkhadra.github.io/react-toastify/introduction/
```shell script
npm install --save react-toastify
```
