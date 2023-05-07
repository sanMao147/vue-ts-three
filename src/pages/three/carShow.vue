<template>
  <canvas ref="webgl" class="webgl"></canvas>
</template>

<script setup lang="ts">
import ThreeClass from '@/utils/initCar'
import { ref, onMounted } from 'vue'
const webgl = ref(null)
onMounted(() => {
  const canvas = webgl.value
  if (canvas) {
    new ThreeClass(canvas)
  }
})
</script>

<style scoped></style>
