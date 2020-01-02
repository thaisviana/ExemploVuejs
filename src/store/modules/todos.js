
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
    const response =[
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
      commit("fetchTodos", response.data);
  },

   deleteTodo({ commit }, id) {
    commit("removeTodo", id);
  },
   addTodo({ commit }, title) {
    const new_index =  state.todos.length
    const response =  {
            "userId": 1,
            "id": new_index ,
            "title": title,
            "completed": false
          }
    commit("newTodo",response);
  },
   updateTodo({ commit }, updTodo) {
    updTodo.completed = true
    commit("updateTodo",updTodo);
  }

};
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.push(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(t => t.id !== id)),
  updateTodo: (state, updTodo) => {
    const index = state.todos.findIndex(t => t.id === updTodo.id);
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
