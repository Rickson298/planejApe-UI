# PlanejaApe - Lib

<div>
  
<img src="https://www.tutomena.com/assets/thumbnails/svelte.png" width="40" />
<img src="https://static-00.iconduck.com/assets.00/npm-icon-512x512-qtfdrf37.png" width="40" />
<img
	src="https://pbs.twimg.com/profile_images/1373286104560979974/Htdxwmba_400x400.png"
	width="40"
/>
<img
	src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/storybook/storybook.png"
	width="40"
/>
<img
	src="https://user-images.githubusercontent.com/11247099/145112184-a9ff6727-661c-439d-9ada-963124a281f7.png"
	width="40"
/>
<img src="https://testing-library.com/img/logo-large.png" width="40" />
<img
	src="https://me-dutour-mathieu.gallerycdn.vsassets.io/extensions/me-dutour-mathieu/vscode-github-actions/3.0.1/1596182639279/Microsoft.VisualStudio.Services.Icons.Default"
	width="40"
/>
</div>

<br />

The **planejape-ui-svelte** is a library of design system components from the [planejApe](https://github.com/Rickson298/planejApe) project.

In this file, you will find things about: How to run the project, publishing the package in
npm, chromatic's CI/CD settings and a few other things, so let's get started

This lib uses technologies that promote the scalability and maintainability of the project:

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
- Testing library (Svelte)

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

### Snippet

When new stories are created, just write the snippet `create-sb-file`, this will create a template file for stories and avoid writing code that will always be the same
