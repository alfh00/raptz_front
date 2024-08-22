<script setup lang="ts">
import links from '@/assets/navLinks'
import socials from '@/assets/socialLinks'
import ButtonSmall from './Common/ButtonSmall.vue';
</script>

<template>


<div>
    <footer class="flex justify-between p-16">
        <div>
            <div>
                <img  class="w-44 mb-2" src="@/assets/img/raptz_logo.svg" alt="">
                <span class="text-xl">BEATS</span>
                <span class="text-xl text-bg-orange">.</span>
                <span class="text-xl">MEDIA</span>
                <span class="text-xl text-bg-orange">.</span>
                <span class="text-xl">CULTURE</span>
            </div>
            <div class="flex mt-12 mb-4 gap-5">
                <NuxtLink class="flex justify-center items-center  bg-bg-light rounded-full w-10 h-10" v-for="social in socials" :key="social.name" :to="social.path" target="_blank">
                    <Icon class="bg-darken text-2xl" :name='social.icon'/>
                </NuxtLink>

            </div>
            <p class="text-sm font-light">Copyright © 2018 Raptz.com Tous droits réservés</p>
        </div>
        <div class="flex flex-col gap-1 xl:mr-32">
            <NuxtLink class="text-2xl" v-for="link in links" :key="link.name" :to="link.path">
                {{ link.name }}
            </NuxtLink>
        </div>
    
    </footer>
</div>
</template>

<style  scoped>

</style>