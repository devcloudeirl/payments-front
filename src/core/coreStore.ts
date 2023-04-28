import { computed, reactive} from 'vue'
import type  {IRoutes,ICoreState} from './models/ICore'

const isProduction = process.env.NODE_ENV === 'production'

const basePath = isProduction ?  import.meta.env.VITE_APP_API_URL_PROD : import.meta.env.VITE_APP_API_URL_LOCAL

const state = reactive<ICoreState>({
    initialDataRoute: `${basePath}/core/paths`,
    routes: null,
    appName: import.meta.env.VITE_APP_NAME
})

const useCoreStore = {
    initialDataRoute: {
        get:(): string => state.initialDataRoute,
    },
    routes: {
        get:(): IRoutes => state.routes as IRoutes,
        set:(routes: IRoutes): void => {
            state.routes = routes
        },
    },
}

export default computed(() => useCoreStore).value