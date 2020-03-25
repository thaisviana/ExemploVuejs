import axios from "axios";

const state = {
  todos: []
};
const getters = {
  allTodos: state => state.todos,
  todoById: (state) => (id) => (state.todos.filter(t => t.id == id))[0],
};
const actions = {
  fetchTodos({ commit }) {
      commit("setTodos");
  },
  getTodos({ commit }) {
    axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      ).then((response) => {
        commit('getTodo', response.data);
    });
},
   addTodo({ commit }, todo_add) {
    const new_index =  state.todos.length +1
    const response =  {
            "userId": 1,
            "id": new_index ,
            "title": todo_add.title,
            "completed": false,
          }
    commit("newTodo",response);
  },
  deleteTodo({ commit }, id) {
    commit("removeTodo", id);
  },
  updateTodo({ commit }, updTodo) {
    commit("updateTodo", updTodo);
  },
  
};
const mutations = {
  setTodos: (state) => state.todos,
  getTodo: (state, todo) => (state.todos = todo),
  newTodo: (state, todo) => state.todos.push(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(t => t.id !== id)),
  updateTodo: (state, updTodo) => {
      const index = state.todos.findIndex(t => t.id === updTodo.id)
      if (index !== -1) {
        state.todos.splice(index, 1, updTodo);
        }
      }
};

export default {
  state,
  actions,
  getters,
  mutations
};
