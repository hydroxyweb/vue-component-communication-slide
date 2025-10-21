<script setup lang="ts">
const props = defineProps<{
  parentMessage: string
}>();

const childResult = () => {
  switch (props.parentMessage) {
    case 'Írd meg a házidat!':
      return 'megírom a házimat.'
      break;
    case 'Menj fürdeni!':
      return 'megyek fürdeni.'
      break;
  }
}
</script>

<template>
  <p v-if="props.parentMessage">
    Szülő mondta: - {{ parentMessage }} <br>
    Gyerek mondja: - Oké anyu, {{ childResult() }}
  </p>
</template>

<style scoped>

</style>