<template>
  <div id="app">
    <router-link to="/home">
      <img class="logo" src="./assets/logo.png">
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
  margin-top: 60px;
  max-width: 1400px;
}

.logo {
  max-height: 100px;
  margin-bottom: 20px;
  user-select: none;
}
</style>
