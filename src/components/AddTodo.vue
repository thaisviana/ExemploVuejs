<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit.prevent="onSubmit">
        <input type="text" v-model="todo_add.title" placeholder="Add todo...">
        <input type="text" v-model="todo_add.description" placeholder="Add description...">
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      todo_add:{
        title: "",
        descrption: ""
      }     
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit() {
      this.addTodo(this.todo_add);
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
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
}
</style>
