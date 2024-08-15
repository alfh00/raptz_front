<script setup>
useHead({
  titleTemplate: 'Radio Raptz',
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300..900&display=swap',
      crossorigin: ''
    }
  ]
})
</script>
<template>
    <div>
       <Header/>

        <!-- page content -->
        <div>
            <slot/>
        </div>

        <Footer/>
    </div>
</template>

<style scoped>

</style>

