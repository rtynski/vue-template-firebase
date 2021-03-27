// __tests__/AddTodo.spec.ts
import factory from './__factory';

import StartPage from '../StartPage.vue';

const createComponent = () => {
  const component = factory(StartPage);
  //props
  const props = {};
  //reactive data
  const data = {};
  //component
  component.setProps(props);
  component.setData(data);
  return component;
};

describe('StartPage.vue', () => {
  it('create component', () => {
    const wrap = createComponent();
    expect(wrap.vm as any).not.toBeNull();
  });
});
