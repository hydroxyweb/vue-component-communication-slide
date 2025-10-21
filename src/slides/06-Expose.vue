<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
import Parent from "@/examples/06/06-Parent.vue";
</script>

<template>
  <div class="slide-wrapper">
    <Navigation
        :start="7"
        next-url="/slide/7"
        prev-url="/slide/5"
    ></Navigation>
    <div class="slide-content with-image">
      <div class="text-content">
        <h1>A szülő csak azt látja, amit a gyerek megmutat 📖</h1>
        <h2>Irány: Szülő → gyerek</h2>
        <p>
          A gyerek komponens, a szülő számára megnyithatja függvényeit vagy azok egy részét, amiket a szülő komponens szabadon meghívhat.
        </p>
        <p>
          Ehhez a gyerek komponensben az <b>expose</b> megoldást kell alkalmazni,
          a szülő komponensben pedig a gyerek komponens
          reaktív hivatkozásán (<b>ref</b>) keresztül érhetők el a gyerek "publikus" függvényei.
        </p>
        <p>

        </p>
        <h3>Élő példa:</h3>
        <Parent></Parent>

      </div>
      <div class="image-content">
        <pre>
&lt;!-- Parent.vue --&gt;
const childRef = ref();
childRef.show();
&lt;ChildComponent ref="childRef" /&gt;


&lt;!-- ChilComponent.vue --&gt;
function _show(){...};
defineExpose({show: _show})
        </pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>