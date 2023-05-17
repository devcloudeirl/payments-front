export interface ILogin {
    username: string
    password: string
}

export interface IRegisterStore {
    register: IRegister | null
}
export interface IPerson {
    document_number: string
    name: string
    first_last_name: string
    second_last_name: string
    phone: string
    user: number
}

export interface IRegister {
    username: string
    password: string
    confirm_password: string
    conditions: boolean
}

export interface IAuthStore {
    username: string | null
    access: string | null
    person: IPerson | null
}