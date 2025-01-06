<!-- src/components/NumberFormat.vue -->
<template>
  <span>{{ formattedNumber }}</span>
</template>

<script setup>
import { computed } from 'vue';

// Props untuk menerima angka
const props = defineProps({
  number: {
    type: [Number, String],
    required: true,
  },
});

// Format angka menggunakan computed property
const formattedNumber = computed(() => {
  const num = Number(props.number);
  if (isNaN(num)) return 'Invalid Number';
  return num.toLocaleString('id-ID');
});
</script>

