// __tests__/AddTodo.spec.ts
import factory from './__factory';
import AccountStore from '../store/AccountStore';
import { getModule } from 'vuex-module-decorators';

import SignIn from '../SignIn.vue';

const createComponent = () => {
  const component = factory(SignIn);
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

describe('SignIn.vue', () => {
  it('navigation link to sign up page', () => {
    const wrap = createComponent();
    expect((wrap.vm as any).urls.authSignUp).toEqual('/auth/sign-up');
  });
  it('navigation action to sign up page', () => {
    const wrap = createComponent();
    (wrap.vm as any).navigationSignUp();
    expect(wrap.vm.$route.name).toEqual('AuthSignUp');
  });
  it('init action login', () => {
    const wrap = createComponent();
    (wrap.vm as any).login();
  });
});
