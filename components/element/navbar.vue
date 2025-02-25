<template>
  <header :class="{ 'show-dropdown': showMegaMenu && menuChildren.length > 0 }"
    class="hidden lg:block fixed top-0 left-0 w-full h-[90px] z-[1000] ">
    <div ref="navbar" class="navbar ">
      <div class="container">
        <nav class="flex  items-center gap-6 lg:gap-10">
          <div class="logo mr-auto">
            <img src="/logo.png" alt="" class="w-[260px]">
          </div>
          <div class="menu  ">
          
            <ul class="lg:flex items-center gap-4  ">
              <li  @mouseenter="handleMegaMenu(item)"
              @mouseleave="showMegaMenu = false" v-for="(item, index) in menu"
                :key="item" class="relative group" :class="{ 'mega-menu': item.children }">
                <NuxtLink :to="item.link" class="" :class="{ 'active': index === 0 }">{{ item.name }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="flex items-center gap-4">
          <div class="flex items-center gap-4 border border-neutral-200 rounded-full bg-white overflow-hidden">
            <div v-if="openSearch" class="  bg-white">
              <input type="search" class="w-full py-2 px-6 rounded-lg focus:outline-none text-neutral-600" placeholder="Search">
            </div>
            <button @click="openSearch = !openSearch"
              class="rounded-full w-10 h-10 bg-primary text-white flex justify-center items-center">
              <IconsSearch />
            </button>
          </div>
          <button class="rounded-full w-10 h-10 bg-primary text-white flex justify-center items-center border border-neutral-200"><IconsGlobe class="w-6 h-6" /></button>
        </div>
        </nav>
      </div>
    </div>
    
    <div ref="megaMenu" class="mega-menu-wrapper" :class="parentClass" @mouseenter="showMegaMenu = true" @mouseleave="showMegaMenu = false" >
      <div class="sub-menu-content container bg-white p-6">
        <img v-if="menuImage" :src="menuImage" alt="" srcset="" class="w-[300px] min-h-full object-cover ">
        <ul>
          <li v-for="item in menuChildren" :key="item">
            <ElementMenuItem :name="item.name" :link="item.link" :image="item.image" :description="item.description" />
          </li>
        </ul>
      </div>
    </div>

  </header>


</template>

<script lang="ts" setup>
import gsap from 'gsap';

const { openSearch } = useOpenSearch()
const { menu } = useMenu()
const menuChildren = ref([])
const parentClass = ref('')
const navbar = ref(null)
const megaMenu = ref(null)
const showMegaMenu = ref(false)
const menuImage = ref(null)

const handleScroll = () => {
  if (navbar.value) {
    if (window.scrollY > 50) {
      navbar.value.classList.add('scrolled')
    } else {
      navbar.value.classList.remove('scrolled')
    }
  }
}


const handleMegaMenu = (item) => {
  menuChildren.value = item.children || [];
  parentClass.value = item.class || '';
  menuImage.value = item.image || null;

  if (item.children && menuChildren.value.length > 0) {
    showMegaMenu.value = true;
    gsap.fromTo(
      megaMenu.value,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.2, ease: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' }
    );
  }
};



onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<style scoped>
header .menu a {
  @apply font-normal;
}

.navbar {
  @apply relative;
}

.navbar.scrolled {
  @apply bg-white duration-200 ease-in-out border-b border-neutral-300;

}

.navbar .logo img {
  @apply filter brightness-0 invert;
}

.navbar.scrolled .logo img {
  @apply filter-none;
}

.navbar {
  @apply text-white;
}

.navbar.scrolled {
  @apply text-neutral-700 font-light;
}

.menu li>a {
  @apply h-[70px] flex justify-center items-center ;
}

.menu li a::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-primary;
  transition: width 0.2s ease-in-out;
}

.menu li a:hover::after {
  width: 100%;
}

.mega-menu-wrapper {
  @apply hidden hover:block fixed top-[70px] left-0 w-full h-full z-50 overflow-y-auto;
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

.show-dropdown .mega-menu-wrapper {
  @apply block;
}

.sub-menu ul {
  @apply flex flex-col gap-2;
}

.sub-menu.mega-menu {
  @apply pb-20;
}

.sub-menu.mega-menu ul {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4;
}

.mega-menu-wrapper .sub-menu-content {
  @apply overflow-y-auto;

}
.sub-menu.image-menu .sub-menu-content{
   @apply grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6;
}
.sub-menu.image-menu .sub-menu-content img{
  @apply w-full md:col-span-1 lg:col-span-2;
}
.sub-menu.image-menu .sub-menu-content ul{
  @apply md:col-span-2 lg:col-span-4;
}
.sub-menu.image-menu .sub-menu-content ul li a{
  @apply font-normal p-1 leading-none ;
  }
</style>