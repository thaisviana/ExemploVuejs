<template>
    <div>

  <h1>ADD USER</h1>
  <button type="button"   v-on:click="mostrarCarrinho">
         Ver form</button>
  <form @submit.prevent="onSubmit" v-if="mostrarFilmes">
      <label for="name">Name:</label>
      <br />
      <input type="text" id="name" name="name" v-model="user_add.name" />
      <br />
      <label for="username">Username:</label>
      <br />
      <input type="text" id="username" name="username" v-model="user_add.username" />
      <br />
      <label for="email">Email:</label>
      <br />
      <input type="email" id="email" name="email" v-model="user_add.email" />
      <br />
      <br />
      <div class="divisionForm">Address:</div>
      <label for="street">Street:</label>
      <br />
      <input type="text" id="street" name="street" v-model="user_add.address.street" />
      <br />
      <label for="suite">Suite:</label>
      <br />
      <input type="text" id="suite" name="suite" v-model="user_add.address.suite" />
      <br />
      <label for="city">City:</label>
      <br />
      <input type="text" id="city" name="city" v-model="user_add.address.city" />
      <br />
      <label for="zipcode">Zipcode:</label>
      <br />
      <input type="text" id="zipcode" name="zipcode" v-model="user_add.address.zipcode" />
      <br />
      <br />
      <div class="divisionForm">Geo:</div>
      <label for="lat">Lat:</label>
      <br />
      <input type="text" id="lat" name="lat" v-model="user_add.address.geo.lat" />
      <br />
      <label for="long">Long:</label>
      <br />
      <input type="text" id="long" name="long" v-model="user_add.address.geo.lng" />
      <br />
      <label for="phone">Phone:</label>
      <br />
      <input type="text" id="phone" name="phone" v-model="user_add.phone" />
      <br />
      <label for="website">Website:</label>
      <br />
      <input type="text" id="website" name="website" v-model="user_add.website" />
      <br />
      <br />
      <div class="divisionForm">Company:</div>
      <label for="companyName">Name:</label>
      <br />
      <input type="text" id="companyName" name="companyName" v-model="user_add.company.name" />
      <br />
      <label for="catchPhrase">Catch Phrase:</label>
      <br />
      <input type="text" id="catchPhrase" name="catchPhrase" v-model="user_add.company.catchPhrase" />
      <br />
      <label for="companyBs">BS:</label>
      <br />
      <input type="text" id="companyBs" name="companyBs" v-model="user_add.company.bs" />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddUser",
  data() {
    return {
      mostrarFilmes: false,
      user_add :{
        name: "",
        username: "",
        email: "",
        address: {
          street: "",
          suite: "",
          city: "",
          zipcode: "",
          geo: {
            lat: "",
            lng: ""
          }
        },
        phone: "",
        website: "",
        company: {
          name: "",
          catchPhrase: "",
          bs: ""
        }
      }
    };
  },
  methods: {
    ...mapActions(["addUser"]),
    
    onSubmit() {
      this.addUser(this.user_add);
      alert("Usuário Adicionado com sucesso")
      //this.$router.push({name : "users"})
    },mostrarCarrinho() {
      this.mostrarFilmes = this.mostrarFilmes ? false : true;
    }
  }
};
</script>

<style scoped>
label, button, input {
    margin-left: 100px;
}

.divisionForm {
   margin-left: 100px;
}
form {
  display: block;
}
input[type="text"],input[type="email"],input[type="textarea"] {
  width: 100%;
  flex: 10;
  padding: 10px;
  border: 1px solid #1BBC9B;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #1BBC9B;
  border: 1px solid #1BBC9B;
  color: #fff;
  cursor: pointer;
  width: 100%;
  height: 40px;
  margin: 10px;
}
</style>
