<template>
  <div>
  
    <NuxtLink v-if="props.description"  :to="props.link" class="flex flex-col p-4 gap-3 hover:bg-neutral-50 duration-300 group">
     <h4 class="text-lg font-medium group-hover:text-primary">{{ props.name }}</h4>
     <div class="flex gap-2">
      <img v-if="props.image" :src="props.image" alt="" srcset="" class="hidden lg:block w-20 h-20 object-cover">
      <p  class="text-sm text-neutral-600 hidden lg:block">{{ props.description }}</p>
     </div>
    </NuxtLink>
    <NuxtLink v-else :to="props.link" class="p-2 hover:bg-neutral-50 hover:text-primary duration-300 block">{{ props.name }}</NuxtLink>
  </div>

</template>

<script lang="ts" setup>
type Props = {
  name: string,
  link: string,
  image: string,
  children: any,
  description: string,
}
  const props = defineProps<Props>()
</script>

<style>

</style>