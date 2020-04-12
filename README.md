# Clean Translation

A proof of concept app for managing multiple languages in a web application

- As a developer, I code the application once for all languages
- As a developer, I do not need to re-deploy to incorporate new or fixed translated sentences
- As a translator, I can read, update, and add translated sentences with no tech knownledge
- As an end-user, I can switch language without reloading the app

## How does it works?

- A [lang API](./lang-api) allows for CRUD operations on a `messages.json` file that contains all translation strings
- A [lang UI](./lang-ui) is available for the non-tech-savvy translators as a lang API interface
- The [web application](./app), upon startup, fetches `messages.json` and passes it to [vue-i18n](https://kazupon.github.io/vue-i18n/)

Run locally:

```bash
# 1st terminal
cd app
npm run serve

# 2nb terminal
cd lang-api
node main.js

# 3rd terminam
cd lang-ui
npm run serve
```

The navigate to the [web app](http://localhost:8080) or the [lang UI](http://localhost:8082)
