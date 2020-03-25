<template>
    <div>
    
        <h1>DETALHAR TODO</h1>
        <p>{{ id }}</p> 
        <router-link
           tag="button"
           :to="{ name: 'ok' }"
       >
        Voltar pra listagem
      </router-link>
        <div>title : {{ todoById(id).title }}</div>
        <div>completed : {{ todoById(id).completed }}</div>
        <button @click="editar">Editar Todo</button>
        <router-view></router-view>
    </div>
</template>

<script>

import { mapGetters } from "vuex";
export default {
    name: "DetailTodo",
    data: function(){
        return{ 
            id : this.$route.params.id,}
    },
    computed: mapGetters(["todoById"]),
    methods: {
        editar() {
        this.$router.push({ name: 'edit-todo' , params: { id: this.id } });
        }
    }

}
</script>

<style>

</style>