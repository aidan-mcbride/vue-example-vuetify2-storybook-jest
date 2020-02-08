# Vue Example: Vuetify + StoryBook + Jest

<img src="https://avatars3.githubusercontent.com/u/6128107?s=200&v=4" alt="vue.js logo" href="https://vuejs.org" width=50 height=50 />
<img src="https://avatars2.githubusercontent.com/u/22138497?s=200&v=4" alt="vuetify logo" href="https://vuetifyjs.com/en/" width=50 height=50 />
<img src="https://avatars0.githubusercontent.com/u/22632046?s=200&v=4" alt="storybook logo" href="https://storybook.js.org/" width=50 height=50 />
<img src="https://jestjs.io/img/jest.png" alt="jest logo" href="https://jestjs.io/" width=50 height=50 />

---

> **🚨️IMPORTANT NOTE 1:🚨️**
> The raison d'être for this project is that - as of when this project is last updated - the [Vuetify storybook plugin](https://github.com/vuetifyjs/vue-cli-plugins/tree/master/packages/vue-cli-plugin-vuetify-storybook) does not use Storybook's new _[component story format](https://medium.com/storybookjs/component-story-format-66f4c32366df)_, which is the format used in all of Storybook's documentation and tutorials.
> If, in the future, the Vuetify storybook plugin is updated to use the component story format(and you know how to unit test with vue and vuetify) then this project will become essentially obsolete.

> **🚨️IMPORTANT NOTE 2🚨️**
> I haven't figured out how to get [Storyshots](https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-core) working with Vuetify. If you know how to solve this, please let me know somehow. :)

---

## About

This is a working example of a vue project that includes vuetify 2.2, storybook 5.3, and unit testing with jest - all working together.

Recently(as of writing this), storybook has introduced a new **[Component Story Format](https://medium.com/storybookjs/component-story-format-66f4c32366df)** for creating stories. Vuetify has a [very nifty plugin](https://github.com/vuetifyjs/vue-cli-plugins/tree/master/packages/vue-cli-plugin-vuetify-storybook) for initializing a project with vuetify and storybook configured together, but it does not use this new CSF style.

### Stack

---

## Project setup

1. **Create project with [Vue CLI 3](https://cli.vuejs.org/):**

```sh
vue create vue-example-vuetify2-storybook-jest
```

```sh
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Vuex, CSS Pre-processors, Linter, Un
it
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by defaul
t): Sass/SCSS (with dart-sass)
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save, Lint and fix on commit
? Pick a unit testing solution: Jest
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No
```

```sh
cd vue-example-vuetify2-storybook-jest
```

2. **[Install Vuetify](https://vuetifyjs.com/en/getting-started/quick-start):**

```sh
vue add vuetify
```

## Commands

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
