<template>
    <div>
        <h1> Detalhar usuário</h1>
        <div> 
          <h3>{{ usuarioById(id).name }}</h3>
        </div>
        <div> <span>Username:</span> {{ usuarioById(id).username }}</div>
        <div><span>Email:</span> {{ usuarioById(id).email }}</div>
        <div><span>Address:</span></div>
        <div>&nbsp; <span>Street:</span> {{ usuarioById(id).address.street }}</div>
        <div>&nbsp;<span>Suite:</span> {{ usuarioById(id).address.suite }}</div>
        <div>&nbsp;<span>City: </span>{{ usuarioById(id).address.city }}</div>
        <div>&nbsp;<span>Zipcode:</span> {{ usuarioById(id).address.zipcode }}</div>
        <div><span>Geo:</span></div>
        <div>&nbsp;<span>Latitude: </span>{{ usuarioById(id).address.geo.lat }}</div>
        <div>&nbsp;<span>Longitude:</span> {{ usuarioById(id).address.geo.lng }}</div>
        <div><span>Phone: </span>{{ usuarioById(id).phone }}</div>
        <div><span>Website:</span> {{ usuarioById(id).website }}</div>
        <div><span>Company:</span></div>
        <div>&nbsp;<span>Name: </span>{{ usuarioById(id).company.name }}</div>
        <div>&nbsp;<span>Catch Phrase:</span> {{ usuarioById(id).company.catchPhrase }}</div>
        <div>&nbsp;<span>BS:</span> {{ usuarioById(id).company.bs }}</div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "DetailUser",
    methods: {
    ...mapActions(["getUsers"]),
    },
    data: function()
    {return{ id : this.$route.params.id  };
    },computed: {
        ...mapGetters(["usuarioById",])
    },created() {
        this.getUsers();
    }

}
</script>

<style>

</style>