# Vue Example: Vuetify + StoryBook + Jest

<img src="https://avatars3.githubusercontent.com/u/6128107?s=200&v=4" alt="vue.js logo" href="https://vuejs.org" width=100 height=100 /><img src="https://avatars2.githubusercontent.com/u/22138497?s=200&v=4" alt="vuetify logo" href="https://vuetifyjs.com/en/" width=100 height=100 /><img src="https://avatars0.githubusercontent.com/u/22632046?s=200&v=4" alt="storybook logo" href="https://storybook.js.org/" width=100 height=100 /><img src="https://jestjs.io/img/jest.png" alt="jest logo" href="https://jestjs.io/" width=100 height=100 />

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://aidan-mcbride.github.io/vue-example-vuetify2-storybook-jest/) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

---

## Table of Contents

- [About](#about)
  - [Stack](#stack)
- [Useful Commands](#useful-commands)
- [Manual Project Set-up](#manual-project-setup)
  - [Refactor vuetify-storybook's configuration](#refactor-vuetify-storybooks-configuration)
  - [Clean up `.storybook/` directory](#clean-up-storybook-directory)
  - [Use application theme within `addon-vuetify`](#use-application-theme-within-addon-vuetify)
  - [Configure Jest](#configure-jest)
- [References](#references)
  - [Documentation](#documentation)

---

> **🚨️IMPORTANT NOTE 1:🚨️**
>
> The raison d'être for this project is that - as of when this project is last updated - the [Vuetify storybook plugin](https://github.com/vuetifyjs/vue-cli-plugins/tree/master/packages/vue-cli-plugin-vuetify-storybook) does not use Storybook's new _[component story format](https://medium.com/storybookjs/component-story-format-66f4c32366df)_ or _[declarative configuration file system](https://medium.com/storybookjs/declarative-storybook-configuration-49912f77b78)_, which are the formats used in all of Storybook's documentation and tutorials.
> If, in the future, the Vuetify storybook plugin is updated to use the component story format and configuration style(and you already know how to unit test with vue and vuetify) then this project will become essentially obsolete.

> **🚨️IMPORTANT NOTE 2🚨️**
>
> I haven't figured out how to get [Storyshots](https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-core) working with Vuetify. If you know how to solve this, please let me know somehow. :)

---

## About

This is a working example of a vue project that includes vuetify 2.2, storybook 5.3, and unit testing with jest - all working together.

Recently(as of writing this), storybook has introduced a new **[Component Story Format](https://medium.com/storybookjs/component-story-format-66f4c32366df)** for creating stories, as well as a new [declarative style for configuration files](https://medium.com/storybookjs/declarative-storybook-configuration-49912f77b78). Vuetify has a [very nifty plugin](https://github.com/vuetifyjs/vue-cli-plugins/tree/master/packages/vue-cli-plugin-vuetify-storybook) for initializing a project with vuetify and storybook configured together, but it does not use this new CSF style, or the new configuration file style.

This project also shows an example of the [Storybook tutorial app](https://www.learnstorybook.com/intro-to-storybook/vue/en/get-started/), but built using vuetify, and with unit tests.

### Stack

- [Vue.js](https://vuejs.org/)`v2.x`
  - [Vuex](https://vuex.vuejs.org/)
  - [Vue Test Utils](https://vue-test-utils.vuejs.org/)
- [Vuetify](https://vuetifyjs.com/en/)`v2.2`
  - [vue-cli-plugin-vuetify-storybook](https://github.com/vuetifyjs/vue-cli-plugins/tree/master/packages/vue-cli-plugin-vuetify-storybook)
- [Storybook.js](https://storybook.js.org/)`v5.3`
- [Jest.js](https://jestjs.io/)`v25.1`

---

## Useful Commands

| Command                   | Description                                 |
| ------------------------- | ------------------------------------------- |
| `npm install`             | Install project dependencies                |
| `npm run serve`           | Compile app in development with hot-reloads |
| `npm run build`           | Build and minify app for production         |
| `npm run serve:storybook` | Run storybook                               |
| `npm run test:unit`       | Run unit tests                              |
| `npm run test:unit:watch` | Run unit tests in watcher mode              |
| `npm run lint`            | Lint and fix all project files              |

---

## Manual project setup

1. **Create project with [Vue CLI 3](https://cli.vuejs.org/):**

```
vue create vue-example-vuetify2-storybook-jest
```

```
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Vuex, CSS Pre-processors, Linter, Unit
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save, Lint and fix on commit
? Pick a unit testing solution: Jest
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No
```

```
cd vue-example-vuetify2-storybook-jest
```

2. **[Install Vuetify](https://vuetifyjs.com/en/getting-started/quick-start):**

```
vue add vuetify
```

```
? Choose a preset: Configure (advanced)
? Use a pre-made template? (will replace App.vue and HelloWorld.vue) Yes
? Use custom theme? No
? Use custom properties (CSS variables)? No
? Select icon font Material Design Icons
? Use fonts as a dependency (for Electron or offline)? Yes
? Use a-la-carte components? Yes
? Select locale English
```

These are the same options as if you had chosen the `Default (recommended)` preset, except that I chose to use fonts as a dependency out of personal preference. Feel free to choose `Default (recommended)` if you want.

3. **[Install Vuetify-storybook](https://github.com/vuetifyjs/vue-cli-plugins/tree/master/packages/vue-cli-plugin-vuetify-storybook):**

```
vue add vuetify-storybook
```

### Refactor [vuetify-storybook](https://github.com/vuetifyjs/vue-cli-plugins/tree/master/packages/vue-cli-plugin-vuetify-storybook)'s configuration

As of version 5.3, Storybook has a new _[declarative configuration](https://medium.com/storybookjs/declarative-storybook-configuration-49912f77b78)_ style. This section walks you through converting the boilerplate vuetify-storybook configuration to this new style.

> [**Storybook migrations docs**](https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#from-version-52x-to-53x)

#### 1. Create two files in the `.storybook/` directory: **`.storybook/main.js`** and **`.storybook/preview.js`**

- **`main.js`** contains the bulk of Storybook's configuration, including **locations of story files**, **webpack config**, and **addon registration**.

- **`preview.js`** controls how stories are rendered in storybook, and includes **global decorators**.

#### 2. In `main.js`: Set the `stories` array to point at the directory where you are putting your stories.

Vuetify-storybook places stories in `.storybook/stories/`, which would look like this:

```JavaScript
// .storybook/main.js

module.exports = {
  stories: ['./stories'],
}
```

I like to place my story files right next to their components, in the `src/components/` directory:

```JavaScript
// .storybook/main.js

module.exports = {
  stories: ['../src/components/**/*.stories.js'],
}
```

#### 3. Move the list of storybook addons from `.storybook/addons.js` to the `addons` array in `main.js`.

remove the `/register` suffix from all of the addons.

Take note of the first line in the array below, which is used to register the `addon-show-vue-markup` addon from its directory in `.storybook/`:

```JavaScript
// .storybook/main.js

module.exports = {
  stories: /* ... */,
  addons: [
    './.storybook/addon-show-vue-markup/register', // NOTE THIS LINE
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-notes',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport'
  ],
}
```

After registering all used addons here, you can **delete `.storybook/addons.js`**

#### 4. Add vuetify-storybook's webpack config to `.storybook/main.js`:

- add `const path = require('path');` to the top of the file.

```JavaScript
// .storybook/main.js

const path = require('path');

module.exports = {
  // ...
}
```

- [add the `webpackFinal` property](https://storybook.js.org/docs/configurations/custom-webpack-config/#examples): Note that you cannot simply copy/paste the code from vuetify-storybook's `webpack.config.js`, as it's a little bit different(see the link).

```JavaScript
// .storybook/main.js

module.exports = {
  // ...
  webpackFinal: async (config, { configType }) => {
    // ...
  }
};
```

- Add the path resolver from `webpack.config.js` to the webpack config in `main.js`

```JavaScript
config.resolve.alias['~storybook'] = path.resolve(__dirname);
```

- Add the SASS loader:

```JavaScript
config.module.rules.push({
  test: /\.s(a|c)ss$/,
  use: ['style-loader', 'css-loader', 'sass-loader'],
  include: path.resolve(__dirname, '../')
});
```

- Add the line `return config;` below the sass loader

After setting up the webpack config in `main.js`, you can **delete `.storybook/webpack.config.js`**

> **NOTE:**
> In vuetify-storybook's webpack config there is a third section:
>
> ```JavaScript
> config.module.rules.push({
>   resourceQuery: /blockType=story/,
>   loader: 'vue-storybook'
> });
> ```
>
> As far as I can tell, this block is no longer needed. It looks like it is a vue loader for storybook, but [Storybook's manual vue setup guide makes no mention of needing this](https://storybook.js.org/docs/guides/guide-vue/), and I haven't encountered any problems so far running storybook without this block. It looks like the dependency `@storybook/vue` may have replaced this.

Your `main.js` should look close to this now:

```JavaScript
// .storybook/main.js

const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: [
    './.storybook/addon-show-vue-markup/register',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-notes',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport'
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['~storybook'] = path.resolve(__dirname);

    config.module.rules.push({
      test: /\.s(a|c)ss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../')
    });

    return config;
  }
};
```

#### 5. copy the contents of `config.js` to `preview.js`

remove the import of `{ configure }` from `@storybook/vue`, though leave the import of `{ addDecorator }`.
Remove the final line that begins with `configure(require.context('./stories'`
then **delete `config.js`**

### Clean up `.storybook/` directory

1. Delete `.storybook/stories/` if you are putting your stories somewhere else, like in your components directory.

2. In the `.storybook/util/` directory is a file named `helpers.js`, which contains a function called `storyFactory`. The [vuetify-storybook documentation](https://github.com/vuetifyjs/vue-cli-plugins/tree/master/packages/vue-cli-plugin-vuetify-storybook) says that this is 'a helper function to facilitate the generation of stories'. I don't know what this means, and - after experimenting with it - I haven't seen that it does anything. My hunch is that storybook's new **[Component Story Format](https://storybook.js.org/docs/formats/component-story-format/)** makes this helper function obsolete. I chose to delete the entire `.storybook/util/` directory and everything in it.

Your `.storybook/` directory should now look something like this:

```
.storybook/
|--addon-show-vue-markup/
|--addon-vuetify/
|--main.js
|--preview.js
```

### Use application theme within `addon-vuetify`

#### 1. Export vuetify theme options.

[You can read about theming vuetify here](https://vuetifyjs.com/en/customization/theme). Themes are specified in an object, which is then passed into the Vuetify constructor. What we want to do is export this theme options object, like this:

```JavaScript
// @/plugins/vuetify.js

import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export const options = {
  theme: {
    dark: true
  }
};

export default new Vuetify(options);
```

#### 2. Refactor `addon-vuetify` to use these theme options

The `addon-vuetify` decorator can be found in `.storybook/addon-vuetify/decorator.js`.

There is a large section of code that looks something like this:

```JavaScript
// .storybook/addon-vuetify/decorator.js

const searchParams = new URL(window.location).searchParams;
const dark = searchParams.get('eyes-variation') === 'dark';
const rtl = searchParams.get('eyes-variation') === 'rtl';
const vuetify = new Vuetify(
  deepmerge(
    {
      rtl,
      theme: { dark }
    },
    parameters
  )
);
```

This bit allows you to enable dark mode by adding `&eyes-variation=dark` to the end of your storybook url:

```
http://localhost:6006/?path=/story/task--default&eyes-variation=dark
```

to enable our custom theme options, we will first import our options, then add them into the `deepmerge` part of the Vuetify constructor:

```JavaScript
// .storybook/addon-vuetify/decorator.js

import { options } from '@/plugins/vuetify';

//...
const vuetify = new Vuetify(
  deepmerge(
    options,
    {
      rtl,
      theme: { dark }
    },
    parameters
  )
)
```

Of note is that the `parameters` argument doesn't seem to do anything at all.

### Configure [Jest](https://jestjs.io/docs/en/configuration)

#### [Look for test files in `src/components/`](https://jestjs.io/docs/en/configuration#testmatch-arraystring)

To change the directory where Jest looks for tests, you can add a regular expression to the `testMatch` array:

```JavaScript
// jest.config.js

module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '**/tests/unit/**/*.spec.[jt]s?(x)',
    '**/__tests__/*.[jt]s?(x)',
    '**/src/**/*.spec.[jt]s?(x)'
  ]
};
```

The matching preset used by [`@vue/cli-plugin-unit-jest`](https://cli.vuejs.org/core-plugins/unit-jest.html) differs from the [jest default](https://jestjs.io/docs/en/configuration#testmatch-arraystring), and uses the following two patterns:

- `**/tests/unit/**/*.spec.[jt]s?(x)` will match any file ending in `.spec.js`, `.spec.jsx`, `.spex.ts` or `.spec.tsx` in the `tests/unit/` directory.
- `**/__tests__/*.[jt]s?(x)` will match any `.js`, `.ts`, `.jsx`, or `.tsx` file in the `__tests__/` directory

I added my own pattern:

- `**/src/components/**/*.spec.[jt]s?(x)` will match any file ending in `.spec.js`, `.spec.jsx`, `.spex.ts` or `.spec.tsx` in the `src/components/` directory.

I want to place my test files in the same directory as their corresponding components and storybook stories, which keeps related files closer to each other and cuts down on the number of directories I need to have open in my tree:

```
.storybook/
src/
|-- components/
| |-- MyComponent.vue         # component
| |-- MyComponent.spec.js     # stories
| |-- MyComponent.stories.js  # tests
|-- plugins/
|-- store/
|-- ...
|-- App.vue
|-- main.js
```

vs.

```
.storybook/
|--stories/
| |--MyComponent.stories.js   # stories
|--main.js
|--preview.js
src/
|--components/
| |--MyComponent.vue          # component
|--plugins/
|--store/
|--App.vue
|--main.js
tests/
|--unit/
| |--components/
| | |--MyComponent.spec.js    # tests
```

**IMPORTANT TO AVOID LINTER ERRORS:** you must add your `testMatch` path to your `overrides` in `.eslintrc.js`:

```JavaScript
// .eslintrc.js

module.exports = {
  // ...
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
        // ADD THIS:
        '**/src/components/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
};
```

#### Bootstrap vuetify for tests

[Vuetify must be installed globally in a setup file](https://vuetifyjs.com/en/getting-started/unit-testing#bootstrapping-vuetify):

```JavaScript
// jest.setup.js

import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
```

In your `jest.config.js` file you must [specify the location of your setup file](https://jestjs.io/docs/en/configuration.html#setupfilesafterenv-array):

```JavaScript
// jest.config.js

module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  // ...
  setupFilesAfterEnv: ['./jest.setup.js']
};
```

> **NOTE:** After doing this, you must still [use a `localVue` instance within your test cases](https://vuetifyjs.com/en/getting-started/unit-testing#spec-tests).

---

## References

### Documentation

- **[Vue CLI 3](https://cli.vuejs.org/)**

  -[@vue/cli-plugin-unit-jest](https://cli.vuejs.org/core-plugins/unit-jest.html)

- **[Vue.js](https://vuejs.org/v2/guide/)**
- **[Vuex](https://vuex.vuejs.org/)**
- **[Vuetify](https://vuetifyjs.com/en/getting-started/quick-start)**

- **[Storybook.js](https://storybook.js.org/docs/basics/introduction/)**

  - [Storybook for Vue tutorial](https://www.learnstorybook.com/intro-to-storybook/vue/en/get-started/)

- **[Jest.js](https://jestjs.io/docs/en/getting-started.html)**
- **[Vue Test Utils](https://vue-test-utils.vuejs.org/)**
