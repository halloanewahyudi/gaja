<template>
  <div ref="statisticEl" class="statistic-item">
    <div class="flex items-end gap-2 text-primary">
  
      <div class="number font-medium text-3xl lg:text-7xl" ref="numberEl"> {{ lorem }}</div>
      <div class="suffix text-xl" >Doloret</div>
    </div>
    <p class="title text-lg mt-2"> Sitamet</p>
  </div>
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Refs untuk elemen yang akan dianimasikan
const statisticEl = ref<HTMLElement | null>(null);
const numberEl = ref<HTMLElement | null>(null);
const lorem = ref('loremipsum')
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  if (numberEl.value && statisticEl.value) {
    gsap.fromTo(
      numberEl.value,
      { textContent: 0 }, // Mulai dari 0
      {
        textContent:lorem.value ,
        duration: 2, // Durasi animasi
        ease: 'power1.out',
        scrollTrigger: {
          trigger: statisticEl.value, // Trigger pada elemen .statistic-item
          start: 'top 90%', // Animasi mulai saat elemen mencapai 80% viewport
          toggleActions: 'play none none none', // Hanya dimainkan sekali
        },
        snap: { textContent: 1 }, // Membulatkan angka ke integer
        onUpdate: () => {
          numberEl.value!.textContent = Math.round(
            parseFloat(numberEl.value!.textContent || '0')
          ).toString();
        }
      }
    );
  }
});
</script>

<style scoped>

</style>
