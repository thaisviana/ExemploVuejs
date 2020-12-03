<template>
  <b-row >
      <AdicionarUsuario />
      <b-row class="list">
      <h1>Lista de Usuários</h1>
      <b-form-input type="text" id="text-search" v-model="search"
      placeholder="Busca ..."
      v-on:keyup.enter="onEnter"
      ></b-form-input>
          
          <b-card-group deck >
              
                <b-card
                    v-for="user in result || allUsers"
                    :key="user.id"
                    style="min-width: 14rem; max-width: 14rem;"
                    border-variant="primary"
                    :header="user.name"
                    header-bg-variant="primary"
                    header-text-variant="white"
                    align="center">
                    <router-link tag="p" :to="{ name: 'detalharUsuario', params: { id: user.id, usuario : user } }">
                        <b-card-text>{{ user.email}}</b-card-text>
                    </router-link>
                    <b-card-text> <b-icon-trash2-fill @click="deleteUser(user.id)"></b-icon-trash2-fill></b-card-text>
                </b-card>

          </b-card-group >
      </b-row>
  </b-row>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import  AdicionarUsuario  from "./AdicionarUsuario"

export default {
    name: "ListaDeUsuarios",
    components:{
        AdicionarUsuario
    },
    data(){
        return {
            search : "",
            result : null
            }
    },
    computed: mapGetters(["allUsers"]),
    methods: {
        ...mapActions(["getUsers", "deleteUser"]),
        onEnter: function() {
            this.result = this.allUsers.filter(x => x.name.includes(this.search))
            if(this.result.length == 0){
                this.result = this.allUsers
            }
        }
    },
    created(){
        this.getUsers();
    }
}
</script>

<style>

.card{
    margin: 20px;
}

p:hover {
    cursor: pointer;
}

.list{
    margin: 20px;
}
</style>