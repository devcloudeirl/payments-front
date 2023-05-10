<script setup lang="ts">
  import { ref } from "vue";
  import { UserFilled, Lock } from "@element-plus/icons-vue";
  const inputUsername = ref("");
  const inputPassword = ref("");

  const brand_9 = "#3E63DD";
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

          <div class="space-y-6 lg:grid place-items-center">
            <!-- user input -->
            <el-input
              v-model="inputUsername"
              type="email"
              class=""
              placeholder="Usuario"
              size="large"
              :prefix-icon="UserFilled"
            />
            <!-- password input -->
            <el-input
              v-model="inputPassword"
              type="password"
              class=""
              placeholder="Contraseña"
              size="large"
              :prefix-icon="Lock"
              show-password
            />
          </div>

          <!-- Login Button -->
          <el-button
            type="primary"
            class="w-full"
            round
            size="large"
            :color="brand_9"
            >Iniciar sesión
          </el-button>

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
