<template>
    <div>
    
        <h1>DETALHAR TODO</h1>
        <router-link
           tag="a"
           :to="{ name: 'ok' }"
       >
        Voltar pra listagem
      </router-link>
      <div class="detail">
        <div><h3>title :</h3> {{ todoById(id).title }}</div>
        <div>
            <span v-if="todoById(id).completed">completed : <i class="fas fa-check"></i></span>  
            <span v-else>completed : <i class="fas fa-times"></i></span> 
        </div>

        <button @click="editar">Editar Todo</button>
        </div>
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
button{
  flex: 2;
  background: #1BBC9B;
  border: 1px solid #1BBC9B;
  color: #fff;
  cursor: pointer;
  width: 100%;
  height: 40px;
  margin: 10px;
}
.detail{
    padding: 24px;
}
i {
  cursor: pointer;
  color: #000;
  position: inherit;
}

</style>