<template>
  <div>
    <h3>Add Todo</h3>
    <div>
      <form @submit.prevent="onSubmit">
        <div><h2>Title:</h2></div>
        <div><input type="text" v-model="todo_add.title" placeholder="Add title"></div>
        <div><h2>Description:</h2></div>
        <div><input type="text" v-model="todo_add.description" placeholder="Add title"></div>
        <div><input type="submit" value="Submit"></div>
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
      todo_add :{
        title: "",
        description: ""
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

<style>
form {
  display: block;
}
input[type="text"],input[type="textarea"] {
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
