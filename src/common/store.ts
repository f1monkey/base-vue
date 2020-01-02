import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";

Vue.use(Vuex);

export interface RootState {
  loading: boolean;
  userId: number;
}

const store: StoreOptions<RootState> = {
  state: {
    loading: true,
    userId: 1
  },
  mutations: {
    SET_LOADING(state, payload: boolean) {
      state.loading = payload;
    }
  },
  actions: {
    setLoading({ commit }, payload: boolean) {
      commit("SET_LOADING", payload);
    },
    error() {
      // we need it to display errors
    }
  },
  modules: {}
};

export default new Vuex.Store<RootState>(store);
