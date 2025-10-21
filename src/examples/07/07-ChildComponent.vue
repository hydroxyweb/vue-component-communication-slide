<script setup lang="ts">
</script>

<template>
  <button v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<style scoped>
.custom-btn-class {
  background: #F4746E;
  border: 2px solid #B71C1F;
  border-radius: 5px;
  padding: 10px;
  font-size: 13pt;
}
</style>