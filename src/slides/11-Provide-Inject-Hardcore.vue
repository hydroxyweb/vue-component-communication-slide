<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
</script>

<template>
  <div class="slide-wrapper">
    <Navigation
        :start="12"
        next-url="/slide/12"
        prev-url="/slide/10"
    ></Navigation>
    <div class="slide-content with-image">
      <div class="text-content">
        <h1>A család titkos receptje 🤫</h1>
        <h2>Provide/Inject Hardcore</h2>
        <p>
          A provide/inject egy szélsőséges verzióját alkalmaztam egy projektben:
          ott egy egyszerűbb store-t provideoltam és injectáltam.
          Erre azért volt szükség, mert az egyik komponenst kétszer kellett behúzni, csak némileg eltérő
          működéssel/megjelenéssel.
        </p>
        <p>
          Emiatt viszont mindkét komponensben a datepicker és a dropdown
          komponensek ugyanazt az állapotot vették fel: ha egyikben lenyílik akkor a másikban is. Ez pedig ahhoz vezetett, hogy az oldal gyakran szétcsúszott.
        </p>
        <p>
          Erre az a megoldás született, hogy a dátumválasztó és a dropdown komponensek
          állapotára létrehoztam egy store factory-t, amiben dinamikus elnevezéssel létrehozzuk a
          Pinia store-t a legfelső szinten, az ős komponensben. Ezt továbbpasszoljuk
          a duplán behúzott komponensnek,
          és az így props-ban átadott store-t provide-oljuk a leszármazott komponensekben.
        </p>
      </div>
      <div class="image-content">
        <img src="/src/images/planes.jpg">
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>