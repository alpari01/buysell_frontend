<template>
  <div class="login mt-4">
    <div class="row">
      <div class="col-sm-3 mx-auto">
        <h1>Login</h1>
        <br>
        <form>
          <div class="form-group">
            <input type="email" class="form-control" id="inputEmail" placeholder="Enter email">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" id="inputPassword" placeholder="Enter password">
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
        <br>
        <div>
          <p>Do not have account yet? <router-link to="/register">Create now</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

</style>