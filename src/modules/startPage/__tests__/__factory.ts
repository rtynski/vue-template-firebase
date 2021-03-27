import { createLocalVue, shallowMount, VueClass, Wrapper } from '@vue/test-utils';
import { Component, Vue } from 'vue-property-decorator';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';

const router = new VueRouter();
router.addRoute({ name: 'AuthSignIn', path: '/1' });

export default (
  VueComponent: VueClass<Vue>,
  props?: Record<string, any>,
  attrs?: Record<string, string>,
): Wrapper<Vue> => {
  // we also provide `dataStore` to components
  @Component
  class VueComponentMock extends VueComponent {}

  const localVue = createLocalVue();
  localVue.use(BootstrapVue);
  localVue.use(Vuex);
  localVue.use(VueRouter);

  return shallowMount(VueComponentMock, {
    props,
    attrs,
    router,
    localVue,
  });
};
