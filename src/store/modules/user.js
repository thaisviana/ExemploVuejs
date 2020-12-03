import axios from "axios";

const state = {
  users: []
};

const getters = {
    allUsers: state => state.users,
};

const actions = {
  getUsers({ commit }) {
    axios.get(
        "https://jsonplaceholder.typicode.com/users"
      ).then((response) => {
        commit('getUsers', response.data);
    });

},

addUser({ commit }, user){
  user.id = 109
  //axios.post...then()
  commit('addUser', user);
},
deleteUser({ commit }, id){
  //axios.delete...then()
  commit('deleteUser', id);
},
updateTodo({ commit }, updUser) {
  //axios.put...then()
  commit("updateUser", updUser);
},

}

const mutations = {
  getUsers: (state, data) => (state.users = data),
  addUser: (state, data) => state.users.push(data),
  deleteUser: (state, id) => (state.users = state.users.filter(u => u.id !== id)),
  updateTodo: (state, data) => {
    const index = state.users.findIndex(t => t.id === data.id)
    if (index !== -1) {
      state.todos.splice(index, 1, data);
      }
    }
}

export default {
    state,
    actions,
    getters,
    mutations
  };