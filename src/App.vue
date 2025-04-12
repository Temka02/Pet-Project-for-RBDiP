<template>
  <div class="container">
    <NavComp/>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import NavComp from './components/NavComp.vue';

export default {
  name: 'App',
  components: {
    NavComp,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@800&family=Roboto+Slab:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,800&display=swap');
/* @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap'); */
#app {
  /* font-family: 'Roboto Slab', serif; */
  /* font-family: 'Playpen Sans', cursive; */
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  font-weight: bold;
}
hr{
  border: 3px solid darksalmon;
}
</style>
