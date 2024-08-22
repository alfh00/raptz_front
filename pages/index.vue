<script setup >

const { podcasts, home, styles, roadshows, partners } = await useHomePageData()

</script>

<template>
    <div>
      
        <IndexHero/>
        <IndexFeaturedContent />
        <IndexFeaturedShow :roadshow="roadshows"/>
        <IndexFeaturedPodcasts :podcasts="podcasts" :styles="styles"/>
        <IndexPartners :partners="partners"/>
        
    </div>
    
</template>

<style scoped>

</style>