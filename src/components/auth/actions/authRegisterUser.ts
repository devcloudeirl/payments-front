import service from "../../../modules/axios";
import coreStore from "../../../core/coreStore";
import { ElMessage } from "element-plus/lib/components/message/index.js";
import type { IRegister } from "../models/ILogin";
const authRegister = async (model: IRegister): Promise<boolean> => {
  try {
    const { register } = coreStore.routes.get().core;
    const { data } = await service.post(register, model);
    const APP_NAME = import.meta.env.VITE_APP_NAME;
    localStorage.setItem(`${APP_NAME}_user`, JSON.stringify(data.user));
    ElMessage.success("Usuario registrado correctamente");
    return true;
  } catch (error: any) {
    ElMessage.error(error.message);
    return false;
  }
};
export default authRegister;