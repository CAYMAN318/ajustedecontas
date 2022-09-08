<template>
  
  <MainNavBar />
  
  
  
  <router-view/>
</template>

<script>
import MainNavBar from './components/MainNavBar.vue';




  
export default {
  name : "App",
  components: {
    MainNavBar,
    
  }
}
</script>

<style>

</style>