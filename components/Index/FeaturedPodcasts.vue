<script setup lang="ts">

defineProps({
    podcasts: Object,
    styles: Object
})
</script>

<template>

    <section class="flex flex-col mx-8  xl:my-24 gap-12 items-center overflow-hidden ">
        
        <h2 class="text-5xl">Podcasts</h2>
        
        <!-- Styles -->
        <div class="flex flex-wrap justify-center gap-6 mx-6">
            <span class="text-xl bg-bg-orange px-4 rounded-xl" v-for="style in styles?.results">
                {{ style.nom }}
            </span>
        </div>
        
        <!-- POdcasts Cards -->
        <div class="w-full flex flex-row justify-around items-center gap-2 flex-wrap">
            
            <article class="mb-6" v-for="podcast in podcasts?.results">
                
                <div v-if="podcast" class="">

                    <div class="">

                        <div class=" w-96 rounded-xl overflow-hidden">

                            <div class="bg-transparent  ">
                                <img class="w-96 h-96 object-cover" :src="podcast.show.vignette" alt="">
                            </div>
                            <div class="p-4 bg-bg-light">
                                <h3 class="h-16 text-2xl text-wrap bg-transparent text-darken">{{ podcast.titre}}</h3>
                                
                                <div class=" mt-4 ">
                                    <p class="text-darken bg-bg-light" >{{ podcast.show.courte_description }}</p>

                                </div>
                            </div>
                            
                        </div>

                    </div>
                    
                </div>
                
            </article>

        </div>

    </section>
    
</template>

<style scoped>

</style>