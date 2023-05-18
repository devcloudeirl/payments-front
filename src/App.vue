<script setup lang="ts">
 import getInitialData from './core/actions/getInitialData'
 const isMounted = ref(false)
 const route = useRoute()

 onMounted(async () => {
  await getInitialData()
  isMounted.value = true
 })
</script>
<template>
 <component v-if="isMounted" :is="route.meta.layout ? route.meta.layout : 'div'"></component>
</template>
