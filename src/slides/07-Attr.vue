<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
import Parent from "@/examples/07/07-Parent.vue";
</script>

<template>
  <div class="slide-wrapper">
    <Navigation
        :start="8"
        next-url="/slide/8"
        prev-url="/slide/6"
    ></Navigation>
    <div class="slide-content with-image">
      <div class="text-content">
        <h1>Nem esik messze az alma a fájától 🍎</h1>
        <h2>Irány: Szülő → gyerek, $attr forwarding</h2>
        <p>
          Lehetőség van arra is, hogy a szülő úgy adjon át a gyerek komponens számára
          attribútumokat, hogy eközben a gyerek komponensben nem specifikáljuk, hogy pontosan mit is várunk.
        </p>
        <p>
          Tipikus akkor használjuk, amikor wrapper komponenseket készítünk.
        </p>
        <p>
          💡 Az $attrs csak az attribútumokat (pl. class, id, style, data-*, disabled, stb.) adja tovább,
          nem a belső tartalmat (slotot).
        </p>
        <h3>Élő példa:</h3>
        <Parent></Parent>

      </div>
      <div class="image-content">
        <pre>
&lt;!-- Parent.vue --&gt;
&lt;ChildComponent class=&quot;fancy&quot; style=&quot;color: teal;&quot; /&gt;

&lt;!-- ChildComponent.vue --&gt;
&lt;template&gt;
  &lt;div&gt;A gyerek örökölte a szülő class és style attribútumát!&lt;/div&gt;
&lt;/template&gt;
        </pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>