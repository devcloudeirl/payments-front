import axios from 'axios'

const isProduction = process.env.NODE_ENV === 'production'
const url = isProduction ? import.meta.env.VITE_APP_API_URL_PROD : import.meta.env.VITE_APP_API_URL_LOCAL

const useAxios = axios.create({
 baseURL: url,
 headers: {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'app-name': import.meta.env.VITE_APP_NAME,
 },
})

useAxios.interceptors.request.use(
 (config) => {
  const token = (localStorage.getItem(`${import.meta.env.VITE_APP_NAME}_token`) || '') as string

  if (token) config.headers.Authorization = `token ${token}`

  return config
 },
 (error) => {
  return Promise.reject(error)
 }
)

export default useAxios
