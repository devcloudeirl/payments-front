import type { ILogin } from '../models/IAuth'
import service from '../../../modules/axios'
import coreStore from '../../../core/coreStore'
import authStore from '../store/authStore'
import { ElMessage } from 'element-plus'

const setAuthToLocalStorage = (data: any) => {
 const APP_NAME = import.meta.env.VITE_APP_NAME
 localStorage.setItem(`${APP_NAME}_token`, data.access)
 localStorage.setItem(`${APP_NAME}_username`, data.username)
 localStorage.setItem(`${APP_NAME}_person`, JSON.stringify(data.person))
}

const authLogin = async (model: ILogin): Promise<boolean> => {
 try {
  const { login } = coreStore.routes.core
  const { data } = await service.post(login, model)
  setAuthToLocalStorage(data)
  authStore.username = data.username
  authStore.access = data.access
  authStore.person = data.person
  ElMessage.success(`Bienvenido ${data.person.full_name}`)
  return true
 } catch (error: any) {
  ElMessage.error(error.message)
  return false
 }
}

export default authLogin
