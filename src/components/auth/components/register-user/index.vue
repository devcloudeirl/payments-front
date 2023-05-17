<script setup lang="ts">
import { ArrowLeft, Message, Lock } from "@element-plus/icons-vue";
import routesConfig from "../../../../router/routesConfig";
import { useRouter } from "vue-router";
import authRegisterUser from "../../actions/authRegisterUser";
import { ElMessage } from "element-plus/lib/components/index.js";
import type { IRegister } from "../../models/ILogin";
import registerRules from "../../rules/registerRules";
const router = useRouter();
const form = ref();
const registerModel = reactive<IRegister>({} as IRegister);
const setRegister = async (): Promise<void> => {
  form.value.validate(async (valid: boolean) => {
    if (!valid) {
      ElMessage.error("Por favor, rellene los campos correctamente");
      return;
    }
    const status = await authRegisterUser(registerModel);
    if (status) router.push(routesConfig.RegisterPerson);
  });
};
const validateConfirmPassword = (rule: any, value: string, callback: any) => {
  if (value === "") {
    callback(new Error("Por favor, confirme su contraseña"));
  } else if (value !== registerModel.password) {
    callback(new Error("Las contraseñas no coinciden"));
  } else {
    callback();
  }
};
registerRules.confirm_password = [
  {
    required: true,
    message: "Por favor, confirme su contraseña",
    trigger: "blur",
  },
  { validator: validateConfirmPassword, trigger: "blur" },
];
</script>
<template>
  <div class="flex h-screen justify-center">
    <el-card class="box-card card-header m-auto">
      <div class="flex justify-start items-start pl-8 py-0">
        <router-link :to="routesConfig.Login">
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
              <el-form-item prop="username">
                <el-input
                  autocomplete="off"
                  v-model="registerModel.username"
                  type="email"
                  class="my-input"
                  placeholder="Correo electrónico"
                  size="large"
                  :prefix-icon="Message"
                />
              </el-form-item>
              <!-- password input -->
              <el-form-item prop="password">
                <el-input
                  v-model="registerModel.password"
                  type="password"
                  class="my-input"
                  placeholder="Contraseña"
                  size="large"
                  :prefix-icon="Lock"
                  show-password
                />
              </el-form-item>
              <!-- password input -->
              <el-form-item prop="confirm_password">
                <el-input
                  v-model="registerModel.confirm_password"
                  type="password"
                  class="my-input"
                  placeholder="Confirmar contraseña"
                  size="large"
                  :prefix-icon="Lock"
                  show-password
                />
              </el-form-item>
            </div>
            <el-form-item prop="conditions">
              <el-checkbox
                v-model="registerModel.conditions"
                label="Aceptar Terminos y Condiciones"
                size="large"
                class="my-checkbox pt-4"
              />
            </el-form-item>
            <!-- Login Button -->
            <el-button
              type="primary"
              class="w-full"
              round
              size="large"
              color="#3E63DD"
              @click="setRegister"
              >Registrarse
            </el-button>
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
