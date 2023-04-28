<script setup lang="ts">
// const isMounted = ref(false)
</script>
<template>
   <component v-if="true" :is="$route.meta.layout ? $route.meta.layout : 'div'"></component>
</template>
