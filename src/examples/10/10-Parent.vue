<script setup lang="ts">
import ChildComponent from "@/examples/10/10-ChildComponent.vue";

</script>

<template>
  <div class="parent">
    <h3>👩 Szülő</h3>
    <p>
      "Én csak annyit tudok, hogy van benne alma."
    </p>
    <ChildComponent />
  </div>
</template>

<style scoped>
.parent {
  border: 2px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
}

.parent p {
  font-style: italic;
}
</style>