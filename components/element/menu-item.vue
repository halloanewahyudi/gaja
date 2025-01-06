<template>
  <div>
    <NuxtLink :to="props.link" class="flex flex-col p-4 gap-3 hover:bg-neutral-50 duration-300">
     <h4 class="text-lg font-medium  ">{{ props.name }}</h4>
     <div class="flex gap-2">
      <img v-if="props.image" :src="props.image" alt="" srcset="" class="hidden lg:block w-20 h-20 object-cover">
      <p v-if="props.description" class="text-sm text-neutral-600 hidden lg:block">{{ props.description }}</p>
     </div>
     
    </NuxtLink>
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