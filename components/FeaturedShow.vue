<script setup lang="ts">
const buttonLabel = 'Click Me'



const { data } = await useAsyncData(
  'data',
  () => $fetch('https://www.raptz.com/api/home/'),
  {
    default: () => [],
    transform: (data: any) => data.results[0].show
  }
)
</script>

<template>
    <section class="flex mx-48 my-32 h-96 gap-12  items-center">
        <div class="relative h-[456px] max-w-[456px] border-4  border-border-color rounded-xl shadow-bxsh">
            <img class="object-cover" :src="data.vignette" alt="">
            <img class="absolute bg-transparent top-20 right-[-2.5rem]" src="@/assets/img/play_icon.png" alt="">
        </div>
        <div class="mx-4">
            <h2 class="text-5xl">{{ data.titre }}</h2>
            <div v-html="data.description"  class="mt-8 font-normal"></div>
            <common-button :label="buttonLabel"></common-button>
        </div>

        
    </section>
    
</template>

<style scoped>

</style>