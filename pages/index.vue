<script setup lang="ts">
import { useHomePageData } from '~/composables/useHomePageData'

const { data, pending, error } = useHomePageData()
</script>

<template>
    <div>
      
        <IndexHero/>
        <IndexFeaturedShow :show="data.show"/>
        <IndexFeaturedPodcasts :articles="data.articles"/>
        
        
        
    </div>
    
</template>

<style scoped>

</style>