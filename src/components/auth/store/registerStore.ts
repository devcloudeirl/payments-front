import { computed, reactive } from "vue";
import type { IRegisterStore,IRegister } from "../models/ILogin";
const state = reactive<IRegisterStore>({
  register: null,
});
const registerStore = {
  register: {
    get: () => state.register ,
    set: (value: IRegister) => (state.register = value),
  },
};
export default computed(() => registerStore).value;