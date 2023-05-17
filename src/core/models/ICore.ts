export interface ICoreState{
    initialDataRoute: string
    routes: IRoutes | null
    appName: string
}
export interface ICoreRoutes{
    login: string
    register: string
    register_person: string

}
export interface IRoutes{
   core: ICoreRoutes
}