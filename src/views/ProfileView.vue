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
    }
  },

  async created() {
    this.products = (await axios.get("/api/public/products2?page=0&orderBy=id")).data.productList;
  }
}
</script>

<template>
  <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
      <div class="col-md-3 border-right">
        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
          <img alt="avatar" class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg">
          <span class="font-weight-bold">Ilja Lastovko</span>
          <span class="text-black-50">lastovkoi@gmail.com</span>
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
        <div class="col-sm-6 mx-auto" style="padding: 10px">
          <input type="button" class="btn btn-success btn-sm" style="margin-right: 5px" value="ADD">
          <input type="button" class="btn btn-warning btn-sm" value="UPD">
          <input type="button" class="btn btn-danger btn-sm" style="margin-left: 5px" value="DEL">
        </div>
        <div class="col-sm-6 mx-auto" style="padding: 10px">
          <input type="button" v-on:click="goPageBack" class="btn btn-primary btn-sm" style="margin-right: 5px" value="←">
          <input type="button" v-on:click="goPageForward" class="btn btn-primary btn-sm" style="margin-left: 5px" value="→">
        </div>
        <table>
          <caption></caption>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
          <tr v-for="product of products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  word-break: break-word;
}
th {
  border-bottom: 1px solid #a2a0a0;
}
td {
  width: 150px;
  text-align: center;
  padding: 5px;
  border-bottom: 1px solid rgb(206, 205, 205);
}
</style>