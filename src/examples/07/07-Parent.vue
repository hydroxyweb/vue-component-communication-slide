<script setup lang="ts">

import ChildComponent from "@/examples/07/07-ChildComponent.vue";
import {ref} from "vue";

const parentMessage = ref('');
const handleUpdate = (event : string) => {
  parentMessage.value = event;
}
</script>

<template>
  Gyerek üzenete a szülőnek: {{ parentMessage }}<br>
  <ChildComponent @click="handleUpdate('`A` gyerek szólt, hogy éhes')" class="parent-action-btn custom-btn-class">Éhes vagyok!</ChildComponent>
  <ChildComponent @click="handleUpdate('`B` gyerek szólt, hogy kész a házi')" class="parent-action-btn custom-btn-class-second">Kész a házi!</ChildComponent>

</template>

<style scoped>
.custom-btn-class-second {
  background: #0698E1;
  border: 2px solid #1046A3;
  border-radius: 5px;
  padding: 10px;
  font-size: 13pt;
}
</style>