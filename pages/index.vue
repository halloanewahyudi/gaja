<template>
  <div>
    <Cover />
    <section>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="" v-for="item in featured" :key="item">
          <ElementFeatured :image="item.image" :title="item.title" :subtitle="item.subtitle"></ElementFeatured>
        </div>
      </div>
    </section>
    <section class="bg-white py-20">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="" v-for="item in counter" :key="item">
            <ElementStatistic :title="item.title" :no="item.no" :suffix="item.suffix"></ElementStatistic>
          </div>
        </div>
      </div>
    </section>
    <section>
      <Banner/>
    </section>
  </div>
</template>

<script lang="ts" setup>
// add body class
useHead({
  bodyAttrs: {
    class: 'home-page'
  }
})

const { featured, counter } = useHome()

</script>

<style scoped></style>