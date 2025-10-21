<script setup lang="ts">
import {useLightSwitchStore} from "@/stores/lightswitch.ts";

const lightSwitchStore = useLightSwitchStore();
</script>

<template>
  <div class="switch-container">
    <label class="switch">
      <input type="checkbox" @change="lightSwitchStore.toggle" />
      <span class="slider"></span>
    </label>
    <p class="status-text">
      {{ lightSwitchStore.isLightOn ? 'BE' : 'KI' }}
    </p>
  </div>
</template>

<style scoped>
.switch-container {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  text-align: center;
}

.switch {
  position: relative;
  display: inline-block;
  width: 70px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}

.slider::before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #ffd166;
  box-shadow: 0 0 10px #ffdd55;
}

input:checked + .slider::before {
  transform: translateX(36px);
}

.status-text {
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
}
</style>