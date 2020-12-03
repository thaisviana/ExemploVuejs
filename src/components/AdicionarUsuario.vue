<template>
  <b-row style="display:block; padding:24px;">
    <h1>Adicionar Usuário</h1>
    <b-row>
      <b-form inline>
    <label class="sr-only" for="inline-form-input-name">Nome</label>
    <b-form-input
      id="inline-form-input-name"
      class="mb-4 mr-sm-4 mb-sm-0"
      placeholder="Insira um nome"
      v-model="name"
    ></b-form-input>

    <label class="sr-only" for="inline-form-input-username">email</label>
    <b-input-group prepend="@" class="mb-4 mr-sm-4 mb-sm-0">
      <b-form-input id="inline-form-input-username" 
      v-model="email"
      placeholder="Insira seu email"></b-form-input>
    </b-input-group>

    <b-button variant="primary" @click="createUser()">Save</b-button>
  </b-form>
    </b-row>
    </b-row>
</template>

<script>

import { mapActions } from "vuex";
export default {
    name : 'AdicionarUsuario',
    data(){
      return { name : "", email: ""}
    }, 
    methods:{
      ...mapActions(["addUser"]),
      createUser(){
         let user = {
          "name": this.name,
          "username": "",
          "email": this.email,
          "address": {
            "street": "",
            "suite": "",
            "city": "",
            "zipcode": "",
            "geo": {
              "lat": "",
              "lng": ""
            }
          },
          "phone": "",
          "website": "",
          "company": {
            "name": "",
            "catchPhrase": "",
            "bs": ""
          }
        }
        this.addUser(user)
        alert('Adicionado com sucesso!')
      }
    }
}
</script>

<style>

</style>