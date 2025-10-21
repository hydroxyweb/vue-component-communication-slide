<script setup lang="ts">
import { onMounted, onBeforeUnmount, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute();

const slides = computed(() =>
    router.getRoutes().filter(r => r.meta?.slide === true)
);

const totalSlides = computed(() => slides.value.length);

const props = defineProps<{
  start : number,
  nextUrl ?: string,
  prevUrl ?: string
}>();

const handleKeydown = (event: KeyboardEvent) : void => {
  switch (event.key) {
    case 'ArrowLeft':
      if (props.prevUrl) {
        router.push(props.prevUrl)
      }
      break

    case 'ArrowRight':
      if (props.nextUrl) {
        router.push(props.nextUrl)
      }
      break
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <header class="slide-header">
    <div class="slide-counter">
      {{ props.start }} / {{ totalSlides }}
    </div>
    <div class="slide-controls">
      <router-link :to="props.prevUrl" class="router-link" v-if="props.prevUrl">◀</router-link>
      <router-link :to="props.nextUrl" class="router-link" v-if="props.nextUrl">▶</router-link>
    </div>
  </header>
</template>

<style scoped>
.slide-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(4px);
  font-size: 1rem;
}

.slide-counter {
  font-weight: 500;
  color: #333;
}

.slide-controls .router-link {
  font-size: 1.5rem;
  margin-left: 0.5rem;
  border: none;
  background: none;
  cursor: pointer;
  color: #333;
  transition: color 0.2s;
  text-decoration: none;
}

.slide-controls .router-link:hover {
  color: #42b883;
}

.slide-controls .router-link.disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.slide-counter {
  border-radius: 10px;
  background: rgba(0,0,0, 50%);
  padding: 5px;
  color: #FFF;
}

.slide-header::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 6px;
  background: linear-gradient(
      to right,
      #42b883 0%,
      #42b883 50%,
      #35495e 50%,
      #35495e 100%
  );
}
</style>