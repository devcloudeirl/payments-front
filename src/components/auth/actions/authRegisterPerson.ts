import service from "../../../modules/axios";
import coreStore from "../../../core/coreStore";
import { IPerson } from "../models/ILogin";
import { ElMessage } from "element-plus/lib/components/message/index.js";
const authRegisterPerson = async (model: IPerson): Promise<boolean> => {
  try {
    const { register_person } = coreStore.routes.get().core;
    const { data } = await service.post(register_person, model);
    const APP_NAME = import.meta.env.VITE_APP_NAME;
    localStorage.setItem(`${APP_NAME}_person`, JSON.stringify(data.person));
    ElMessage.success("Usuario registrado correctamente");
    return true;
  } catch (error: any) {
    ElMessage.error(error.message);
    return false;
  }
};
export default authRegisterPerson;