<script setup lang="ts">
import { ArrowLeft, PhoneFilled, UserFilled, Postcard } from "@element-plus/icons-vue";
import routesConfig from "../../../../router/routesConfig";
import { ref } from "vue";
const inputUsername = ref("");
const inputPassword = ref("");
const brand_9 = "#3E63DD";
</script>
<template>
    <div class="flex h-screen justify-center">
        <el-card class="box-card card-header m-auto">
            <div class="flex justify-start items-start pl-8 py-0">
                <router-link :to="routesConfig.Login">
                    <el-icon :size="25">
                        <span class="flex justify-center items-center text-brand-9 font-semibold space-x-2">
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
                        Para empezar con Payments, ¡unete a nosotros! y disfruta de pagar sin esfuerzos.
                    </p>
                    <el-form>
                        <div class=" lg:grid">
                            <!-- user input -->
                            <el-form-item>
                                <el-input v-model="inputUsername" type="text" class="pb-2" placeholder="DNI" size="large"
                                    :prefix-icon="Postcard" />
                            </el-form-item>
                            <!-- password input -->
                            <el-form-item>
                                <el-input v-model="inputPassword" type="text" class="pb-2" placeholder="Nombres"
                                    size="large" :prefix-icon="UserFilled" show-password />
                            </el-form-item>
                            <el-form-item>
                                <el-input v-model="inputPassword" type="text" class="pb-2" placeholder="Apellido paterno"
                                    size="large" :prefix-icon="UserFilled" show-password />
                            </el-form-item>
                            <el-form-item>
                                <el-input v-model="inputPassword" type="text" class="pb-2" placeholder="Apellido materno"
                                    size="large" :prefix-icon="UserFilled" show-password />
                            </el-form-item>
                            <!-- password input -->
                            <el-form-item>
                                <el-input v-model="inputPassword" type="text" class="pb-3" placeholder="Teléfono"
                                    size="large" :prefix-icon="PhoneFilled" show-password />
                            </el-form-item>
                        </div>
                        <!-- Login Button -->
                        <el-button type="primary" class="w-full" round size="large" :color="brand_9">Registrarse
                        </el-button>
                        <p class="text-brand-9 py-6 text-center font-bold hover:underline">
                            <a href="#">Omitir</a>
                        </p>
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