import Vue from 'vue';
import Vuex from 'vuex';
import { action } from '@storybook/addon-actions';

import BaseInboxScreen from './BaseInboxScreen.vue';

import { defaultTasksData } from '../TaskList/testData';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    tasks: defaultTasksData
  },
  actions: {
    pinTask(context, id) {
      action('pinTask')(id);
    },
    archiveTask(context, id) {
      action('archiveTask')(id);
    }
  }
});

export default {
  title: 'BaseInboxScreen',
  excludeStories: /.*store$/
};

// default state
export const Default = () => ({
  components: { BaseInboxScreen },
  template: `<base-inbox-screen/>`,
  store
});

// error state
export const Error = () => ({
  components: { BaseInboxScreen },
  template: `<base-inbox-screen error/>`
});
