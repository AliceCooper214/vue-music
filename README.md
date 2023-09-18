# vue-music-next

## 有哪些区别

- 相较于之前用vue-cli创建项目，通过beforeServer，载入路由。现在可以用于vite。

差异点：
vue-cli服务是用的express，而vite用的是connect，同时该库不支持内置qs，所以要使用node.js自带的querystring
vite的插件调试，在开发环境相对困难一些。

- 修复了搜索接口的使用

但是有个问题，如果搜索出来的是用户自主上传的音乐，动态获取音乐的url会失效

- 其他基本没啥差别

## QQ音乐服务架构的升级

- 分析：发现有些请求类似于聚合接口，传入的参数是包括公共参数，请求模块类型以及参数
- 响应的速度以及内容，同比以往更多
- 有点类似 宋小菜 的架构

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
