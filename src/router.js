/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import { GetCookies } from "./utils/setCookies";
import Home from "./views/Home.vue";

// 路由盒子
const RouterWrap = resolve => require(["@/components/RouterWrap"], resolve);

// 用户信息

// 书架

// 书城

// 登录验证

let isLogin = () => {
  //判断是否登录
  try {
    let cookie = GetCookies("uInfo");
    let userInfo = JSON.parse(cookie);
    return !!(userInfo && userInfo.accessToken);
  } catch (e) {
    console.log(e, "nologin");
    return false;
  }
};
let limitNotLogin = (to, from, next) => {
  if (isLogin()) {
    next("/user");
  } else {
    next();
  }
};
let limitLogin = (to, from, next) => {
  //登陆限制
  if (isLogin()) {
    next();
  } else {
    next(`/login?redirect_url=${to.fullPath}`);
  }
};

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    }, {
      path: '/user',
      component: RouterWrap,
      children: [
        {
          path: '/',
          name: '用户信息',
          component: RouterWrap
        }
      ]
    }
  ]
});
