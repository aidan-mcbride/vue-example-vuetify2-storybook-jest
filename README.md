# Vue Example: Vuetify + StoryBook + Jest

<img src="https://avatars3.githubusercontent.com/u/6128107?s=200&v=4" alt="vue.js logo" href="https://vuejs.org" width=100 height=100 /><img src="https://avatars2.githubusercontent.com/u/22138497?s=200&v=4" alt="vuetify logo" href="https://vuetifyjs.com/en/" width=100 height=100 /><img src="https://avatars0.githubusercontent.com/u/22632046?s=200&v=4" alt="storybook logo" href="https://storybook.js.org/" width=100 height=100 /><img src="https://jestjs.io/img/jest.png" alt="jest logo" href="https://jestjs.io/" width=100 height=100 />

---

> **🚨️IMPORTANT NOTE 1:🚨️**
>
> The raison d'être for this project is that - as of when this project is last updated - the [Vuetify storybook plugin](https://github.com/vuetifyjs/vue-cli-plugins/tree/master/packages/vue-cli-plugin-vuetify-storybook) does not use Storybook's new _[component story format](https://medium.com/storybookjs/component-story-format-66f4c32366df)_, which is the format used in all of Storybook's documentation and tutorials.
> If, in the future, the Vuetify storybook plugin is updated to use the component story format(and you know how to unit test with vue and vuetify) then this project will become essentially obsolete.

> **🚨️IMPORTANT NOTE 2🚨️**
>
> I haven't figured out how to get [Storyshots](https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-core) working with Vuetify. If you know how to solve this, please let me know somehow. :)

---

## About

This is a working example of a vue project that includes vuetify 2.2, storybook 5.3, and unit testing with jest - all working together.

Recently(as of writing this), storybook has introduced a new **[Component Story Format](https://medium.com/storybookjs/component-story-format-66f4c32366df)** for creating stories. Vuetify has a [very nifty plugin](https://github.com/vuetifyjs/vue-cli-plugins/tree/master/packages/vue-cli-plugin-vuetify-storybook) for initializing a project with vuetify and storybook configured together, but it does not use this new CSF style.

### Stack

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
