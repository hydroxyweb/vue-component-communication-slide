<script setup lang="ts">

import ChildComponent from "@/examples/04/04-ChildComponent.vue";
import {ref} from "vue";

const parentCount = ref(5);
const isParentListening = ref(true);

const changeListeningState = () : void => {
  isParentListening.value = !isParentListening.value;
}

const handleNotify = (newValue : number) : void => {
  if (isParentListening.value) {
    parentCount.value = newValue;
  }
}

const increaseValue = () => {
  parentCount.value = parentCount.value * 2;
}

const decreaseValue = () => {
  parentCount.value = parentCount.value / 2;
}
</script>

<template>
  Szülő által tárolt érték: {{ parentCount }} <br>
  <button @click="increaseValue" class="parent-action-btn">✖️</button>
  <button @click="decreaseValue" class="parent-action-btn">➗</button>
  <br>
  A szülő hallgat a gyerekre?
  <input type="checkbox"
         @change="changeListeningState"
         :checked="isParentListening"
  />
  <hr>
  <ChildComponent @notify="handleNotify" :count="parentCount"></ChildComponent>
</template>

<style scoped>
</style>