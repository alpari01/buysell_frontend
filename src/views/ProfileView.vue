<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
      userData: [],
      page: 0
    }
  },

  methods: {
    async goPageForward() {
      if ((await axios.get("/api/public/products3?page=" + (this.page + 1) + "&orderBy=id&userId=" + this.userData.id)).data.length > 0) {
        this.page++
        this.products = (await axios.get("/api/public/products3?page=" + this.page + "&orderBy=id&userId=" + this.userData.id)).data
        console.log(this.products)
      }
    },

    async goPageBack() {
      if (this.page > 0) {
        this.page--
        this.products = (await axios.get("/api/public/products3?page=" + this.page + "&orderBy=id&userId=" + this.userData.id)).data
        console.log(this.products)
      }
    },

    async productRemove(productId) {
      await axios.delete("/api/public/products/" + productId)
    },

    async productUpdate(productId, productName, productDescription, productPrice, productCategory, imageId) {
      localStorage.setItem("productId", productId)
      localStorage.setItem("productName", productName)
      localStorage.setItem("productDescription", productDescription)
      localStorage.setItem("productPrice", productPrice)
      localStorage.setItem("productCategory", productCategory)
      localStorage.setItem("imageId", imageId)
    }
  },

  async created() {
    if (localStorage.getItem("token")) {
      this.userData = (await axios.get("/api/users/" + localStorage.getItem("userId"))).data;
      this.products = (await axios.get("/api/public/products3?page=0&orderBy=id&userId=" + this.userData.id)).data;
      localStorage.setItem("userBalance", this.userData["balance"]);
    }
    else {
      this.userData["firstName"] = "User is not logged in"
      this.userData["lastName"] = ""
      this.userData["email"] = ""
    }
  },
}
</script>

