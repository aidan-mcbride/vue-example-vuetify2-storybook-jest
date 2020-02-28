import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export const options = {
  theme: {
    themes: {
      light: {
        primary: colors.pink,
        secondary: colors.blue,
        accent: colors.indigo
      }
    }
  }
};

export default new Vuetify(options);
