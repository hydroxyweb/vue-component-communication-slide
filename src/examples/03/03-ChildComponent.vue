<script setup lang="ts">
import {ref} from "vue";

const emit = defineEmits([
    'notify'
]);

const childAction = ref('');
const handleClick = (childMessage : string) => {
  emit('notify', childMessage);
  childAction.value = childMessage;
}
</script>

<template>
  Gyerek mondja: - {{ childAction }}<br>
  <button @click="handleClick('Éhes vagyok!')" class="child-action-btn">🍴</button>
  <button @click="handleClick('Focizni akarok!')" class="child-action-btn">⚽</button>
</template>

<style scoped>
</style>