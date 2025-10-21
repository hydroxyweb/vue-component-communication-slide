<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
</script>

<template>
  <div class="slide-wrapper">
    <Navigation
        :start="2"
        next-url="/slide/2"
        prev-url="/"
    ></Navigation>
    <div class="slide-content with-image">
      <div class="text-content">
      <h1>Ismerjük meg a Vue-családot!</h1>
      <h2>A Vue komponensmodell bemutatása</h2>
      <p><b>🧩 Mit jelent a komponens szemlélet?</b></p>
      <ul>
        <li>
          Egy nagy alkalmazást kisebb, önálló egységekre bontunk.
        </li>
        <li>
          Minden komponens a saját logikáját, stílusát és sablonját kezeli.
        </li>
        <li>
          Megkülönböztetünk: nagyszülő, szülő, gyerek, testvér komponenseket.
        </li>
      </ul>

      <p><b>⚙️ Miért jó ez?</b></p>
      <ul>
        <li>
          Újrahasznosítható részek → nem kell újraírni egy gombot, modalt, kártyát.
        </li>
        <li>
          Karbantarthatóbb → lokális stílus, lokális state.
        </li>
        <li>
          Könnyebb tesztelni → egy komponens egy dolgot csinál.
        </li>
        <li>
          Jobban skálázható → egyre nagyobb projektekben is kezelhető.
        </li>
      </ul>

      <p><b>😅 De mi a gond?</b></p>
      <ul>
        <li>
          A komponensek elszigeteltek → alapból nem látják egymás állapotát.
        </li>
        <li>
          Nem beszélnek egymással. 😞
        </li>
      </ul>
      </div>
      <div class="image-content">
      <img src="/src/images/components.png" alt="Vue komponens modell">
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>