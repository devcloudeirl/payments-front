<script setup lang="ts">
//  import autoLogin from './components/auth/actions/autoLogin'
import getInitialData from './core/actions/getInitialData'
const isMounted = ref(false)
onMounted(async () => {
   await getInitialData()
   // autoLogin()
   isMounted.value = true
})
</script>
<template>
   <component v-if="isMounted" :is="$route.meta.layout ? $route.meta.layout : 'div'"></component>
</template>
