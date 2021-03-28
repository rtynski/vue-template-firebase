import { shallowMount, createLocalVue } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import VueI18n from 'vue-i18n';
import { i18n } from '@/i18n-setup';
import LoginAndRegister from '../LoginAndRegister.vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(VueI18n);

describe('LoginAndRegister.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Waiting for login message';
    const wrapper = shallowMount(LoginAndRegister, { localVue, i18n: i18n() });
    expect(wrapper.text()).toMatch(msg);
  });
});
