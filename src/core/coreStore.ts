import type { IRoutes } from './models/ICore'
const isProduction = process.env.NODE_ENV === 'production'

const basePath = isProduction ? import.meta.env.VITE_APP_API_PROD : import.meta.env.VITE_APP_API_URL

const state = reactive({
 initialDataRoute: `${basePath}endpoints/`,
 routes: {} as IRoutes,
 appName: import.meta.env.VITE_APP_NAME as string,
})

const useCoreStore = {
 get initialDataRoute(): string {
  return state.initialDataRoute
 },
 set initialDataRoute(value: string) {
  state.initialDataRoute = value
 },
 get routes(): IRoutes {
  return state.routes
 },
 set routes(value: IRoutes) {
  state.routes = value
 },
}

export default computed(() => useCoreStore).value
