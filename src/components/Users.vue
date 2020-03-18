<template>


  <div>
    <h3>Listagem de Usuários</h3>

    <b-button to="AddUser">Adicionar Usuário</b-button>

    <div class="photos">
      <div
       
        v-for="u in allUsers"
        :key="u.id"
        class="todo"
      >

        <div>Name: {{ u.name }}</div>
        <div>Username: {{ u.username }}</div>
        <div>Email: {{ u.email }}</div>
        <div>Address:</div>
        <div>Street: {{ u.address.street }}</div>
        <div>Suite: {{ u.address.suite }}</div>
        <div>City: {{ u.address.city }}</div>
        <div>Zipcode: {{ u.address.zipcode }}</div>
        <div>Geo:</div>
        <div>Latitude: {{ u.address.geo.lat }}</div>
        <div>Longitude: {{ u.address.geo.lng }}</div>
        <div>Phone: {{ u.phone }}</div>
        <div>Website: {{ u.website }}</div>
        <div>Company:</div>
        <div>Name: {{ u.company.name }}</div>
        <div>Catch Phrase: {{ u.company.catchPhrase }}</div>
        <div>BS: {{ u.company.bs }}</div>

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
