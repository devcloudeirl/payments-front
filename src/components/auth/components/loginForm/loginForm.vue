<script setup lang="ts">
 import { UserFilled, Lock } from '@element-plus/icons-vue'
 import authLogin from '../../actions/authLogin'
 import { ILogin } from '../../models/IAuth'
 import loginRules from './loginRules'
 import { ElForm, ElMessage } from 'element-plus'
 import routesConfig from '../../../../router/routesConfig'

 const authModel = ref({ username: '', password: '' } as ILogin)
 const loading = ref<boolean>(false)
 const formRef = ref<InstanceType<typeof ElForm> | null>(null)
 const router = useRouter()

 const setLogin = async (): Promise<void> => {
  const isValidForm = await formRef.value?.validate()

  if (!isValidForm) {
   ElMessage.error('Por favor, ingrese los datos correctamente')
   return
  }

  loading.value = true
  await authLogin(authModel.value)
  router.push(routesConfig.Home)
  loading.value = false
 }
</script>

<template>
 <div class="flex h-screen justify-center">
  <el-card
   class="box-card m-auto"
   :body-style="{
    width: '100%',
    height: '100%',
   }"
  >
   <div class="grid h-full place-items-center lg:grid-cols-2">
    <div class="hidden lg:grid">
     <img src="../../../../assets/images/login.svg" alt="" />
    </div>

    <div class="space-y-8">
     <h1 class="font-bold text-[40px] text-center text-brand-9">Iniciar sesión</h1>

     <p class="text-slate-400 text-center">Sorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

     <el-form
      ref="formRef"
      label-position="top"
      class="space-y-4 lg:grid place-items-center"
      :model="authModel"
      :rules="loginRules"
     >
      <el-form-item prop="username" class="w-full">
       <el-input
        v-model="authModel.username"
        type="email"
        placeholder="Usuario"
        size="large"
        :prefix-icon="UserFilled"
       />
      </el-form-item>

      <el-form-item prop="password" class="w-full">
       <el-input
        v-model="authModel.password"
        type="password"
        placeholder="Contraseña"
        size="large"
        :prefix-icon="Lock"
        show-password
        @keyup.enter="setLogin"
       />
      </el-form-item>

      <el-form-item class="w-full">
       <el-button type="primary" class="w-full" round size="large" color="#3E63DD" @click="setLogin" :loading="loading"
        >Iniciar sesión
       </el-button>
      </el-form-item>
     </el-form>

     <p class="text-slate-400 text-center">
      ¿Olvidaste tu contraseña?
      <a href="#" class="text-brand-9 hover:underline">Click aquí</a>
     </p>

     <p class="text-brand-9 text-center font-bold hover:underline">
      <a href="#">Regístrate ahora</a>
     </p>
    </div>
   </div>
  </el-card>
 </div>
</template>

<style>
 .box-card {
  @apply border-none shadow-none rounded-3xl w-[1163px] h-screen max-h-[704px] md:mx-10 md:border-solid md:border-[#c7c7c7] md:shadow-custom !important;
 }

 .el-input__wrapper {
  @apply rounded-3xl !important;
 }

 button span {
  @apply text-base !important;
 }
</style>
