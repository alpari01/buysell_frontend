<template>
  <div class="login mt-4">
    <div class="row">
      <div class="col-sm-3 mx-auto">
        <h1>Add new product</h1>
        <br>
        <form>
          <div class="mb-3">
            <input type="text" class="form-control" id="inputProductName" placeholder="Product name">
          </div>
          <div class="mb-3">
            <div class="form-floating">
              <textarea class="form-control" placeholder="Product description" id="inputProductDescription" style="height: 100px"></textarea>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Add</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

</style>