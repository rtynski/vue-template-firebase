// __tests__/AddTodo.spec.ts
import factory from './__factory';
import AccountStore from '../store/AccountStore';
import { getModule } from 'vuex-module-decorators';

import SignUp from '../SignUp.vue';

const createComponent = () => {
  const component = factory(SignUp);
  //props
  const props = {
    ds: getModule(AccountStore, component.vm.$store),
  };
  //reactive data
  const data = {};
  //component
  component.setProps(props);
  component.setData(data);
  return component;
};

describe('SignUp.vue', () => {
  it('navigation link to sign in page', () => {
    const wrap = createComponent();
    expect((wrap.vm as any).urls.authSignIn).toEqual('/auth/sign-in');
  });
  it('navigation action to sign up page', () => {
    const wrap = createComponent();
    (wrap.vm as any).navigationSignIn();
    expect(wrap.vm.$route.name).toEqual('AuthSignIn');
  });
  it('init action register', () => {
    const wrap = createComponent();
    (wrap.vm as any).register();
  });
});
