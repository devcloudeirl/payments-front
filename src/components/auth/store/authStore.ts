import { computed, reactive } from 'vue'
import type { IAuthStore, IPerson} from '../models/ILogin'

const state = reactive<IAuthStore>({
 username: null,
 access: null,
 person: null,
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
 person: {
  get: () => state.person,
  set: (value: IPerson) => (state.person = value),
 },
}

export default computed(() => authStore).value