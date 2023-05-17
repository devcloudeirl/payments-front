export interface ICoreState{
    initialDataRoute: string
    routes: IRoutes | null
    appName: string
}
export interface ICoreRoutes{
    login: string
    register: string
    registerPerson: string

}
export interface IRoutes{
   core: ICoreRoutes
}