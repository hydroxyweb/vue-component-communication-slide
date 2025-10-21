<script setup lang="ts">
import { provide, reactive } from 'vue';
import Parent from "@/examples/10/10-Parent.vue";
const familySecretRecipe = reactive({
  title: 'Nagyi almáspitéje 🍎',
  ingredients: ['alma', 'fahéj', 'cukor', 'liszt', 'vaj'],
  instructions: 'Szeretet nélkül nem lesz finom! 💖'
});
provide('familySecretRecipe', familySecretRecipe);
</script>

<template>
  <div class="grandparent">
    <h2>👵 Nagyszülő</h2>
    <Parent />
  </div>
</template>

<style scoped>
.grandparent {
  border: 2px dashed #d1a23c;
  padding: 15px;
  margin: 15px;
  border-radius: 8px;
  background: #fffbe6;
}
</style>