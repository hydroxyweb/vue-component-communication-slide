<script setup lang="ts">

import ChildComponent from "@/examples/05/05-ChildComponent.vue";
import SecondChildComponent from "@/examples/05/05-SecondChildComponent.vue";
</script>

<template>
  <ChildComponent>
    <h5 class="parent-title">
      Gyere fiam!
    </h5>
  </ChildComponent>

  <SecondChildComponent>
    <template #head>
      Ez itt a fejléc
    </template>
    <template #body>
      Ez itt a <b>tartalom</b>
    </template>
  </SecondChildComponent>
</template>

<style scoped>
.parent-title {
  color: blue;
}
</style>