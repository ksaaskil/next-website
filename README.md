# [Website with Next.js](https://ksaaskil.github.io/next-website/)

## Usage

```bash
yarn
yarn dev
```

## Run Storybook

```bash
yarn storybook
```

## Build Static Storybook

```bash
yarn build-storybook
```

## Build static

```bash
yarn export
```

Test the static deployment:

```bash
[yarn global add serve]
cd out
serve -p 8080
```

If it works, copy the contents of `out/` to the `public_html` directory in your server.

## Deploy to GitHub pages
Build, export and deploy to `gh-pages` with `NODE_ENV=github-pages`:
```bash
yarn deploy-gh
```

If you need to force-push to `gh-pages` branch:
```bash
git push origin `git subtree split --prefix out-gh master`:gh-pages --force
```

## Known issues
Gallery does not work correctly in GitHub pages, it is possibly related to asset prefix in link.
