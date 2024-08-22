<script setup lang="ts">

defineProps({
    partners: Object
})

</script>

<template>
    <section>
        <div class="flex flex-col justify-center items-center bg-white py-16">
            <h2 class="text-darken text-5xl mb-8">NOS PARTENTAIRE !</h2>
            <p class="text-darken">De nombreux partenaires soutiennent Radio RapTz, la rapporteuz d’informations, d’actions sociales, artistiques et culturelles et, diffuseuze de musiques eclectiques et a-typiques.</p>
            <div class="flex flex-wrap justify-center items-center gap-6">
                <div class="flex justify-center items-center" v-for="partner in partners?.results">
                    <img v-if="partner.thumbnail" class="w-64 h-64  object-contain bg-transparent" :src="partner.thumbnail" :alt="partner.name">
                    
                </div>
                
            </div>
        </div>
        
    </section>
</template>

<style scoped>

</style>