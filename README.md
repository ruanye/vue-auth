# auth

## 安装 element-ui

npm i element-ui
vue add element-ui

## 权限管理

管理员 用户
商品列表 商品列表
购物车 购物车
添加商品
管理用户

## npm i mock axios

## 权限流程

1. 后台动态返回路由(mock/index.js)
2. 要判断当前角色有没有获取过权限列表
3. 导航的数据结构

```js
[{ name: 1, children: [{ name: 1 - 1,chilren:[{name:1-1-2}] }, { name: 1 - 2 }] }, { name: 1 - 2 }];
```
