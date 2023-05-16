import { computed, reactive } from 'vue'
import type { IAuthStore} from '../models/ILogin'

const state = reactive<IAuthStore>({
 username: null,
 access: null,
})

const authStore = {
 username: {
  get: () => state.username,
  set: (value: string) => (state.username = value),
 },
 access: {
  get: () => state.access,
  set: (value: string) => (state.access = value),
 },
}

export default computed(() => authStore).value