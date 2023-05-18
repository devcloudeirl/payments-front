import useAxios from '../../modules/axios'
import coreStore from '../coreStore'
import { ElMessage } from 'element-plus'

const getInitialData = async (): Promise<void> => {
 try {
  const { data } = await useAxios.get(coreStore.initialDataRoute)
  coreStore.routes = data
 } catch (error) {
  console.log(error)
  ElMessage.error('Error al obtener los datos iniciales')
 }
}

export default getInitialData
