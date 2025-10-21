<script setup lang="ts">


import {ref} from "vue";

const color = ref('');
const _red = () => {
  color.value = 'red';
}

const _blue = () => {
  color.value = 'blue';
}

const _green = () => {
  color.value = 'green';
}

const _yellow = () => {
  color.value = 'yellow';
}

defineExpose({changeRed: _red, changeBlue: _blue});
</script>

<template>
  <div :style="`color: ${color}`">
    <b>Gyerek szövege</b>
  </div>
  <button @click="_red" class="child-action-btn">🔴</button>
  <button @click="_blue" class="child-action-btn">🔵</button>
  <button @click="_green" class="child-action-btn">🟢</button>
  <button @click="_yellow" class="child-action-btn">🟡</button>
</template>

<style scoped>
</style>