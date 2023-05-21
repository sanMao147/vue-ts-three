<template>
  <canvas ref="webgl" class="webgl"></canvas>
</template>

<script setup lang="ts">
import ThreeClass from '@/utils/sceneObjects'
import { ref, onMounted } from 'vue'
import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three'
const webgl = ref(null)
const setCube = () => {
  const geometry = new BoxGeometry(10, 10, 10)
  const meterial = new MeshBasicMaterial({ color: 'FFB800' })
  const mesh = new Mesh(geometry, meterial)
  return mesh
}
const size = {
  width: window.innerWidth,
  height: window.innerHeight
}
onMounted(() => {
  const canvas = webgl.value
  const cube = setCube()
  if (canvas) {
    new ThreeClass(canvas, cube, size)
  }
})
</script>

<style scoped></style>
