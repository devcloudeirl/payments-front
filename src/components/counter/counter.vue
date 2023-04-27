<script setup lang="ts">
const number = ref(0)
</script>

<template>
    <h1>Counter</h1>
    <div class="flex item-center gap-3">
        <el-button @click="number--">-</el-button>
        <b>{{ number }}</b>
        <el-button @click="number++">+</el-button>
    </div>
</template>