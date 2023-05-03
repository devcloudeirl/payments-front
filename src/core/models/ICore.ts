export interface ICoreState{
    initialDataRoute: string
    routes: IRoutes | null
    appName: string
}
export interface ICoreRoutes{
    login: string
    register: string

}
export interface IRoutes{
   core: ICoreRoutes
}