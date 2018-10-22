<template>
  <div id="app">

    <!-- Navbar -->
    <Navbar />
    <div class="container mt-3 text-left">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar'
  export default{
    data(){
      return{

      }
    },
    components:{
      Navbar
    }
    
  }
</script>

