import axios from "axios";

const state = {
  photos: []
};
const getters = {
  allPhotos: state => state.photos
};

const actions = {
  fetchPhotos({ commit }) {
      axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        ).then((response) => {
          commit('setPhotos', response.data);
      });
  },
  
};
const mutations = {
  setPhotos: (state, photos) => (state.photos = photos),
};

export default {
  state,
  actions,
  getters,
  mutations
};
