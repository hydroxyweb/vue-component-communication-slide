<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
import GrandParent from "@/examples/10/10-GrandParent.vue";
</script>

<template>
  <div class="slide-wrapper">
    <Navigation
        :start="11"
        next-url="/slide/11"
        prev-url="/slide/9"
    ></Navigation>
    <div class="slide-content with-image">
      <div class="text-content">
        <h1>A család titkos receptje 🤫</h1>
        <h2>Provide/Inject</h2>
        <p>
          Egy másik, bár ritkábban használt megoldás a provide/inject,
          aminek segítségével egy nagyszülő át tud adni egy unokájának valamilyen infót.
        </p>
        <p>
          A provide segítségével bármilyen adat átadható,
          és az inject segítségével bármelyik komponens hozzáférhet.
          Így a komponensfában mélyen lévő elemek is hozzáférhetnek adatokhoz anélkül, hogy
          a propokat minden szinten tovább kellene adni.
        </p>
        <p>
          Leginkább akkor használják,
          ha nem szükséges egy közös store-t létrehozni, mert csupán egy-két infóról van szó.
        </p>

      </div>
      <div class="image-content">
        <GrandParent />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>