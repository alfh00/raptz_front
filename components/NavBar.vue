<script setup lang="ts">
import links from '@/assets/navLinks';
const drawer = ref(false)

</script>

<template>
   <div>
    <nav class="my-4 w-full flex items-center justify-between gap-12 border-border-color z-50 ">

        <div >
            <img class="bg-transparent" src="@/assets/img/raptz_logo.svg" alt="Raptz Logo">
        </div>
        
        <div class="hidden xl:block xl:relative w-full p-3 bg-bg-light rounded-xl">
            
            <ul class="flex items-center justify-around bg-transparent ">
                <li class="bg-transparent " v-for="link in links" :key="link.name">
                    <nuxt-link class="bg-transparent text-xl hover:text-bg-orange font-chauone text-darken font-normal" :to="link.path" >
                        {{ link.name }}
                    </nuxt-link>
                </li>
            </ul>
        </div>

        <!-- Drawer toggle button -->
        <div class="flex xl:hidden">
            <common-button
                :icon="drawer ? 'line-md:menu-to-close-transition' :'line-md:close-to-menu-transition'" 
                :label="''"
              @click="drawer = !drawer"
              class="inline-flex rounded-md focus:outline-none "
            />
        </div>
        <!-- Drawer Menu -->
        <div
        :class="[drawer ? 'translate-x-0' : '-translate-x-full']"
        class="xl:hidden fixed h-full top-0 left-0 z-50 transform transition-transform duration-500 ease-in-out"
        >
        <ul class="flex flex-col h-full items-center gap-6 rounded-r-lg shadow-bxsh pt-12">
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