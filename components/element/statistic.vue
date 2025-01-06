<template>
  <div ref="statisticEl" class="statistic-item">
    <div class="flex flex-wrap items-end gap-2 text-primary">
      <div
        class="number font-medium text-4xl lg:text-6xl "
        ref="numberEl"
        v-html="formattedNumber"
      ></div>
      <div class="suffix text-lg" v-html="props.suffix"></div>
    </div>
    <p class="title text-lg mt-1 font-medium" v-html="props.title"></p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// 🛠️ **Props**
interface Props {
  no: number | string;
  suffix: string;
  title: string;
}

const props = defineProps<Props>();

// 🛠️ **Refs untuk elemen**
const statisticEl = ref<HTMLElement | null>(null);
const numberEl = ref<HTMLElement | null>(null);

// 🧠 **Formatted Number**
const formattedNumber = computed(() => {
  const num = Number(props.no);
  if (isNaN(num)) return 'Invalid Number';
  return num.toLocaleString('id-ID');
});

// 🚀 **Animasi GSAP saat di-scroll**
onMounted(() => {
  if (numberEl.value && statisticEl.value) {
    gsap.fromTo(
      numberEl.value,
      { textContent: 0 }, // Mulai dari 0
      {
        textContent: props.no,
        duration: 2, // Durasi animasi
        ease: 'power1.out',
        scrollTrigger: {
          trigger: statisticEl.value, // Elemen pemicu animasi
          start: 'top 90%', // Mulai saat elemen muncul di 90% viewport
          toggleActions: 'play none none none', // Hanya dimainkan sekali
        },
        onUpdate: () => {
          if (numberEl.value) {
            numberEl.value.textContent = Number(
              parseFloat(numberEl.value.textContent || '0')
            ).toLocaleString('id-ID');
          }
        },
      }
    );
  }
});
</script>

<style scoped>
.statistic-item {
  opacity: 0.9;
}
.number {
  font-variant-numeric: tabular-nums; /* Memastikan angka sejajar */
}
</style>
