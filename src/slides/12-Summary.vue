<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
</script>

<template>
  <div class="slide-wrapper">
    <Navigation
        :start="13"
        next-url="/slide/13"
        prev-url="/slide/11"
    ></Navigation>
    <div class="slide-content with-image">
      <div class="text-content">
        <h1>Összegzés</h1>
        <ul>
          <li><b>props:</b> szülő → gyerek, egyszerűbb adatok</li>
          <li><b>emit:</b> gyerek → szülő </li>
          <li><b>props + emit/v-model:</b> szülő ↔ gyerek </li>
          <li><b>slots</b>: szülő → gyerek, összetettebb tartalmak, komponensek</li>
          <li><b>expose: </b> szülő → gyerek, a gyerek mondja meg, mihez fér hozzá a szülő</li>
          <li><b>$attr forwarding:</b>szülő → gyerek, wrapper komponensek</li>
          <li><b>store:</b> bárhonnan elérhető közös állapottér</li>
          <li><b>provide/inject</b>: ős → leszármazott, az ős komponens teszi elérhetővé</li>
        </ul>
      </div>
      <div class="image-content">

      </div>
    </div>
  </div>
</template>

<style scoped>
</style>