<template>
<b-row >
  <h1>Joke</h1>
  <b-row v-if="getSingleJoke">
      <!-- <b-row> {{ getSingleJoke.id }}</b-row> -->
      <b-row><h2>{{ getSingleJoke.content }} </h2></b-row>
      <b-row v-if="getSingleJoke.nsfw"> <b-icon icon="x-circle-fill" class="rounded-circle bg-danger p-2" variant="light"></b-icon></b-row>
       <b-row v-else> 
           <b-iconstack font-scale="2" class="bg-success">
                <b-icon stacked icon="square" ></b-icon>
                <b-icon stacked icon="check"></b-icon>
            </b-iconstack>
      </b-row>
      <b-row> 
          <b-col><h4>{{ getSingleJoke.upvotes }}</h4> </b-col>
          <b-col><h4> {{ getSingleJoke.downvotes }} </h4> </b-col>
        </b-row>
    </b-row>
</b-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'Joke',
    computed: mapGetters(["getSingleJoke"]),
    methods: {
        ...mapActions(["getJoke"]),
    },
    created(){
        this.getJoke();
    }
}
</script>

<style scoped>
.row{
    display: block;
    padding: 16px;
}
.col{
    display: inline-flex;
}
</style>