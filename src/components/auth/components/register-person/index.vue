<script setup lang="ts">
import {
  ArrowLeft,
  PhoneFilled,
  UserFilled,
  Postcard,
} from "@element-plus/icons-vue";
import routesConfig from "../../../../router/routesConfig";
import registerRules from "../../rules/registerRules";
import type { IPerson } from "../../models/ILogin";
import ElMessage from "element-plus/lib/components/message/index.js";
import authRegisterPerson from "../../actions/authRegisterPerson";
import router from "../../../../router";
const form = ref();
const registerModel = reactive<IPerson>({} as IPerson);
const registerPerson = async (): Promise<void> => {
  form.value.validate(async (valid: boolean) => {
    if (!valid) {
      ElMessage.error("Por favor, rellene los campos correctamente");
      return;
    }
    const APP_NAME = import.meta.env.VITE_APP_NAME;
    const userData = localStorage.getItem(`${APP_NAME}_user`);
    if (userData) {
      const user = JSON.parse(userData);
      if (user && user.id) {
        registerModel.user = user.id;
      }
    }
    const status = await authRegisterPerson(registerModel);
    if (status) router.push(routesConfig.Login);
  });
};
</script>
<template>
  <div class="flex h-screen justify-center">
    <el-card class="box-card card-header m-auto">
      <div class="flex justify-start items-start pl-8 py-0">
        <router-link :to="routesConfig.Register">
          <el-icon :size="25">
            <span
              class="flex justify-center items-center text-brand-9 font-semibold space-x-2"
            >
              <ArrowLeft /><span class="text-xl">Atras</span>
            </span>
          </el-icon>
        </router-link>
      </div>
      <div class="grid h-full place-items-center lg:grid-cols-2 justify-center">
        <!-- left side -->
        <div class="hidden lg:grid">
          <img src="../../../../assets/images/register.svg" alt="" />
        </div>
        <!-- right side -->
        <div class="w-[400px] space-y-8">
          <h1 class="font-bold text-[40px] text-center text-brand-9">
            Registrarse
          </h1>
          <p class="text-slate-400 text-center">
            Para empezar con Payments, ¡unete a nosotros! y disfruta de pagar
            sin esfuerzos.
          </p>
          <el-form
            class="my-input"
            :model="registerModel"
            :rules="registerRules"
            ref="form"
          >
            <div class="space-y-6">
              <!-- user input -->
              <el-form-item prop="document_number">
                <el-input
                  autocomplete="off"
                  v-model="registerModel.document_number"
                  type="text"
                  class="my-input"
                  placeholder="Documento de identidad"
                  size="large"
                  :prefix-icon="Postcard"
                />
              </el-form-item>
              <!-- password input -->
              <el-form-item prop="name">
                <el-input
                  v-model="registerModel.name"
                  type="text"
                  class="my-input"
                  placeholder="Nombres"
                  size="large"
                  :prefix-icon="UserFilled"
                />
              </el-form-item>
              <el-form-item prop="first_last_name">
                <el-input
                  v-model="registerModel.first_last_name"
                  type="text"
                  class="my-input"
                  placeholder="Apellido paterno"
                  size="large"
                  :prefix-icon="UserFilled"
                />
              </el-form-item>
              <el-form-item prop="second_last_name">
                <el-input
                  v-model="registerModel.second_last_name"
                  type="text"
                  class="my-input"
                  placeholder="Apellido materno"
                  size="large"
                  :prefix-icon="UserFilled"
                />
              </el-form-item>
              <!-- password input -->
              <el-form-item prop="phone">
                <el-input
                  v-model="registerModel.phone"
                  type="text"
                  class="my-input"
                  placeholder="Telefono"
                  size="large"
                  :prefix-icon="PhoneFilled"
                />
              </el-form-item>
              <!-- Login Button -->
            <div class="py-2">
              <el-button
                type="primary"
                class="w-full"
                round
                size="large"
                color="#3E63DD"
                @click="registerPerson"
                >Registrarse
              </el-button>
              <p
                class="text-brand-9 py-6 text-center font-bold hover:underline"
              >
                <router-link :to="routesConfig.Login">Omitir</router-link>
              </p>
            </div>
            </div>
            
          </el-form>
        </div>
      </div>
    </el-card>
  </div>
</template>
<style>
.box-card {
  @apply border-none shadow-none rounded-3xl w-[1163px] h-full max-h-[704px] md:mx-10 md:border-solid md:border-[#c7c7c7] md:shadow-custom !important;
}
.box-card .el-card__body {
  @apply flex flex-col justify-center h-full !important;
}
.card-header .el-card__header {
  @apply border-b-0 !important;
}
.el-input__wrapper {
  @apply rounded-3xl !important;
}
button span {
  @apply text-base !important;
}
</style>
