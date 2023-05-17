<script setup lang="ts">
  import { UserFilled, Lock } from "@element-plus/icons-vue";
  import { useRouter } from "vue-router";
  import { ILogin } from "../../models/ILogin";
  import authLogin from "../../actions/authLogin";
  import routesConfig from "../../../../router/routesConfig";
  import loginRules from "../../rules/loginRules";

  const brand_9 = "#3E63DD";

  const router = useRouter();
  const form = ref();
  const loginModel = reactive<ILogin>({} as ILogin);

  const setLogin = async (): Promise<void> => {
    form.value.validate(async (valid: boolean) => {
      if (!valid) {
        ElMessage.error("Rellene los campos correctamente.");
        return;
      }

      const status = await authLogin(loginModel);
      if (status) router.push(routesConfig.Home);
    });
  };
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
        <!-- left side -->
        <div class="hidden lg:grid">
          <img src="../../../../assets/images/login.svg" alt="" />
        </div>

        <!-- right side -->
        <div class="space-y-8">
          <h1 class="font-bold text-[40px] text-center text-brand-9">
            Iniciar sesión
          </h1>

          <p class="text-slate-400 text-center">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <el-form
            :model="loginModel"
            status-icon
            :rules="loginRules"
            ref="form"
            class="space-y-6 lg:grid"
          >
            <!-- user input -->
            <el-form-item prop="username">
              <el-input
                v-model="loginModel.username"
                type="text"
                placeholder="Usuario"
                size="large"
                :prefix-icon="UserFilled"
              />
            </el-form-item>
            <!-- password input -->

            <el-form-item prop="password">
              <el-input
                v-model="loginModel.password"
                type="password"
                placeholder="Contraseña"
                size="large"
                :prefix-icon="Lock"
                show-password
              />
            </el-form-item>

            <!-- Login Button -->
            <el-form-item>
              <el-button
                type="primary"
                class="w-full"
                round
                size="large"
                :color="brand_9"
                @click="setLogin"
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
