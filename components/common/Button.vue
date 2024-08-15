<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  }
});
</script>

<template>
    
    <button class="py-4 px-4 rounded-xl bg-bg-orange text-white text-xl shadow-bxsh flex items-center">
    
      <!-- You can use an icon library here, such as FontAwesome or Heroicons -->
      <Icon v-if="icon" :name="icon" class="bg-white text-3xl"/>
    
    {{ label || '' }}
  </button>
    
</template>

<style scoped>

</style>