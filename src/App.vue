<script setup lang="ts"></script>

<template>
  <transition name="fade" mode="out-in">
  <router-view></router-view>
  </transition>
</template>

<style>
/* Fade in / out példa */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

</style>
