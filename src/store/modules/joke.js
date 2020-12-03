import axios from "axios";

const state = {
  joke: []
};

const getters = {
    getSingleJoke: state => state.joke,
};

const actions = {
    getJoke({ commit }) {
        const options = {
            method: 'GET',
            url: 'https://joke3.p.rapidapi.com/v1/joke',
            headers: {
              'x-rapidapi-key': '657110f0a7msh6c1bc80927731a7p103c92jsncc392fa93be0',
              'x-rapidapi-host': 'joke3.p.rapidapi.com'
            }
          };
          
        axios.request(options).then((response) => {
            commit('getJoke', response.data);
        });
    }

}

const mutations = {
    getJoke: (state, data) => (state.joke = data),
}

export default {
    state,
    actions,
    getters,
    mutations
  };