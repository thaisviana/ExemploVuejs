<template>
  <b-row style="display: block;">
      <b-row style="display: block;">
        <h1>{{usuario.name}}</h1>
      </b-row>
      <b-row>
        <b-col cols="3"><img width="250px" height="250px" src="https://thispersondoesnotexist.com/image"/></b-col>
        <b-col>
           <div>
               <span><b>username:</b></span>
               <span>{{usuario.username}}</span>
           </div>

           <div>
               <span><b>email:</b></span>
               <span>{{usuario.email }}</span>
           </div>

           <div>
               <span><b>phone:</b></span>
               <span>{{usuario.phone }}</span>
           </div>

           <div>
               <span><b>website:</b></span>
               <span>{{usuario.website }}</span>
           </div>

           <div>
               <span><b>company:</b></span>
               <span>{{usuario.company.name }}</span>
           </div>

           <div>
               <span><b>company catchPhrase:</b></span>
               <span>{{usuario.company.catchPhrase }}</span>
           </div>
        </b-col>
      </b-row>
    <b-row><h2>Edição</h2></b-row>
      <b-row>
           <b-form @submit="onSubmit">
               <b-form-group
                id="input-group-1"
                label="Name:"
                label-for="input-1"
                description="We'll never share your name with anyone else."
            >
                <b-form-input
                id="input-1"
                v-model="usuario.name"
                type="name"
                required
                placeholder="Enter name"
                ></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-1"
                label="username:"
                label-for="input-1"
                description="We'll never share your username with anyone else."
            >
                <b-form-input
                id="input-1"
                v-model="usuario.username"
                required
                placeholder="Enter username"
                ></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-1"
                label="username:"
                label-for="input-1"
                description="We'll never share your username with anyone else."
            >
                <b-form-input
                id="input-1"
                v-model="usuario.email"
                type="email"
                required
                placeholder="Enter email"
                ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-3" label="Company Name:" label-for="input-3">
                <b-form-select
                id="input-3"
                v-model="usuario.company.name"
                :options="companies"
                required
                ></b-form-select>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>

      </b-row>
      
  </b-row>
</template>

<script>
export default {
    name : 'DetalharUsuario',
    data(){
        return {
            id : this.$route.params.id,
            usuario : this.$route.params.usuario,
            companies: ['IBM' , 'Google', 'grama.cc', 'Accenture']
        }
    }, methods:{
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.usuario))
      },
    }, created(){
        this.companies.push(this.usuario.company.name)
    }
}
</script>

<style>

</style>