### Overview

The **planejape-ui-svelte** is a library of design system components from the **planejApe** project.

In this file, you will find things about: How to run the project, publishing the package in
npm, chromatic's CI/CD settings and a few other things, so let's get started

The 'planejape-ui-svelte' lib uses technologies that promote the scalability and maintainability of the project:

#### 🛠️ Tecnologies and tools

- Svelte
- Storybook
- Chromatic

#### ⚙️ CI/CD

- GitHub actions

#### 📦 Packing

- NPM (to publish package)

#### 📝 Tests

- Vitest
- Testing livrary (Svelte)

### How to execute this project

1. Clone this repo the follow example (or as you prefer):

```bash
git clone https://github.com/Rickson298/planejApe-UI.git
```

2. Install the dependencies (only use NPM)

```bash
npm install
```

3. Start storybook

```bash
npm run storybook
```

### Publish to NPM

**Only [Rickson Oliveira](https://github.com/Rickson298) (me) can publish on NPM, however, it's good to document it here.**

To publish a new version of `planejape-ui-svelte` on NPM, follow the instructions below:

1. Update the package version (read about [semantic versioning](https://docs.npmjs.com/about-semantic-versioning) here)

```bash
npm version patch
```

2. Publish on NPM

```bash
npm publish
```

### Chromatic and CI/CD

This app has an action configured for the chromatic CI/CD, it is in the file `/.github/workflows/chromatic.yml`
