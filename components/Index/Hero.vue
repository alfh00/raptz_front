<script setup lang="ts">
const buttonLabel = 'Learn More'


</script>

<template>
    <section class="h-[34rem] mx-8 flex flex-row gap-2 rounded-xl">

        <div class="hero-container relative flex items-center bg-bg-light rounded-xl overflow-hidden">
            
            <div class="self-start bg-transparent">

                <img class="ml-22 xl:ml-32  xl:w-2/4 object-cover bg-transparent"  src="@/assets/img/hero-img.webp" alt="raptz-music media culture">
            </div>

        </div>

    </section>
</template>

<style scoped>
.hero-container {
    background-image: url('@/assets/img/hero-bg.png');
    background-size: cover;
    background-position: 30%;
}
</style>
