<template>

  <div>
    <h3>Listagem de Usuários</h3>
    
    <div class="photos">
      <div
       
        v-for="u in allUsers"
        :key="u.id"
        class="todo"
      >
        {{ u.name }}
       
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Users",methods: {
    ...mapActions(["getUsers"]),
  },
  computed: mapGetters(["allUsers"]),
  created() {
    this.getUsers();
  }
 
};
</script>

<style>
.photos{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  color: #fff;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
