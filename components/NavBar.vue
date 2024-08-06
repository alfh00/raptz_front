<script setup lang="ts">
import links from '@/assets/navLinks';
</script>

<template>
    <nav class="mainNavBar flex justify-between items-center gap-7">
        <div class="bg-transparent">

            <img class="bg-transparent" src="@/assets/img/raptz_logo.svg" alt="">
        </div>
        <div>
            <ul class="flex justify-between items-center max-container gap-12">
                <li v-for="link in links" :key="link.name">
                    <nuxt-link :to="link.path" class="">
                        {{ link.name }}
                    </nuxt-link>
                </li>
            </ul>
        </div>
        <div>
            <RadioPlayer/>
        </div>
    </nav>
    
</template>

<style scoped>

</style>