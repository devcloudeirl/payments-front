<script setup lang="ts">
 import { UserFilled, Lock } from '@element-plus/icons-vue'
 import { ElForm, ElMessage } from 'element-plus'
 import userFormRules from './rules/userFormRules'
 import routesConfig from '../../../../../router/routesConfig'

 const registerModel = ref({ username: '', password: '', repeat_password: '' })
 const loading = ref<boolean>(false)
 const formRef = ref<InstanceType<typeof ElForm> | null>(null)

 const setLogin = async (): Promise<void> => {
  const isValidForm = await formRef.value?.validate()

  if (!isValidForm) {
   ElMessage.error('Por favor, ingrese los datos correctamente')
   return
  }
 }

 const ruleForPasswordRepeat = async (rule: any, value: string, callback: any) => {
  if (value === '') {
   callback(new Error('Por favor, repita la contraseña'))
  } else if (value !== registerModel.value.password) {
   callback(new Error('Las contraseñas no coinciden'))
  } else {
   callback()
  }
 }
</script>

<template>
 <h1 class="font-bold text-[40px] text-center text-brand-9 leading-10">Registrate en la plataforma</h1>

 <p class="text-slate-400 text-center">Registrate y se parte de la red de pagos rapida y eficáz de la región</p>

 <el-form
  ref="formRef"
  label-position="top"
  class="lg:grid place-items-center"
  :model="registerModel"
  :rules="userFormRules"
 >
  <el-form-item prop="username" class="w-full">
   <el-input
    v-model="registerModel.username"
    type="email"
    placeholder="Correo electrónico"
    size="large"
    :prefix-icon="UserFilled"
   />
  </el-form-item>

  <el-form-item prop="password" class="w-full">
   <el-input
    v-model="registerModel.password"
    type="password"
    placeholder="Contraseña"
    size="large"
    :prefix-icon="Lock"
    show-password
   />
  </el-form-item>

  <el-form-item prop="repeat_password" class="w-full" :rules="[{ validator: ruleForPasswordRepeat, trigger: 'blur' }]">
   <el-input
    v-model="registerModel.repeat_password"
    type="password"
    placeholder="Repetir Contraseña"
    size="large"
    :prefix-icon="Lock"
    show-password
    @keyup.enter="setLogin"
    :disabled="!registerModel.password"
   />
  </el-form-item>

  <el-form-item class="w-full mt-5">
   <el-button type="primary" class="w-full" round size="large" color="#3E63DD" @click="setLogin" :loading="loading"
    >Registrarse
   </el-button>

   <p class="text-center w-full">
    Ya tengo una cuenta
    <router-link class="hover:underline text-brand-9" :to="routesConfig.Login"> Iniciar sesión</router-link>
   </p>
  </el-form-item>
 </el-form>
</template>
