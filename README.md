# svelte-with-gh-pages

Analyze, refer to https://www.npmjs.com/package/gh-pages#tips for deploying with Actions.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

To publish build folder to github pages:

```bash
npm run deploy
```

You can preview the production build with `pnpm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

### License

Under MIT. Check LICENSE file.
