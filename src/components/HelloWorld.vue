<script setup lang="ts">
 
 const number = ref(0)
</script>

<template>
  <el-button @click="number++">
    {{ number }}
  </el-button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
