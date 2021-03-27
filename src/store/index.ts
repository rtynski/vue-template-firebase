import Vue from 'vue';
import Vuex from 'vuex';
import AccountStore from '@/modules/account/store/AccountStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    accountStore: AccountStore,
  },
});
