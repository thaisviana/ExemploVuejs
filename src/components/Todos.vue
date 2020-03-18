<template>

  <div>
    <div>
      <AddTodo/>
    </div>
    <h3>Todos</h3>
    <div class="todos">
      <div
       
        v-for="todo in allTodos"
        :key="todo.id"
        class="todo"
        :class="{'is-complete':todo.completed}"
      >
        {{ todo.title }}
       
       <div> <img :src="todo.thumbnailUrl"/></div>
        <div><p> {{ todo.description }}</p></div>
       
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddTodo from './AddTodo.vue'
export default {
  name: "todos",
  components:{AddTodo},
  methods: {
    ...mapActions(["fetchTodos"]),

  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  }
};
</script>

<style>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
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
