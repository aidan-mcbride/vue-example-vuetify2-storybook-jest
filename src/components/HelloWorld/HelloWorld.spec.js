// Libraries
import Vuetify from 'vuetify';

// Components
import HelloWorld from './HelloWorld.vue';

// Utilities
import { shallowMount, createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();

describe('HelloWorld.vue', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it('renders correct markup', () => {
    const wrapper = shallowMount(HelloWorld, { localVue, vuetify });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
