<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  icon: {
    type: String || null,
    default: ''
  }
});
</script>

<template>
    
    <button class="px-6 py-1 rounded-xl bg-darken text-xl flex justify-center items-center gap-4">

      <span class="text-lg font-light">{{ label || '' }}</span>
      <div class="flex items-center">

        <Icon v-if="icon" :name="icon" class="bg-bg-light text-3xl"/>
      </div>
    
  </button>
    
</template>

<style scoped>

</style>