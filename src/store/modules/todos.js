
const state = {
  todos: [
    {
      "userId": 1,
      "id": 1,
      "title": "TAREFA 1",
      "completed": false,
      "description" : "oi",
      "thumbnailUrl": "https://via.placeholder.com/150/7ff922"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "TAREFA 2",
      "completed": false,
      "description" : "oi",
      "thumbnailUrl": "https://via.placeholder.com/150/7ff922"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "TAREFA 3",
      "completed": false,
      "description" : "oi",
      "thumbnailUrl": "https://via.placeholder.com/150/7ff922"
    },]
};
const getters = {
  allTodos: state => state.todos
};
const actions = {
  fetchTodos({ commit }) {
      commit("setTodos");
  },

   addTodo({ commit }, todo_add) {
    const new_index =  state.todos.length +1
    const response =  {
            "userId": 1,
            "id": new_index ,
            "title": todo_add.title,
            "completed": false,
            "description" : todo_add.description,
            "thumbnailUrl": "https://via.placeholder.com/150/7ff922"
          }
    commit("newTodo",response);
  },
  deleteTodo({ commit }, id) {
    commit("removeTodo", id);
  },
  
};
const mutations = {
  setTodos: (state) => state.todos,
  newTodo: (state, todo) => state.todos.push(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(t => t.id !== id)),
};

export default {
  state,
  actions,
  getters,
  mutations
};
