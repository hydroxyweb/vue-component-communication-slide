<script setup lang="ts">
import {useLightSwitchStore} from "@/stores/lightswitch.ts";

const lightSwitchStore = useLightSwitchStore();
</script>

<template>
  <div class="color-picker-container">
    <input type="color"
           @change="lightSwitchStore.changeColor"
           :value="lightSwitchStore.color"
           class="color-picker"
    >
  </div>
</template>

<style scoped>

.color-picker-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  font-size: 1rem;
}

.color-picker {
  margin-top: 0.5rem;
  width: 80px;
  height: 40px;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 8px;
}
</style>