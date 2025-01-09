<template>
  <div class="menu-wrapper" :class="showMegaMenu ? 'show-mega-menu' : ''">
    <ul class="flex items-center">
      <li v-for="item in menu" :key="item" @mouseenter="openMegaMenu(item)" @mouseleave="closeMegaMenu">
        <a href="" class="">{{ item.name }}"></a>
      </li>
    </ul>
    <div v-if="showMegaMenu" @mouseenter="showMegaMenu = true">
       {{ megaMenu }}
    </div>
  </div>
</template>

<script lang="ts" setup>
 const menu = ref([
   {
     name: 'Home',
     link: '/'
   },
   {
     name: 'About',
     link: '/about',
     children: [
       {
         name: 'Vision & Mission',
         link: '/about/vision-mission'
       },
       {
         name: 'Policy & Capability',
         link: '/about/policy-capability'
       },
       {
         name: 'Awwards & Acreditation',
         link: '/about/awwards-acreditation'
       }
     ]
   },
   {
     name: 'Contact',
     link: '/contact'
   }
 ])


 const megaMenu = ref(null)

const showMegaMenu = ref(false)

const openMegaMenu = (item) => {
  if (item.children && item.children.length > 0) {
    megaMenu.value = item.children
    showMegaMenu.value = true
  }else{
    showMegaMenu.value = false
  }
  console.log(item);
};

const closeMegaMenu = () => {
    showMegaMenu.value = false    
}
</script>

<style>

</style>