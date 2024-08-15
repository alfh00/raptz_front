<script setup lang="ts">
const buttonLabel = 'Click Me'

defineProps({
  show: Object
})
</script>

<template>
    <section class="h-screen xl:h-auto flex flex-col mx-8 xl:flex-row xl:mx-24 xl:my-24 gap-12 items-center ">
        <div class="relative border-4 max-w-96 border-border-color rounded-xl shadow-bxsh ">
          <div class="rounded-md overflow-hidden">
            <img class="object-cover" :src="show.vignette" alt="Emission">
          </div>
            <img class="absolute bg-transparent top-20 right-[-1.5rem] " src="@/assets/img/play_icon.png" alt="écouter émission">
        </div>
        <div class="mx-4">
            <h2 class="text-5xl">{{ show.titre }}</h2>
            <div v-html="show.description" class="mt-8 text-lg"></div>
            <common-button class="mt-8" :label="buttonLabel"></common-button>
        </div>

        
    </section>
    
</template>

<style scoped>

</style>