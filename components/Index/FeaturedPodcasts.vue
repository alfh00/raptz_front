<script setup lang="ts">

defineProps({
    articles: Array
})
</script>

<template>

    <section class="h-screen xl:h-auto flex flex-col mx-8  xl:mx-24 xl:my-24 gap-12 items-center ">
        <h2 class="text-5xl">Articles</h2>
        <div class="w-full flex flex-row justify-around items-center">
            <div class=" " v-for="article in articles">
    
                <div class="">
                    <div class=" h-64">
                        <div class="shadow-bxsh border-4 h-[28rem] w-80  border-border-color rounded-xl overflow-hidden">
                            <div class="bg-transparent  ">
                                <img class="w-80 h-64 object-cover" :src="article.image" alt="">
                            </div>
                            <h3 class="text-2xl text-wrap">{{ article.titre}}</h3>
                            <div v-html="article.description.slice(0, 300) + '...'" class=""></div>
                            
                            
                        </div>
                    </div>
                    
                </div>
                
                

            </div>
        </div>
    </section>
    
</template>

<style scoped>

</style>