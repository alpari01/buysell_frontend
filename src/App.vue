<script setup>
function logout() {
  localStorage.removeItem("token")
}
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/product/add">Test add product</router-link> |
    <router-link to="/login"><input type="button" class="btn btn-primary btn-sm" value="Login"></router-link> |
    <router-link to="/"><input type="button" class="btn btn-secondary btn-sm"
                               v-on:click="logout" value="Logout"></router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
