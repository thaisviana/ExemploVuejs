<template>
    <div>

  <h1>ADD USER</h1>
  
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddUser",
  data() {
    return {
      user_add :{
        name: "",
        username: "",
        email: "",
        address: {
          street: "",
          suite: "",
          city: "",
          zipcode: "",
          geo: {
            lat: "",
            lng: ""
          }
        },
        phone: "",
        website: "",
        company: {
          name: "",
          catchPhrase: "",
          bs: ""
        }
      }
    };
  },
  methods: {
    ...mapActions(["addUser"]),
    onSubmit() {
      this.addTodo(this.user_add);
    }
  }
};
</script>

<style scoped>
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
