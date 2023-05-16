import type { ILogin } from "../models/ILogin";
import service from "../../../modules/axios";
import coreStore from "../../../core/coreStore";
import authStore from "../store/authStore";

const authLogin = async (model: ILogin): Promise<boolean> => {
  try {
    const { login } = coreStore.routes.get().core;
    const { data } = await service.post(login, model);
    const APP_NAME = import.meta.env.VITE_APP_NAME;
    localStorage.setItem(`${APP_NAME}_token`, data.access);

    localStorage.setItem(`${APP_NAME}_username`, data.username);

    authStore.username.set(data.username);

    ElMessage.success('Bienvenido');
    
    return true;
  } catch (error: any) {
    ElMessage.error(error.message);
    return false;
  }
};

export default authLogin;
