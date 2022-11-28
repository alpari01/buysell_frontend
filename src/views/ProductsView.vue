<script setup>
function isUserLoggedIn() {
  let token = JSON.parse(localStorage.getItem("token"));
  return token != null;
}
function addProduct() {
  if (isUserLoggedIn()) {
    const productTable = document.getElementById("productTable")

    const newProduct = document.createElement("div")
    newProduct.setAttribute("class", "col")

    const newProductLink = document.createElement("a")
    newProductLink.setAttribute("href", "www.google.com")
    newProductLink.innerHTML = "PRODUCT PAGE"

    newProduct.appendChild(newProductLink)

    productTable.appendChild(newProduct)
  }
  else alert("User not logged in.");
}
</script>

<template>
  <div class="col-sm-3 mx-auto">
    <input type="button" v-on:click="addProduct" class="btn btn-primary btn-bg" value="Add new product">
  </div>
  <div class="container text-center">
    <div class="row row-cols-4" id="productTable">
    </div>
  </div>
</template>

<style scoped>

</style>