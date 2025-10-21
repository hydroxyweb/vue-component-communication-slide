<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
</script>

<template>
  <div class="slide-wrapper">
    <Navigation
    :start="1"
    next-url="/slide/1"
    ></Navigation>
    <div class="centered-div">
      <h1>Családi drámák Vue-ban</h1>
      <h2>Amikor a gyerek visszaszól a szülőnek</h2>
    </div>
  </div>
</template>

<style scoped>
</style>