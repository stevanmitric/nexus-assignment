<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <VehicleSelector />
</template>

<script>
  import VehicleSelector from './components/VehicleSelector.vue';

  export default {
    name: 'App',
    components: {
      VehicleSelector,
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
