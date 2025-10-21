<script setup lang="ts">
import {ref, watch} from "vue";

const emit = defineEmits([
    'notify'
]);

const props = defineProps<{
  count: number
}>();

const childCount = ref(props.count);

watch(() => props.count, (newValue : number) => {
 childCount.value = newValue;
})

const emitNewValue = () => {
  emit('notify', childCount.value);
}
const increaseValue = () => {
  childCount.value = childCount.value + 1;
  emitNewValue();
}

const decreaseValue = () => {
  childCount.value = childCount.value - 1;
  emitNewValue();
}
</script>

<template>
  Szülőtől kapott érték: {{ props.count }}<br>
  Gyerek belső érték: {{ childCount }} <br>
  <button @click="increaseValue" class="child-action-btn">➕</button>
  <button @click="decreaseValue" class="child-action-btn">➖</button>
</template>

<style scoped>
</style>