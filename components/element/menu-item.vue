<template>
  <div>
    <NuxtLink :to="props.link" class="flex flex-col p-4 hover:bg-neutral-100">
     <h4 class="text-lg">{{ props.name }}</h4>
     <img v-if="props.image" :src="props.image" alt="" srcset="" class="hidden lg:block w-full h-280px object-cover">
     <p v-if="props.description" class="text-sm text-neutral-600 hidden lg:block">{{ props.description }}</p>
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