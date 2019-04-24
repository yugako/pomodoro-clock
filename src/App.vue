<template>
  <div id="app">
    <Clock />
  </div>
</template>
<script>
  import Clock from './views/Clock'
  export default {
    name: 'AppRoot',
    components: {
      Clock
    }
  }
</script>
<style lang="scss">
body {
   background-image: url('http://njitvector.com/wp-content/uploads/2014/05/time_flies.jpg');
   background-size: cover;
   background-attachment: fixed;
   background-position: 40% 50%;
   font-family: 'Righteous', cursive;
   &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.7);
    z-index: -1;
   }
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  max-width: 768px;
  width: 100%;
  margin: auto;
  
}

</style>
