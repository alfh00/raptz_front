<script setup lang="ts">
import links from '@/assets/navLinks';
const drawer = ref(false)

</script>

<template>
   <div>
    <nav class="my-4 w-full flex justify-between items-center gap-12 border-border-color z-50">

        <div >
            <img class="bg-transparent" src="@/assets/img/raptz_logo.svg" alt="Raptz Logo">
        </div>

        <!-- Drawer toggle button -->
        <div class="flex xl:hidden">
            <common-button
                :icon="drawer ? 'line-md:menu-to-close-transition' :'line-md:close-to-menu-transition'" 
                :label="''"
              @click="drawer = !drawer"
              class="inline-flex items-center justify-center p-2 rounded-md focus:outline-none "
            />
        </div>

        <div class="hidden xl:block xl:relative w-full h-full top-24 xl:top-auto xl:left-auto left-0 xl:mt-0 xl:w-auto ">

            <ul class="flex flex-col items-center max-container gap-6 xl:flex-row bg-bg-orange xl:bg-transparent mx-12 xl:mx-0 py-12 xl:py-0 rounded-lg shadow-bxsh xl:shadow-none">
                <li class="bg-transparent text-white xl:text-black" v-for="link in links" :key="link.name">
                    <nuxt-link class="px-32 xl:px-0 py-2 bg-transparent text-2xl xl:text-xl hover:bg-white hover:text-bg-orange " :to="link.path" >
                        {{ link.name }}
                    </nuxt-link>
                </li>
            </ul>
        </div>

        <div
        :class="[drawer ? 'translate-x-0' : '-translate-x-full']"
        class="xl:hidden fixed h-full top-0 left-0 z-50 transform transition-transform duration-500 ease-in-out"
        >
        <ul class="flex flex-col h-full items-center gap-6 bg-bg-orange rounded-r-lg shadow-bxsh pt-12">
            <li class="bg-transparent text-white xl:text-black" v-for="link in links" :key="link.name">
            <nuxt-link class="px-32 xl:px-0 py-2 bg-transparent text-2xl xl:text-xl hover:bg-white hover:text-bg-orange" :to="link.path">
                {{ link.name }}
            </nuxt-link>
            </li>
        </ul>
        </div>


    </nav>

   </div>



</template>

<style scoped>

</style>