import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

import defaultVue from "../layouts/default.vue";
import routesConfig from "./routesConfig";

let routes = [
  routesConfig.Home,
  routesConfig.Login,
  routesConfig.Register,
  routesConfig.RegisterPerson,
] as RouteRecordRaw[];

routes = routes.map((route: RouteRecordRaw) => {
  if (!route.meta?.layout) {
    route.meta = Object.assign({}, route.meta, {
      layout: defaultVue,
    });
  }
  return route;
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const APP_NAME = import.meta.env.VITE_APP_NAME;
  const { auth } = to.meta;
  const isAuth = localStorage.getItem(`${APP_NAME}_token`) !== null;
  if (auth && !isAuth) {
    next(routesConfig.Login);
    return;
  }
  next();
});

export default router;
