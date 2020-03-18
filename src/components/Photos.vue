<template>

  <div>
    <h3>Photos</h3>
    <div class="todos">
      <div v-for="photo in allPhotos"
        :key="photo.id"
        class="todo"
      >
        {{ photo.title }}
       <div> <img :src="photo.thumbnailUrl"/></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Photos",
  methods: {
    ...mapActions(["fetchPhotos"]),

  },
  computed: mapGetters(["allPhotos"]),
  created() {
    this.fetchPhotos();
  }
};
</script>

<style>
.todos {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2em;
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
