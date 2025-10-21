<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
</script>

<template>
  <div class="slide-wrapper">
    <Navigation
        :start="14"
        next-url="/slide/14"
        prev-url="/slide/12"
    ></Navigation>
    <div class="centered-div">
      <h1>Kérdés?</h1>
    </div>
  </div>
</template>

<style scoped>
</style>