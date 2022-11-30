<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
      page: 0
    }
  },

  methods: {
    async goPageForward() {
      if ((await axios.get("/api/public/products2?page=" + (this.page + 1) + "0&orderBy=id")).data.productList.length > 0) {
        this.page++
        this.products = (await axios.get("/api/public/products2?page=" + this.page + "0&orderBy=id")).data.productList
        console.log(this.products)
      }
    },

    async goPageBack() {
      if (this.page > 0) {
        this.page--
        this.products = (await axios.get("/api/public/products2?page=" + this.page + "0&orderBy=id")).data.productList
        console.log(this.products)
      }
    },

    async productRemove(productId) {
      await axios.delete("/api/public/products/" + productId)
      location.reload();
    },
  },

  async created() {
    this.products = (await axios.get("/api/public/products2?page=0&orderBy=id")).data.productList;
  },
}
</script>

<template>
  <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
      <div class="col-md-3 border-right">
        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
          <img alt="avatar" class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg">
          <span class="font-weight-bold">Master Yoda</span>
          <span class="text-black-50">alpari@ttu.ee</span>
        </div>
      </div>

      <div class="col-md-5 border-right">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h2>My profile</h2>
        </div>
        <div class="row mt-2">
          <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" value=""></div>
          <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" value="" placeholder="surname"></div>
        </div>
        <div class="row mt-3">
          <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" value=""></div>
          <div class="col-md-12"><label class="labels">Address Line 1</label><input type="text" class="form-control" placeholder="enter address line 1" value=""></div>
          <div class="col-md-12"><label class="labels">Address Line 2</label><input type="text" class="form-control" placeholder="enter address line 2" value=""></div>
          <div class="col-md-12"><label class="labels">Postcode</label><input type="text" class="form-control" placeholder="enter address line 2" value=""></div>
          <div class="col-md-12"><label class="labels">State</label><input type="text" class="form-control" placeholder="enter address line 2" value=""></div>
          <div class="col-md-12"><label class="labels">Area</label><input type="text" class="form-control" placeholder="enter address line 2" value=""></div>
          <div class="col-md-12"><label class="labels">Education</label><input type="text" class="form-control" placeholder="education" value=""></div>
          <div class="col-md-12"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""></div>
          <div class="col-md-12"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"></div>
        </div>
        <div class="row mt-3">
          <div class="col-md-6"><label class="labels">Birthdate</label><input type="date" class="form-control" placeholder="country" value=""></div>
          <div class="col-md-6">
            <label class="labels">Gender</label>
            <div class="form-group">
              <input list="genders" name="gender" id="inputGender" placeholder="Choose...">
              <datalist id="genders">
                <option value="Male"></option>
                <option value="Female"></option>
                <option value="Bigender"></option>
                <option value="Binary"></option>
                <option value="Cis"></option>
                <option value="Cismale"></option>
                <option value="Cisfemale"></option>
                <option value="Cisman"></option>
                <option value="Ciswoman"></option>
                <option value="Demi-guy"></option>
                <option value="Demi-girl"></option>
                <option value="Female to male"></option>
                <option value="Male to female"></option>
                <option value="FTM"></option>
                <option value="MTF"></option>
                <option value="Genderfluid"></option>
                <option value="Intergender"></option>
                <option value="Multigender"></option>
                <option value="Maverique"></option>
                <option value="Neurogender"></option>
                <option value="Non-binary"></option>
                <option value="Other"></option>
                <option value="Pangender"></option>
                <option value="Trans"></option>
                <option value="Transgender"></option>
                <option value="Trans male"></option>
                <option value="Trans female"></option>
                <option value="Trans person"></option>
                <option value="Transsexual"></option>
                <option value="Trigender"></option>
                <option value="Two spirit"></option>
                <option value="Attack helicopter"></option>
                <option value="Other"></option>
                <option value="Prefer not to specify"></option>
              </datalist>
            </div>
          </div>
        </div>
        <div class="mt-5 text-center"><button class="btn btn-primary" type="button">Save Profile</button></div>
      </div>

      <div class="col-sm-4 mx-auto">
        <h2>My products</h2>
        <div class="col-sm-8 mx-auto" style="padding: 10px">
          <button class="btn btn-link" aria-label="Previous page" v-on:click="goPageBack">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
            </svg>
          </button>
          <router-link to="/product/add"><input type="button" class="btn btn-success btn-sm" style="margin-left: 5px; margin-right: 5px" value="Add product"></router-link>
          <button class="btn btn-link" aria-label="Next page" v-on:click="goPageForward">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
            </svg>
          </button>
        </div>
        <table>
          <caption></caption>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
          <tr class="break-word" v-for="product of products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <router-link to="/product/update"><button class="btn btn-link" aria-label="Update product">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
              </svg>
            </button></router-link>
            <button class="btn btn-link" aria-label="Remove product" v-on:click="productRemove(product.id)">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
            </button>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-link {
  color: #818181FC;
}
.btn-link:hover {
  color: #000000;
}

body {
  background: rgb(99, 39, 120)
}

.form-control:focus {
  box-shadow: none;
  border-color: #BA68C8
}

.labels {
  font-size: 11px
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
</style>