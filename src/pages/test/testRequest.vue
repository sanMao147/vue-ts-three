<template>
  <div></div>
</template>

<script setup lang="ts">
import API from '@/api'
const requestRes = async () => {
  let result = await API.login('张三', '123456')
}
</script>

<style scoped></style>
