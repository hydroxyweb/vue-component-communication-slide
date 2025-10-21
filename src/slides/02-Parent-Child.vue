<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
import Parent from "@/examples/02/02-Parent.vue";
</script>

<template>
  <div class="slide-wrapper">
    <Navigation
        :start="3"
        next-url="/slide/3"
        prev-url="/slide/1"
    ></Navigation>
    <div class="slide-content with-image">
      <div class="text-content">
        <h1>A szülő tanítja a gyereket 👨‍🏫</h1>
        <h2>Irány: Szülő → gyerek</h2>
        <p>
          A szülő komponens továbbadja a "tudását" a gyerek komponensnek, de csak olvasásra. A gyerek komponens nem írhatja felül a
          szülőtől kapott értéket, csak a viselkedése változthat meg az új információ hatására.
        </p>
        <p>
          A szülő a gyerekkel <b>props</b> attribútumon keresztül kommunikál egymással.
        </p>

        <h2>Élő példa:</h2>
        <Parent></Parent>

      </div>
      <div class="image-content">
        <pre>
&lt;!-- Parent.vue --&gt;
&lt;ChildComponent :message="parentMessage" /&gt;

&lt;!-- ChildComponent.vue --&gt;
defineProps({ message: String });
        </pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>