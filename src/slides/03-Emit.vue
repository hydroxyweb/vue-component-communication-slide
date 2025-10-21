<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
import Parent from "@/examples/03/03-Parent.vue";
</script>

<template>
  <div class="slide-wrapper">
    <Navigation
        :start="4"
        next-url="/slide/4"
        prev-url="/slide/2"
    ></Navigation>
    <div class="slide-content with-image">
      <div class="text-content">
        <h1>Anyaaa, kész vagyok! 🙋‍♀️</h1>
        <h2>Irány: Gyerek → szülő</h2>
        <p>
          A gyerek komponens hírt adhat állapotáról, állapotának változásáról a szülőnek.
        </p>
        <p>
          Ehhez a gyerek a szülővel <b>emit</b>-eken keresztül kommunikál, azaz jelzést küld arról, hogy valami történt vagy változott.
        </p>
        <p>
          A szülő dönti el, hogyan reagál erre az információra, így a gyerek nem fér hozzá közvetlenül a szülő állapotához, csak befolyásolni tudja a viselkedését.
        </p>
        <h3>Élő példa:</h3>
        <Parent></Parent>

      </div>
      <div class="image-content">
        <pre>
&lt;!-- Parent.vue --&gt;
&lt;ChildComponent @notify="handleNotify" /&gt;


&lt;!-- ChilComponent.vue --&gt;
const emit = defineEmits(['notify'])

// valahol a komponensben:
emit('notify', 'A gyerek állapota frissült')
        </pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>