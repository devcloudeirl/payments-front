export interface ICoreState{
    initialDataRoute: string
    routes: IRoutes | null
    appName: string
}
export interface IRoutes{
    login: string
}