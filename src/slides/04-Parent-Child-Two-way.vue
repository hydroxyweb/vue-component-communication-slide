<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
import Parent from "@/examples/04/04-Parent.vue";
</script>

<template>
  <div class="slide-wrapper">
    <Navigation
        :start="5"
        next-url="/slide/5"
        prev-url="/slide/3"
    ></Navigation>
    <div class="slide-content with-image">
      <div class="text-content">
        <h1>Egészséges párbeszéd a családban 🧘‍♂️</h1>
        <h2>Irány: Gyerek ↔ szülő (kétirányú)</h2>
        <p>
          A korábban említett props és emit használatával megvalósítható a szülő és a gyerek komponensek közötti kétirányú kommunikáció.
        </p>
        <p>
          Ennek egy rövidített változata a v-model, amelynek alkalmazásával a beépített update:modelValue eseményt használjuk.
        </p>
        <h3>Élő példa:</h3>
        <Parent></Parent>

      </div>
      <div class="image-content">
        <pre>
&lt;!-- Parent.vue --&gt;
&lt;ChildComponent @notify="handleNotify" :message="parentMessage"/&gt;


&lt;!-- ChilComponent.vue --&gt;
const emit = defineEmits(['notify'])
defineProps({ message: String });

// valahol a komponensben:
emit('notify', 'A gyerek állapota frissült');

**EGYSZERŰSÍTHETŐ V-MODEL DIREKTÍVÁVAL**
&lt;!-- Parent.vue --&gt;
&lt;ChildComponent v-model="parentMessage"/&gt;

&lt;!-- ChilComponent.vue --&gt;
defineProps<{ modelValue: string }>()
defineEmits(['update:modelValue'])
emit('update:modelValue', 'Új állapot');
        </pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>