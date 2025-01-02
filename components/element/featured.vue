<template>
  <div class="featured-item relative group overflow-hidden w-full h-[300px] lg:h-[480px]  tet-white">
    <div class="layer"></div>
    <img :src="props.image" alt="" srcset=""
      class="absolute top-0 left-0 w-full h-[300px] lg:h-[480px] object-cover group-hover:scale-125 group-hover:opacity-55 transition-all duration-500 ease-in-out ">
    <div class="featured-content text-white text-center relative flex flex-col gap-3  justify-end items-center w-full h-full px-4 py-6">
        <p class="text-sm">{{ props.subtitle }}</p>
        <h4 class="text-xl font-medium text-white">{{ props.title }}</h4>
        <NuxtLink to="/"
          class="flex items-center gap-2 p-2 rounded-lg hover:bg-[#ffffff54] duration-200 text-sm"> Learn More
          <span class="rounded-full w-5 h-5 border border-white flex justify-center items-center">
            <IconsChevronRight class="w-3 h-3" />
          </span>
        </NuxtLink>
      </div>
     
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type Props = {
  title: string,
  subtitle: string,
  description: string,
  image: string,
  link: string
}
const props = defineProps<Props>()



onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  const items = gsap.utils.toArray('.featured-item') as HTMLElement[]

  items.forEach((item) => {
    const content = item.querySelector('.featured-content') as HTMLElement

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top 75%',
        end: 'top 50%',
        scrub: 1,
      }
    })

    // Animasi .featured-item
    tl.fromTo(item, 
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: 'power1.out' }
    )

    // Animasi .featured-content (Fade-Up Delay)
    if (content) {
      tl.fromTo(content, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power1.out', delay: 1.5 }
      )
    }
  })
})
</script>

<style scoped>
.layer{
  @apply absolute top-0 left-0 right-0 bottom-0 w-full h-full;
  background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,0.9304096638655462) 0%, rgba(255,255,255,0.03405112044817926) 100%);
}
.featured-content {
  @apply relative max-w-[300px] mx-auto;
}
</style>