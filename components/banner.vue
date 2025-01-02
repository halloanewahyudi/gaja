<template>
  <div class="banner relative overflow-hidden w-full h-[340px] lg:h-[560px]">
    <div class="layer  absolute top-0 left-0 w-full h-full z-10"></div>
    <div class="banner-text absolute top-10 left-10 z-20 text-white flex flex-col gap-4">
        <h4 class="text-2xl font-semibold lg:text-4xl ">#1 <br> FRP molded <br> grating manufacturer <br> in Indonesia </h4>
        <NuxtLink to="/"
          class="flex items-center gap-2 p-2 rounded-lg hover:bg-[#ffffff54] duration-200 max-w-max"> Learn More
          <span class="rounded-full w-5 h-5 border border-white flex justify-center items-center">
            <IconsChevronRight class="w-3 h-3" />
          </span>
        </NuxtLink>
      </div>
    <div class="banner-wrapper relative w-full h-full">
      <div
        v-for="(item, index) in banners"
        :key="index"
        class="banner-item absolute top-0 left-0 w-full h-full opacity-0"
      >
        <img
          :src="item"
          alt="Banner"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap';

const banners = [
  './img-banner1.png',
  './img-banner2.jpg',
  './img-banner3.jpg'
];

onMounted(() => {
  const bannerItems = document.querySelectorAll('.banner-item');

  if (bannerItems.length > 0) {
    const timeline = gsap.timeline({ repeat:-1, yoyo: true, });
    bannerItems.forEach((item, index) => {
      timeline.to(item, {
        opacity: 1, // Fade in gambar
        scale: 1.1, // Efek zoom-in
        duration: 2, // Durasi tiap transisi
        ease: 'power2.inOut'
      })
      .to(item, {
        opacity: 0.3, // Fade out gambar
        duration: 1, // Waktu transisi keluar
        ease: 'power2.inOut'
      }, `+=1`) // Delay sebelum berpindah ke gambar berikutnya
    });
  }
   
  gsap.from('.banner-text', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power2.out',
    delay: 0.5,
    scrollTrigger: {
      trigger: '.banner',
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none none',
      scrub: 1
    }
  })

});
</script>

<style scoped>
.banner {
  position: relative;
  overflow: hidden;
}

.banner-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.banner-item {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0; /* Semua gambar disembunyikan awalnya */
  transform: scale(1); /* Awal tanpa zoom */
  transition: opacity 0.5s ease-in-out;
}
.layer {
  background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,0.9304096638655462) 0%, rgba(255,255,255,0.03405112044817926) 100%);
}
</style>
