<template>
  <div class="relative min-h-screen w-full bg-gradient-to-t from-black to-gray-900">
   
      <IconsLoading v-if="loader" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-20 h-20 flex justify-center items-center" />
  
    <video-background  
    ref="videoBackground"
    src="./cover.mp4" 
    class="w-full  min-h-screen relative  text-white"
    poster="./cover.jpg"
    :loading="videoLoader"
    overlay="linear-gradient(0deg, rgba(0,0,0,0.14049369747899154) 0%, rgba(0,0,0,0.4654236694677871) 48%, rgba(0,0,0,0.6334908963585435) 100%)" >
  
      <div class="relative flex flex-col justify-end items-center w-full max-w-xl text-center mx-auto h-full py-20 px-6">
        <h1 class="text-3xl  font-semibold">Provide design, manufacturing, supply, and installation for FRP Pipes and Fittings</h1>
           <IconsArrowDownRounded class="animate-bounce mt-4 text-3xl" />
      </div>
 </video-background>
  </div>
</template>

<script lang="ts" setup>
const loader = ref(true)

const videoLoader = () => {
   // videoBackground.value.play()
    loader.value = false
}


</script>

<style>
.layer {
   @apply absolute top-0 left-0 w-full h-full;
background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,0.14049369747899154) 0%, rgba(0,0,0,0.4654236694677871) 48%, rgba(0,0,0,0.6334908963585435) 100%);
}
</style>