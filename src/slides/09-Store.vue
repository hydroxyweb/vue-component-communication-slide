<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
import Parent from "@/examples/09/09-Parent.vue";
</script>

<template>
  <div class="slide-wrapper">
    <Navigation
        :start="10"
        next-url="/slide/10"
        prev-url="/slide/8"
    ></Navigation>
    <div class="slide-content with-image">
      <div class="text-content">
        <h1>🧠 A család emlékkönyve</h1>
        <h2>Közös store használata</h2>
        <p>
          Az egyik és legelterjedtebb megoldás az, hogy létrehozunk valamilyen közös store-t (Vuex, Pinia),
          amiben
          minden állapotot, adatot letárolunk, és amibe kiszervezzük a minden komponens által használható
          függvényeket.
        </p>
        <p>
          A közös store előnye, hogy a komponens fán belül bármelyik komponens elérheti,
          és a benne lévő adatokat a megfelelő setter függvényeken
          keresztül módosíthatja. Az így módosított értékek az összes, a store-t használó komponens számára azonnal elérhető.
        </p>
      </div>
      <div class="image-content">
        <Parent></Parent>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>