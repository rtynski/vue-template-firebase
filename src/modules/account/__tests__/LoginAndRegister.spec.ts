import { mount, createLocalVue } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

import LoginAndRegister from '../LoginAndRegister.vue';

describe('LoginAndRegister.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Waiting for login message';
    const wrapper = mount(LoginAndRegister, { localVue });
    expect(wrapper.text()).toMatch(msg);
  });
});
