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
    <section class="hidden lg:grid">
     <img src="../../../../assets/images/login.svg" alt="" />
    </section>

    <section class="space-y-8 max-w-[386px]">
     <h1 class="font-semibold leading-10 text-[40px] w-full text-center text-brand-9">Hola, Bienvenido nuevamente</h1>

     <p class="text-slate-400 text-center break-normal">
      Inicia sesión y disfruta de la forma de pago más rápida y segura en un solo lugar
     </p>

     <el-form
      ref="formRef"
      label-position="top"
      class="lg:grid place-items-center"
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

      <el-form-item class="w-full mt-5">
       <el-button
        type="primary"
        class="w-full"
        style="font-size: 16px"
        round
        size="large"
        color="#3E63DD"
        @click="setLogin"
        :loading="loading"
       >
        Iniciar sesión
       </el-button>

       <p class="text-center w-full">
        Aun no tengo una cuenta.
        <router-link class="hover:underline text-brand-9" :to="routesConfig.Register"> Regístrarme</router-link>
       </p>
      </el-form-item>
     </el-form>
    </section>
   </div>
  </el-card>
 </div>
</template>

<style scoped>
 .box-card {
  @apply rounded-3xl w-[1163px] h-screen max-h-[704px] md:mx-10 !important;
 }
</style>
