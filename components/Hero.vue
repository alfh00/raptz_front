<script setup lang="ts">
const buttonLabel = 'Learn More'


</script>

<template>
    <section class="h-[34rem] mx-12 my-12 flex flex-row">
        <div class="relative basis-3/5 hidden xl:block py-36 border-4 border-border-color rounded-lg">
            <div class="ml-12 mr-36">
                <h1 class="text-7xl bg-transparent">This is a Sample Header</h1>
                <div class="absolute bg-transparent right-0 mr-12">
                    <Icon class="absolute left-1 top-1 bg-black shadow-bxshb" name="ph:fast-forward-fill" size="6rem" />
                    <Icon class="bg-bg-orange" name="ph:fast-forward-fill" size="6rem" />
                </div>
                <p class="bg-transparent text-xl mt-10 mr-14">Lorem ipsum dolor sit amet consectetur. Duis elit sed aliquet amet. Sit amet viverra risus nisl posuere pellentesque id venenatis nisl.</p>
                <common-button :label="buttonLabel"></common-button>
            </div>
        </div>
        <div class="relative xl:basis-2/5 border-4 border-border-color rounded-lg overflow-hidden">
            <img class="object-cover"  src="@/assets/img/hero-img.webp" alt="raptz-music media culture">
            <div class="absolute xl:hidden bottom-12 bg-transparent">
                <h1 class="text-7xl text-bg-orange bg-transparent">This is a Sample Header</h1>
                <p class="bg-transparent text-bg-orange">Lorem ipsum dolor sit amet consectetur. Duis elit sed aliquet amet. Sit amet viverra risus nisl posuere pellentesque id venenatis nisl.</p>
            </div>
            <div class="absolute bg-bg-orange bottom-10 left-10 h-16 w-16 p-2 rounded-lg shadow-bxshw ">
                <Icon class="w-12 h-12" name="mage:music" />    
            </div>           
        </div>        
    </section>
</template>

<style scoped>
</style>
