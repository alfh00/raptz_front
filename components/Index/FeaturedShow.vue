<script setup lang="ts">
defineProps({
  roadshow: Object
})
</script>

<template>
    <section class="flex flex-col xl:flex-row justify-between items-center mx-8 p-12 bg-bg-light rounded-xl">

      <div class="">
        <h2 class="hidden text-5xl text-darken ">Emissions</h2>
        <div class="w-[22rem] mb-12 ">  
          <img class="bg-transparent" src="@/assets/img/agenda.png" alt="">
        </div>
      </div>
      <div class="">
        <div class="felx xl:flex-row flex-row-reverse">
          <div class="mb-6">
            <span class="bg-bg-orange text-2xl px-4 py-2 rounded-xl">18</span>
            <span class="text-2xl p-2 rounded-xl text-darken">SEP</span>
            <span class="text-2xl p-2 rounded-xl text-darken">2024</span>
          </div>
          <span class=" text-2xl p-2 rounded-xl text-darken">à l'adresse suivante</span>
        </div>
        <h3 class=" text-darken text-3xl py-6">{{ roadshow?.results[0].nom }}</h3>
        <CommonButtonSmall class="ml-auto my-2" icon="basil:arrow-right-outline" label="En Savoir Plus"/>
      </div>

    </section>
</template>

<style scoped>

</style>