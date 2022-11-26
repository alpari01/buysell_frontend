<script setup>
import {ref, inject} from "vue";

const axios = inject('axios')
const userEmail = ref('')
const userPassword = ref('')

function login() {
  let requestBody = {
    userEmail,
    userPassword
  }
  axios.post('/api/public/login', requestBody)
}
</script>

<template>
  <div class="login mt-4">
    <div class="row">
      <div class="col-sm-3 mx-auto">
        <h1>Login</h1>
        <br>
        <form>
          <div class="form-group">
            <input v-model="userEmail" type="email" class="form-control" id="inputEmail" placeholder="Enter email">
          </div>
          <div class="form-group">
            <input v-model="userPassword" type="password" class="form-control" id="inputPassword" placeholder="Enter password">
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button v-on:click="login" class="btn btn-primary">Login</button>
        </form>
        <br>
        <div>
          <p>Do not have account yet? <router-link to="/register">Create now</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>