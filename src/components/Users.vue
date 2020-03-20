<template>
 <div>
    <h3>Listagem de Usuários</h3>
  <!-- <router-link to="/form">
      <button >Adicionar Usuário</button>
  </router-link> -->
  <div> <AddUser/> </div>
    <div class="photos">
      <div
       
        v-for="u in allUsers"
        :key="u.id"
        class="user"
      >

        <div> 
          <h3>{{ u.name }}</h3>
        </div>
        <div> <span>Username:</span> {{ u.username }}</div>
        <div><span>Email:</span> {{ u.email }}</div>
        <div><span>Address:</span></div>
        <div>&nbsp; <span>Street:</span> {{ u.address.street }}</div>
        <div>&nbsp;<span>Suite:</span> {{ u.address.suite }}</div>
        <div>&nbsp;<span>City: </span>{{ u.address.city }}</div>
        <div>&nbsp;<span>Zipcode:</span> {{ u.address.zipcode }}</div>
        <div><span>Geo:</span></div>
        <div>&nbsp;<span>Latitude: </span>{{ u.address.geo.lat }}</div>
        <div>&nbsp;<span>Longitude:</span> {{ u.address.geo.lng }}</div>
        <div><span>Phone: </span>{{ u.phone }}</div>
        <div><span>Website:</span> {{ u.website }}</div>
        <div><span>Company:</span></div>
        <div>&nbsp;<span>Name: </span>{{ u.company.name }}</div>
        <div>&nbsp;<span>Catch Phrase:</span> {{ u.company.catchPhrase }}</div>
        <div>&nbsp;<span>BS:</span> {{ u.company.bs }}</div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddUser from "./AddUser"
export default {
  name: "Users",methods: {
    ...mapActions(["getUsers"]),
  },
  components:{AddUser},
  computed: mapGetters(["allUsers"]),
  created() {
    this.getUsers();
  }
 
};
</script>

<style>
.photos{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
}
.user {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  justify-content: left;
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
span{
  font-weight: bold;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
