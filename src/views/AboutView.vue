<template>
  <div class="about">
    <div class="col-sm-3 mx-auto">
      <figure>
        <figcaption>All users</figcaption>
        <table>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
          </tr>
          <tr v-for="user of users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
          </tr>
        </table>
      </figure>
    </div>
  </div>
</template>

<style>
figcaption {
  font-size: 35px
}

table {
  border-collapse: separate;
  border-spacing: 0 20px;
  font-size: 20px;
}
th {
  border-bottom: 1px solid #3a3a3a;
}
td {
  width: 150px;
  text-align: center;
  padding: 5px;
  border-bottom: 1px solid #ababab;
}
tr {

}
tr:hover {
  background-color: #D6EEEE;
}
</style>

<script>
import axios from "axios";

export default {
  data(){
    return {
      users: []
    }
  },
  async created() {
    try {
      const response = await axios.get('/api/users');
      this.users = response.data;
    } catch (e) {
      console.error(e);
    }
  }

}
</script>