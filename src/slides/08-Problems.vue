<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
</script>

<template>
  <div class="slide-wrapper">
    <Navigation
        :start="9"
        next-url="/slide/9"
        prev-url="/slide/7"
    ></Navigation>
    <div class="slide-content with-image">
      <div class="text-content">
        <h1>Ez szép és jó, de</h1>
        <h2>Mi van akkor, ha egy ős akar beszélni a leszármazottal?</h2>
        <p>
         Eddig olyan megoldásokat láttunk, amikor a szülő és a gyerek komponens egymás között
          tudnak kommunikálni. Ez kisebb rendszereknél, alkalmazásoknál jó, de amint elkezdjük egyre nagyobbra
          építeni, belefutunk abba, hogy több szülő-gyerek kapcsolatú komponens alakul ki.  Lesznek ük-,déd-,nagyszülők,szülők, sőt akár testvérek is.
        </p>
        <p>
          Képzeljük el, hogyan nézne ki a korábbi megoldásokkal egy ükszülő és ükunoka közötti kommunikáció!
        </p>


        <p>
          A testvér komponensek csak a szülő komponensen keresztül kommunikálhatnak egymással.
        </p>

        <p>
          Sajnos ebbe elég könnyű belefutni, mivel "először jó ötletnek tűnik" a megoldás. Aztán debuggolásnál
          elég nehéz végigkövetni, hogy mikor melyik komponensbe mi kerül átadásra, hogyan változik az érték,
          esetleg hogyan változnak meg az event emitek nevei.
        </p>

        <p>
          Szerencsére van két megoldás, amik a segítségünkre lesznek. 🦸
        </p>

      </div>
      <div class="image-content">
        <pre>
&lt;!-- GreatGreatGrandParent.vue --&gt;
&lt;GreatGrandParent :name=&quot;Name&quot; @update=&quot;handleUpdate()&quot; /&gt;

&lt;!-- GreatGrandParent.vue --&gt;
props = defineProps({name: String})
function handleUpdate() {
  emit('update');
}
&lt;GrandParent :name=&quot;props.name&quot; @update=&quot;handleUpdate()&quot; /&gt;

&lt;!-- GrandParent.vue --&gt;
props = defineProps({name: String})
function handleUpdate() {
  emit('update');
}
&lt;Parent :name=&quot;props.name&quot; @update=&quot;handleUpdate()&quot; /&gt;

&lt;!-- Parent.vue --&gt;
props = defineProps({name: String})
function handleUpdate() {
  emit('update');
}
&lt;ChildComponent :name=&quot;props.name&quot; @update=&quot;handleUpdate()&quot; /&gt;
        </pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>