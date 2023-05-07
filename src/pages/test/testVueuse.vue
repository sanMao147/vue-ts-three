<template>
  <div>
    <UsePinia></UsePinia>
    <h1>测试vueUse的鼠标坐标</h1>
    <h3>Mouse:{{ x }} & {{ y }}</h3>
  </div>
</template>

<script setup lang="ts">
import { useMouse } from '@vueuse/core'
import UsePinia from '@/components/UsePinia.vue'
const { x, y } = useMouse()
</script>

<style scoped></style>
