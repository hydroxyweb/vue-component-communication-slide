<script setup lang="ts">

import ChildComponent from "@/examples/09/09-ChildComponent.vue";
import SiblingComponent from "@/examples/09/09-SiblingComponent.vue";
import SecondSiblingComponent from "@/examples/09/09-SecondSiblingComponent.vue";
</script>

<template>
  <SiblingComponent/>
  <SecondSiblingComponent/>
  <div class="bulbs">
    <ChildComponent/>
    <ChildComponent/>
    <ChildComponent/>
    <ChildComponent/>
    <ChildComponent/>
  </div>
</template>

<style scoped>
.bulbs {
  display: flex;
  justify-content: start;
  margin-top: 20px;
}
</style>