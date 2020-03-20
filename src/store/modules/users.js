import axios from "axios";

const state = {
    users:[]
  };
  const getters = {
    allUsers: state => state.users
  };

  const actions = {
    getUsers({ commit }) {
        axios.get(
            "https://jsonplaceholder.typicode.com/users"
          ).then((response) => {
            commit('getUsers', response.data);
        });
    },
    addUser({commit} , new_user){
      commit('addUser', new_user);
    }
    
  };
  const mutations = {
    getUsers: (state, users) => (state.users = users),
    addUser: (state, new_user) => state.users.push(new_user)
  };
 
  export default {
    state,
    getters,
    actions,
    mutations,
  };
  