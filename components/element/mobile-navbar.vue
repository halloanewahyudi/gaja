<template>
  <header class="lg:hidden fixed top-0 left-0 w-full z-50 bg-white py-2">
    <div class="px-6">
      <div class="flex items-center justify-between">
        <div class="logo">
          <img src="/logo.png" alt="" class="w-[200px]">
        </div>
        <button 
          @click="toggleMenu"
          class="rounded-full w-10 h-10 bg-primary text-white flex justify-center items-center"
        >
          <IconsMenu class="w-6 h-6" />
        </button>
        <button @click="toggleSearch" class="cursor-pointer rounded-full w-10 h-10 bg-primary text-white flex justify-center items-center">
          <IconsSearch />
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Menu -->
  <div v-if="openMenu" class="menu-mobile bg-white text-neutral-700 px-6 py-10 fixed top-[60px] w-full h-full max-h-max overflow-auto z-50">
    <ul class="flex flex-col divide-y divide-neutral-100">
      <li v-for="(item, index) in menu" :key="index" class=" hover:bg-neutral-50 px-4 py-2 duration-200">
        <div class="flex items-center justify-between">
          <NuxtLink :to="item.link" class="flex-1">
            {{ item.name }}
          </NuxtLink>
          <button 
            @click="toggleSubMenu(index)" 
            v-if="item.children"
            class="rounded-full w-8 h-8 flex justify-center items-center p-2 bg-neutral-200 text-primary"
          >
            <IconsChevronDown 
              class="w-4 h-4 transition-transform duration-300"
              :class="{'rotate-180': openSubMenus.includes(index)}"
            />
          </button>
        </div>
        <!-- Sub-Menu -->
        <ul 
          v-if="item.children && openSubMenus.includes(index)"
          class="pl-4 mt-2 border-l border-neutral-200"
        >
          <li v-for="(child, subIndex) in item.children" :key="subIndex">
            <NuxtLink :to="child.link" class="block py-1 text-sm">
              {{ child.name }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div v-if="openSearch" class="menu-overlay fixed top-[60px] left-0 w-full py-4 z-40 bg-primary ">
  <div class="container">
    <input type="search" class="w-full py-2 px-6 rounded-lg focus:outline-none text-neutral-600" placeholder="Search">
  </div>
  </div>
</template>

<script lang="ts" setup>
const openMenu = ref(false)
const { menu } = useMenu()
const { openSearch } = useOpenSearch()

// Mengontrol sub-menu terbuka berdasarkan indeks
const openSubMenus = ref<number[]>([])

const toggleMenu = () => {
  openMenu.value = !openMenu.value
  openSearch.value = false
}
// Fungsi untuk menampilkan/menyembunyikan sub-menu spesifik
const toggleSubMenu = (index: number) => {
  if (openSubMenus.value.includes(index)) {
    openSubMenus.value = openSubMenus.value.filter(i => i !== index)
  } else {
    openSubMenus.value.push(index)
  }
}

const toggleSearch = () => {
  openSearch.value = !openSearch.value
  openMenu.value = false
}
</script>


<style></style>