<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
import Parent from "@/examples/05/05-Parent.vue";
</script>

<template>
  <div class="slide-wrapper">
    <Navigation
        :start="6"
        next-url="/slide/6"
        prev-url="/slide/4"
    ></Navigation>
    <div class="slide-content with-image">
      <div class="text-content">
        <h1>A gyerek kap egy dobozt, amit a szülő tölt meg 🎁</h1>
        <h2>Irány: Szülő → gyerek</h2>
        <p>
          A props-ok hátránya, hogy csak adatot, értéket, állapotokat, beállításokat tud átadni a szülő komponens a gyerek számára.
          Azonban gyakran szükségünk van arra, hogy az egyszerű adatoknál összetettebb tartalmat adjunk át.
        </p>
        <p>
          Ekkor jön jól a <b>slot</b>-ok használata, amelyek segítségével komplett HTML tartalmakat vagy akár más komponenseket is elhelyezhetünk a gyerek komponensen belül.
        </p>
        <p>
          Használhatunk nevesített slotokat is, így több slotba is át adhatunk tartalmat.
        </p>
        <h3>Élő példa:</h3>
        <Parent></Parent>

      </div>
      <div class="image-content">
        <pre>
&lt;!-- Parent.vue --&gt;
&lt;ChildComponent &gt;
  &lt;h2 style="color: red;"&gt; Üdvözöllek! &lt;/h2&gt;
&lt;/ChildComponent &gt;


&lt;!-- ChilComponent.vue --&gt;
&lt;template&gt;
  &lt;div class=&quot;card&quot;&gt;
    &lt;slot&gt;&lt;/slot&gt;
  &lt;/div&gt;
&lt;/template&gt;


// NEVESÍTETT SLOT
&lt;SecondChildComponent&gt;
  &lt;template #head&gt;
    Ez itt a fejléc
  &lt;/template&gt;
  &lt;template #body&gt;
    Ez itt a &lt;b&gt;tartalom&lt;/b&gt;
  &lt;/template&gt;
&lt;/SecondChildComponent&gt;

&lt;-- SecondChildComponent.vue --&gt;
&lt;template&gt;
  &lt;slot name=&quot;head&quot;&gt;&lt;/slot&gt;
  &lt;slot name=&quot;body&quot;&gt;&lt;/slot&gt;
&lt;/template&gt;
        </pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>