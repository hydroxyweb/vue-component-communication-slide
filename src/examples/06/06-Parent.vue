<script setup lang="ts">

import ChildComponent from "@/examples/06/06-ChildComponent.vue";
import {ref} from "vue";

const childRef = ref();

const changeColorRed = () => {
  childRef.value.changeRed();
}

const changeColorBlue = () => {
  childRef.value.changeBlue();
}

const changeOrange = () => {
  childRef.value.color = 'orange';
}

</script>

<template>
  Szülő: <br>
  <button @click="changeColorRed" class="parent-action-btn">🔴</button>
  <button @click="changeColorBlue" class="parent-action-btn">🔵</button>
  <button @click="changeOrange" class="parent-action-btn">🟠</button>
  <br><hr>
  Gyerek: <br>
  <ChildComponent ref="childRef"></ChildComponent>
</template>