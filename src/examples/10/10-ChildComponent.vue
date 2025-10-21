<script setup lang="ts">
import { inject } from 'vue';

interface Recipe {
  title: string;
  ingredients: string[];
  instructions: string;
}

const recipe = inject<Recipe>('familySecretRecipe');
</script>

<template>
  <div class="child">
    <h4>🧒 Gyerek</h4>

    <div v-if="recipe">
      <h3>{{ recipe.title }}</h3>
      <ul>
        <li v-for="(item, i) in recipe.ingredients" :key="i">
          🧂 {{ item }}
        </li>
      </ul>
      <p><strong>Tanács:</strong> {{ recipe.instructions }}</p>
    </div>
    <div v-else>
      <p>Nem kaptam semmilyen receptet 😢</p>
    </div>
  </div>
</template>

<style scoped>
.child {
  border: 2px solid #aaa;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  background: #f9f9f9;
}
ul {
  padding-left: 20px;
}
</style>