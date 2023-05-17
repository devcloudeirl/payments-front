import { computed, reactive } from 'vue'
import type { IPerson } from '../models/ILogin'

const state = reactive({
 username: '',
 access: '',
 person: {} as IPerson,
})

const authStore = {
 get username(): string {
  return state.username
 },
 set username(value: string) {
  state.username = value
 },
 get access(): string {
  return state.access
 },
 set access(value: string) {
  state.access = value
 },
 get person(): IPerson {
  return state.person
 },
 set person(value: IPerson) {
  state.person = value
 },
}

export default computed(() => authStore).value
