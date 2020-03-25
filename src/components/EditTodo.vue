<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div><h2>Title:</h2></div>
      <div><input type="text" v-model="todo_add.title" placeholder="Add title"></div>
      <div>
        <input type="checkbox" v-model="todo_add.completed" value="false">
        <label for="todo_add.completed">Está completa?</label>
      </div>

      <div><input type="submit" value="Submit"></div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "EditTodo",
  data() {
    return {
      id:this.$route.params.id,
      todo_add :{
        title: "",
        description: ""
      }
    }
  },computed: mapGetters(["todoById"]),
  created() {
    this.todo_add = this.todoById(this.id)
  },
  methods: {
    ...mapActions(["updateTodo"]),
    onSubmit() {
      this.updateTodo(this.todo_add);
      alert("Dados esditados com sucesso")
    }
  }
}
</script>

<style>

</style>