<template>
  <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
      <div class="col-md-3 border-right">
        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
          <img alt="avatar" class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg">
          <div class="col-md-12"><label class="labels">Balance</label><h4>{{ userData.balance }} EUR</h4></div>
          <router-link to="/balance/add"><button class="btn btn-link" aria-label="Add balance" style="opacity: 1;">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-plus-circle-dotted" viewBox="0 0 16 16">
              <path d="M8 0c-.176 0-.35.006-.523.017l.064.998a7.117 7.117 0 0 1 .918 0l.064-.998A8.113 8.113 0 0 0 8 0zM6.44.152c-.346.069-.684.16-1.012.27l.321.948c.287-.098.582-.177.884-.237L6.44.153zm4.132.271a7.946 7.946 0 0 0-1.011-.27l-.194.98c.302.06.597.14.884.237l.321-.947zm1.873.925a8 8 0 0 0-.906-.524l-.443.896c.275.136.54.29.793.459l.556-.831zM4.46.824c-.314.155-.616.33-.905.524l.556.83a7.07 7.07 0 0 1 .793-.458L4.46.824zM2.725 1.985c-.262.23-.51.478-.74.74l.752.66c.202-.23.418-.446.648-.648l-.66-.752zm11.29.74a8.058 8.058 0 0 0-.74-.74l-.66.752c.23.202.447.418.648.648l.752-.66zm1.161 1.735a7.98 7.98 0 0 0-.524-.905l-.83.556c.169.253.322.518.458.793l.896-.443zM1.348 3.555c-.194.289-.37.591-.524.906l.896.443c.136-.275.29-.54.459-.793l-.831-.556zM.423 5.428a7.945 7.945 0 0 0-.27 1.011l.98.194c.06-.302.14-.597.237-.884l-.947-.321zM15.848 6.44a7.943 7.943 0 0 0-.27-1.012l-.948.321c.098.287.177.582.237.884l.98-.194zM.017 7.477a8.113 8.113 0 0 0 0 1.046l.998-.064a7.117 7.117 0 0 1 0-.918l-.998-.064zM16 8a8.1 8.1 0 0 0-.017-.523l-.998.064a7.11 7.11 0 0 1 0 .918l.998.064A8.1 8.1 0 0 0 16 8zM.152 9.56c.069.346.16.684.27 1.012l.948-.321a6.944 6.944 0 0 1-.237-.884l-.98.194zm15.425 1.012c.112-.328.202-.666.27-1.011l-.98-.194c-.06.302-.14.597-.237.884l.947.321zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a6.999 6.999 0 0 1-.458-.793l-.896.443zm13.828.905c.194-.289.37-.591.524-.906l-.896-.443c-.136.275-.29.54-.459.793l.831.556zm-12.667.83c.23.262.478.51.74.74l.66-.752a7.047 7.047 0 0 1-.648-.648l-.752.66zm11.29.74c.262-.23.51-.478.74-.74l-.752-.66c-.201.23-.418.447-.648.648l.66.752zm-1.735 1.161c.314-.155.616-.33.905-.524l-.556-.83a7.07 7.07 0 0 1-.793.458l.443.896zm-7.985-.524c.289.194.591.37.906.524l.443-.896a6.998 6.998 0 0 1-.793-.459l-.556.831zm1.873.925c.328.112.666.202 1.011.27l.194-.98a6.953 6.953 0 0 1-.884-.237l-.321.947zm4.132.271a7.944 7.944 0 0 0 1.012-.27l-.321-.948a6.954 6.954 0 0 1-.884.237l.194.98zm-2.083.135a8.1 8.1 0 0 0 1.046 0l-.064-.998a7.11 7.11 0 0 1-.918 0l-.064.998zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
            </svg>
          </button></router-link>
        </div>
      </div>

      <div class="col-md-5 border-right">
        <h2>My profile</h2>
        <div class="row mt-3">
          <div class="col-md-12"><label class="labels">Name</label><h4>{{ userData.firstName }}</h4></div>
          <div class="col-md-12"><label class="labels">Surname</label><h4>{{ userData.lastName }}</h4></div>
          <div class="col-md-12"><label class="labels">Email</label><h4>{{ userData.email }}</h4></div>
          <div class="col-md-12"><label class="labels">Birthdate</label><h4>{{ userData.birthdate }}</h4></div>
          <div class="col-md-12"><label class="labels">Gender</label><h4>{{ userData.gender }}</h4></div>
          <div class="col-md-6"><label class="labels">Buying trades</label><h4>{{ userData.buyerTradesAmount }}</h4></div>
          <div class="col-md-6"><label class="labels">Selling trades</label><h4>{{ userData.sellerTradesAmount }}</h4></div>
        </div>
      </div>

      <div class="col-sm-4 mx-auto">
        <h2>My products</h2>
        <div class="col-sm-10 mx-auto" style="padding: 10px">
          <button class="btn btn-link" aria-label="Previous page" v-on:click="goPageBack" style="opacity: 1">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
            </svg>
          </button>
          <router-link to="/product/add"><input type="button" class="btn btn-success btn-sm" style="margin-left: 5px; margin-right: 5px" value="Add product"></router-link>
          <button class="btn btn-link" aria-label="Next page" v-on:click="goPageForward" style="opacity: 1;">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
            </svg>
          </button>
        </div>
        <table>
          <caption></caption>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
          <tr class="break-word" v-for="product of products" :key="product.id">
            <td><img v-bind:src="'/api/public/images/' + product.imageId" class="rounded-card" alt="image"/></td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }} ???</td>
            <router-link to="/product/update">
              <button class="btn btn-link" aria-label="Update product"
                      v-on:click="productUpdate(product.id, product.name, product.description, product.price, product.categoryName, product.imageId)">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
              </svg>
            </button>
            </router-link>
            <router-link to="/success"><button class="btn btn-link" aria-label="Remove product" v-on:click="productRemove(product.id)">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
            </button>
            </router-link>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-link {
  opacity: 0;
  transition: .3s ease;
  color: #818181FC;
}
.btn-link:hover {
  color: #000000;
}
tr:hover .btn-link {
  opacity: 1;
}

body {
  background: rgb(99, 39, 120)
}

.form-control:focus {
  box-shadow: none;
  border-color: #BA68C8
}

.labels {
  font-size: 11px;
  margin-top: 50px;
}

figcaption {
  font-size: 35px
}

table {
  border-collapse: separate;
  border-spacing: 0 20px;
  font-size: 20px;
}
.break-word {
  word-break: normal;
}
th {
  border-bottom: 1px solid #a2a0a0;
  padding: 20px;
}
td {
  width: 100px;
  text-align: center;
  padding: 5px;
  border-bottom: 1px solid rgb(206, 205, 205);
}

.rounded-card {
  width: 60px;
  height: 60px
}
</style>