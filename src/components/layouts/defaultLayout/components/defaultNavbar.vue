<script setup lang="ts">
import logout from "../../../auth/actions/logout";
</script>

<template>
  <div class="w-full shadow-md h-16 flex items-center justify-between bg-white">
    <div></div>
    <el-button @click="logout" type="text" class="mr-3">
      <i class="fa-solid fa-right-from-bracket text-xl"></i>
    </el-button>
  </div>
</template>
