import axios from 'axios';

const state = {
  allTodos: [],
  visibleTodos: [],
  currentPage: 0,
  query: '',
  new: true,
  progress: true,
  completed: true,
  personal: true,
  work: true,
  shopping: true,
  others: true,
  startDate : null,
  endDate : null
};

const actions = {
  insertTodo({ commit }, todo) {
    axios.post(this._vm.$API+'/todos/'+localStorage.getItem('token'), todo)
      .then((response) => {
        commit('insertTodo', response.data);
      });
  },

  fetchTodos({ commit }) {
    var query = 'new='+state.new+'&progress='+state.progress+'&completed='+state.completed;
    query += '&personal='+state.personal+'&work='+state.work+'&shopping='+state.shopping+'&others='+state.others;
    query += '&title=' + state.query;

    if(state.startDate !== null){
        query += '&startDate='+state.startDate.toISOString().substring(0, 10);
        if(state.startDate !== state.endDate)
          query += '&endDate='+state.endDate.toISOString().substring(0, 10);
    }    
            
    axios.get(this._vm.$API+'/todos/'+localStorage.getItem('token')+'?' + query)
      .then(async (response) => {
        await commit('fetchTodos', response.data);
        actions.setVisibleTodos();
      });
  },

  async updateTodo({ commit }, update) {
    await axios.put(this._vm.$API+'/todos/'+localStorage.getItem('token'), update);
    commit('dummy');
  },

  deleteTodo({ commit }, _id) {
    axios.delete(this._vm.$API+'/todos/'+localStorage.getItem('token')+'/'+ _id);
    commit('deleteTodo', _id);
  },

  setVisibleTodos() {
    state.visibleTodos = state.allTodos.slice(
      state.currentPage * 6,
      state.currentPage * 6 + 6
    );

    if (state.visibleTodos.length == 0 && state.currentPage > 0)
      actions.updatePage(state.currentPage - 1);
  },

  updatePage(page) {
    state.currentPage = page;
    actions.setVisibleTodos();
  },

  nextPage() {
    state.currentPage += 1;
    actions.setVisibleTodos();
  },

  prevPage() {
    if (state.currentPage != 0) state.currentPage -= 1;
    actions.setVisibleTodos();
  },
};

const mutations = {
  insertTodo: (state, data) => {
    state.allTodos.push(data);
    state.visibleTodos.splice(5);
    state.visibleTodos.unshift(data);
  },
  fetchTodos: (state, data) => (state.allTodos = data),
  deleteTodo: (state, _id) => {
    state.visibleTodos = state.visibleTodos.filter((todo) => todo._id !== _id);
    state.allTodos = state.allTodos.filter((todo) => todo._id !== _id);
    if(state.visibleTodos.length === 0)
        actions.prevPage();
  },
  dummy: () => {}
};

export default {
  state,
  actions,
  mutations,
};
