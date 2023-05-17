<script setup lang="ts">
 import authStore from '../auth/store/authStore'
</script>

<template>Hi {{ authStore.person.full_name }}, i´m Home!</template>
