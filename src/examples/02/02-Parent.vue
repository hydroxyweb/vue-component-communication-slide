<script setup lang="ts">

import ChildComponent from "@/examples/02/02-ChildComponent.vue";
import {ref} from "vue";

const parentMessage = ref('');
const changeMessage = (newMessage : string) : void => {
  parentMessage.value = newMessage;
}
</script>

<template>
  <h4>Szülő</h4>
  <button @click="changeMessage('Írd meg a házidat!')" class="parent-action-btn">✍️</button>
  <button @click="changeMessage('Menj fürdeni!')" class="parent-action-btn">🛁</button>
  <ChildComponent :parentMessage="parentMessage"></ChildComponent>
</template>

<style scoped>
</style>