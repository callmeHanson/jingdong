import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/home/Home")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/Login")
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/register/Register")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin;
  if (isLogin) {
    if (to.name === "Login" || to.name === "Register") {
      next({ name: "Home" });
    } else {
      next();
    }
  } else {
    if (to.name === "Login" || to.name === "Register") {
      next();
    } else {
      next({ name: "Login" });
    }
  }
});

export default router;
