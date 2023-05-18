<script setup lang="ts"></script>

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
     <img src="../../../../assets/images/register.svg" alt="" />
    </section>

    <section class="space-y-8 max-w-[386px]">
     <user-form />
    </section>
   </div>
  </el-card>
 </div>
</template>

<style scoped>
 .box-card {
  @apply border-none shadow-none rounded-3xl w-[1163px] h-screen max-h-[704px] md:mx-10 md:border-solid md:border-[#c7c7c7] md:shadow-custom !important;
 }
</style>
