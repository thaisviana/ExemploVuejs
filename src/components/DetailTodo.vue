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
        <div>description : {{ todoById(id).description }}</div>
        <div>completed : {{ todoById(id).completed }}</div>
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

}
</script>

<style>

</style>