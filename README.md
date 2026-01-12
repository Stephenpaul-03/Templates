# Templates
This repo contains multiple starter templates for different projects. Each template is in its own top-level folder for easy access.

## Included Templates

* ##### Web
  * **web-starter** : React + Vite + TailwindCSS + Shadcn (Dark Mode Preconfigured)
  * **web-e2e** : React + Vite + TailwindCSS + Shadcn (Dark Mode Preconfigured) + Netlify Functions + Supabase

* ##### React Native
  * **native-web-starter** : React Native template that runs on Web(webpack), Android and IOS
  * **expo-native-web-starter** : Expo React Native template that runs on Web,Android and IOS

* ##### Node Package
  * **npx-starter** : Basic template with cli setup and command-based routing



## Quick Start Guide

If you only want one template, use **Git sparse checkout**:

```bash
git clone --filter=blob:none --sparse https://github.com/Stephenpaul-03/Templates.git
````

```bash
cd Templates
```

```bash
git sparse-checkout set <folder-name>
```

Now your working directory will only contain the selected template folder

> Replace `<folder-name>` with any other template you want (web-starter, native-web, etc)


