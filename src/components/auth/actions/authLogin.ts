import type { ILogin } from "../models/ILogin";
import service from "../../../modules/axios";
import coreStore from "../../../core/coreStore";
import authStore from "../store/authStore";
import { ElMessage } from "element-plus";

const authLogin = async (model: ILogin): Promise<boolean> => {
  try {
    const { login } = coreStore.routes.get().core;
    const { data } = await service.post(login, model);
    const APP_NAME = import.meta.env.VITE_APP_NAME;
    localStorage.setItem(`${APP_NAME}_token`, data.access);

    localStorage.setItem(`${APP_NAME}_username`, data.username);
    localStorage.setItem(`${APP_NAME}_person`, JSON.stringify(data.person));

    authStore.username.set(data.username);
    authStore.access.set(data.access);
    authStore.person.set(data.person);
    ElMessage.success(`Bienvenido ${data.person.full_name}`);
    return true;
  } catch (error: any) {
    ElMessage.error(error.message);
    return false;
  }
};

export default authLogin;
