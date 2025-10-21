<script setup lang="ts">

import ChildComponent from "@/examples/03/03-ChildComponent.vue";
import {ref} from "vue";

const parentAction = ref('');
const handleNotify = (childMessage : string) : void => {
  switch(childMessage) {
    case 'Éhes vagyok!':
          parentAction.value = 'Mindjárt kész a vacsi!';
        break;
    case 'Focizni akarok!':
        parentAction.value = 'Nem mehetsz ki focizni, mert mindjárt kész a vacsi!';
      break;
  }
}
</script>

<template>
  <ChildComponent @notify="handleNotify"></ChildComponent>
  <br>
  Szülő mondja: - {{ parentAction }} <br>
</template>

<style scoped>
</style>