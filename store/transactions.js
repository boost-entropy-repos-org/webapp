const state = () => ({
  showLoader: Boolean,
  transactions: {}
});

const mutations = {
  //CREATE MEDICAL SERVICE
  ["INITIATE_TRANSACTION"](state) {
    state.showLoader = true;
  },
  ["INITIATE_TRANSACTION_FAILED"](state) {
    state.showLoader = false;
  },
  ["INITIATE_TRANSACTION_ERROR"](state) {
    state.showLoader = false;
  },
  ["INITIATE_TRANSACTION_SUCCESS"](state, payload) {
    state.showLoader = false;
  },

  /**Fetch transactions */

  ["GET_TRANSACTIONS"](state) {
    state.showLoader = true;
  },
  ["GET_TRANSACTIONS_FAILED"](state) {
    state.showLoader = false;
  },
  ["GET_TRANSACTIONS_ERROR"](state) {
    state.showLoader = false;
  },
  ["GET_TRANSACTIONS_SUCCESS"](state, payload) {
    state.showLoader = false;
    state.transactions = payload;
  },

}

const actions = {

  async initiate_medical_transaction({ commit }, payload) {
    commit("INITIATE_TRANSACTION");
    await this.$api.$post(`transactions/${payload.id}/${payload.type}`, payload.services)
      .then(response => {
        commit("INITIATE_TRANSACTION_SUCCESS", response);
      }).catch(error => {
        commit("INITIATE_TRANSACTION_ERROR");
        console.log(error);

      });
  },

  async get_transactions({ commit }) {
    commit("GET_TRANSACTIONS");
    await this.$api.$get('transactions/')
      .then(response => {
        commit("GET_TRANSACTIONS_SUCCESS", response);
      }).catch(error => {
        commit("GET_TRANSACTIONS_ERROR");
        console.log(error);

      });
  }
}
const getters = {
  transactions: function (state) {
    return state.transactions;
  }
}

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters
}
