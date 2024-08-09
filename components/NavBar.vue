<script setup lang="ts">
import links from '@/assets/navLinks';
</script>

<template>
    <nav class="mainNavBar w-full flex items-center gap-12 border-border-color">
        <div >

            <img class="bg-transparent" src="@/assets/img/raptz_logo.svg" alt="">
        </div>
        <div class="absolute hidden xl:relative w-full h-full top-24 xl:top-auto xl:left-auto left-0 xl:mt-0 xl:w-auto">
            <ul class="flex flex-col items-center max-container gap-6 xl:flex-row bg-bg-orange xl:bg-transparent mx-12 xl:mx-0 py-12 xl:py-0 rounded-lg shadow-bxsh xl:shadow-none">
                <li class="bg-transparent text-white xl:text-black" v-for="link in links" :key="link.name">
                    <nuxt-link class="px-32 xl:px-0 py-2 bg-transparent text-2xl xl:text-base hover:bg-white hover:text-bg-orange " :to="link.path" >
                        {{ link.name }}
                    </nuxt-link>
                </li>
            </ul>
        </div>

    </nav>
    
</template>

<style scoped>

</style>