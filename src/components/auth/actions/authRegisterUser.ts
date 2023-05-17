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
    if (error.response && error.response.status === 400) {
      // 409: Conflicto - El usuario ya está registrado con ese correo electrónico
      ElMessage.error("El usuario ya está registrado con ese correo electrónico");
    } else {
      ElMessage.error(error.message);
    }
    return false;
  }
};
export default authRegister;