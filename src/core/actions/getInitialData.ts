import useAxios from '../../modules/axios'
import coreStore from '../coreStore'
import type { IRoutes } from '../models/ICore'

const getInitialData = async (): Promise<void> => {
 try {
  const { data } = await useAxios.get(coreStore.initialDataRoute.get())
  coreStore.routes.set(data as IRoutes)
 } catch (error) {
  console.log(error)
 }
}

export default getInitialData