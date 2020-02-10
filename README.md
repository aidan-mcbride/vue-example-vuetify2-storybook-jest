# Vue Example: Vuetify + StoryBook + Jest

<img src="https://avatars3.githubusercontent.com/u/6128107?s=200&v=4" alt="vue.js logo" href="https://vuejs.org" width=100 height=100 /><img src="https://avatars2.githubusercontent.com/u/22138497?s=200&v=4" alt="vuetify logo" href="https://vuetifyjs.com/en/" width=100 height=100 /><img src="https://avatars0.githubusercontent.com/u/22632046?s=200&v=4" alt="storybook logo" href="https://storybook.js.org/" width=100 height=100 /><img src="https://jestjs.io/img/jest.png" alt="jest logo" href="https://jestjs.io/" width=100 height=100 />

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

### Stack

- [Vue.js](https://vuejs.org/)`v2.x`
  - [Vuex](https://vuex.vuejs.org/)
  - [Vue Test Utils](https://vue-test-utils.vuejs.org/)
- [Vuetify](https://vuetifyjs.com/en/)`v2.2`
  - [vue-cli-plugin-vuetify-storybook](https://github.com/vuetifyjs/vue-cli-plugins/tree/master/packages/vue-cli-plugin-vuetify-storybook)
- [Storybook.js](https://storybook.js.org/)`v5.3`
- [Jest.js](https://jestjs.io/)`v25.1`

---

## Project setup

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

As of version 5.3, Storybook has a new _[declarative configuration](https://medium.com/storybookjs/declarative-storybook-configuration-49912f77b78)_ style. To update your vuetify-storybook config to this new style, make the following changes:

> TODO

### Configure [Jest](https://jestjs.io/docs/en/configuration)

#### [Look for test files in `src/components/`](https://jestjs.io/docs/en/configuration#testmatch-arraystring)

To change the directory where Jest looks for tests, you can add a regex to the `testMatch` array:

`jest.config.js`

```JavaScript
module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '**/tests/unit/**/*.spec.[jt]s?(x)',
    '**/__tests__/*.[jt]s?(x)',
    '**/src/**/*.spec.[jt]s?(x)'
  ]
};
```

The matching preset used by `@vue/cli-plugin-unit-jest` differs from the [jest default](https://jestjs.io/docs/en/configuration#testmatch-arraystring), and uses the following two patterns:

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

`.eslintrc.js`

```JavaScript
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

#### [Bootstrap vuetify for tests](https://vuetifyjs.com/en/getting-started/unit-testing#bootstrapping-vuetify)

Vuetify must be installed into the vue instance for testing; this is done globally in a `setup.js` file:

`setup.js`

```JavaScript
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
```

In your `jest.config.js` file you must [specify the location of your setup file](https://jestjs.io/docs/en/configuration.html#setupfilesafterenv-array):

`jest.config.js`

```JavaScript
module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  // ...
  setupFilesAfterEnv: ['./jest.setup.js']
};
```

> **NOTE:** After doing this, you must still [use a `localVue` instance within your test cases](https://vuetifyjs.com/en/getting-started/unit-testing#spec-tests).

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

## References

### Documentation

- **[Vue CLI 3](https://cli.vuejs.org/)**
- **[Vue.js](https://vuejs.org/v2/guide/)**
- **[Vuex](https://vuex.vuejs.org/)**
- **[Vuetify](https://vuetifyjs.com/en/getting-started/quick-start)**

- **[Storybook.js](https://storybook.js.org/docs/basics/introduction/)**

  - [Storybook for Vue tutorial](https://www.learnstorybook.com/intro-to-storybook/vue/en/get-started/)

- **[Jest.js](https://jestjs.io/docs/en/getting-started.html)**
- **[Vue Test Utils](https://vue-test-utils.vuejs.org/)**
