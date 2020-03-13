
const state = {
  todos: [
    {
      "userId": 1,
      "id": 1,
      "title": "TAREFA 1",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "TAREFA 2",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "TAREFA 3",
      "completed": false
    },]
};
const getters = {
  allTodos: state => state.todos
};
const actions = {
  fetchTodos({ commit }) {
      commit("setTodos");
  },

   addTodo({ commit }, title) {
    const new_index =  state.todos.length +1
    const response =  {
            "userId": 1,
            "id": new_index ,
            "title": title,
            "completed": false
          }
    commit("newTodo",response);
  },
  
};
const mutations = {
  setTodos: (state) => state.todos,
  newTodo: (state, todo) => state.todos.push(todo),
};

export default {
  state,
  actions,
  getters,
  mutations
};
