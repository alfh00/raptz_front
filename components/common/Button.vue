<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true
  }
});
</script>

<template>
    
    <button class="mt-10 py-4 px-6 rounded-xl bg-bg-orange text-white text-xl shadow-bxsh">{{ label }}</button>
    
</template>

<style scoped>

</style>