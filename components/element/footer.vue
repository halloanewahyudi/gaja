<template>
  <div class="pt-20 pb-5 text-neutral-200 text-sm">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="" v-for="item in footerContent" :key="item">
         <div>
           <h4 class="font-medium text-lg mb-2">{{ item.title }}</h4>
           <ul v-if="item.links" class="text-neutral-400">
             <li class="mb-2" v-for="subitem in item.links" :key="subitem">
               <NuxtLink :to="subitem.link" class="hover:text-primary duration-200">{{ subitem.name }}</NuxtLink>
             </li>
           </ul>
           <div v-if="item.contact" class="flex flex-col ">
             <h4 class="font-medium  mb-2">Address</h4>
             <p class="text-neutral-400 mb-2" v-html="item.contact.address "></p>
             <span class="flex items-center gap-2 mb-2">
              <IconsPhone class="w-4 h-4" /> {{item.contact.phone}}
             </span>
             <span class="flex items-center gap-2 mb-2">
              <IconsMail class="w-4 h-4" /> {{item.contact.email}}
              </span>
           </div>
           <div v-if="item.certificate" class="flex items-center gap-4 mt-10">
            <div class="" v-for="certificate in item.certificate" :key="certificate">
              <img :src="certificate" alt="" class="w-12">
            </div>
           </div>
         </div>
        </div>
      
      </div>
    </div>
  </div>
  <div class="footer-info py-4 border-t border-neutral-800 text-neutral-500 text-sm">
    <div class="container">
      <div class="flex items-center gap-2 justify-between">
           <p> COPYRIGHT 2025 PT. Graha Adhi Jaya Abadi.   |  All rights reserved </p>
          <div class="flex items-center gap-4">
                <IconsInstagram class="w-5 h-5 cursor-pointer" />
                <IconsLinkedin class="w-5 h-5 cursor-pointer" />
                <IconsYoutube class="w-5 h-5 cursor-pointer" />
              </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const {footerContent} = useFooter()
</script>

<style>

</style>