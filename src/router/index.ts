import { createRouter,createWebHashHistory, type RouteRecordRaw} from 'vue-router'

import defaultVue from '../layouts/default.vue'
import routesConfig from './routesConfig'

let routes = [routesConfig.Home, routesConfig.Login] as RouteRecordRaw[]

routes = routes.map((route: RouteRecordRaw) => {
    if (!route.meta?.layout) {
        route.meta = Object.assign({}, route.meta, { 
            layout: defaultVue 
        })
    }
    return route
})

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const APPNAME = import.meta.env.VITE_APP_NAME
    const {auth} = to.meta
    const isAuth = localStorage.getItem(`${APPNAME}_token`) !== null
    if (auth && !isAuth) {
        next(routesConfig.Login)
        return
    }
    next()
})

export default router