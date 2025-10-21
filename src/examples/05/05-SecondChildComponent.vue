<script setup lang="ts">
</script>

<template>
  <h3 class="child-title"><slot name="head"></slot></h3>
  <slot name="body"></slot>
</template>

<style scoped>
h3.child-title {
  background: #42b883;
}
</style>