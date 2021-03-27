import { createLocalVue, shallowMount, VueClass, Wrapper } from '@vue/test-utils';
import { Component, Vue } from 'vue-property-decorator';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
import AccountStore from '../store/AccountStore';

const router = new VueRouter();
router.addRoute({ name: 'AuthSignUp', path: '/1' });
router.addRoute({ name: 'AuthSignIn', path: '/2' });

export default (
  VueComponent: VueClass<Vue>,

  props?: Record<string, any>,
  attrs?: Record<string, string>,
): Wrapper<Vue> => {
  class AccountStoreMock extends AccountStore {}

  // we also provide `dataStore` to components
  @Component
  class VueComponentMock extends VueComponent {}

  const localVue = createLocalVue();
  localVue.use(BootstrapVue);
  localVue.use(Vuex);
  localVue.use(VueRouter);

  const store = new Vuex.Store({
    modules: {
      account: AccountStoreMock,
    },
  });

  return shallowMount(VueComponentMock, {
    props,
    attrs,
    store,
    router,
    localVue,
  });
};
