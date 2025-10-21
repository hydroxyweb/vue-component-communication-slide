<script setup lang="ts">

import {useLightSwitchStore} from "@/stores/lightswitch.ts";
const lightSwitchStore = useLightSwitchStore();
</script>

<template>
  <div
      class="bulb"
      :style="{
      backgroundColor: lightSwitchStore.isLightOn ? `${lightSwitchStore.color}` : 'gray',
      boxShadow: lightSwitchStore.isLightOn ? `0 0 20px ${lightSwitchStore.color}` : 'none'
    }"
  ></div>
</template>

<style scoped>
.bulb {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 10px;
  transition: all 0.3s ease;
}
</style>