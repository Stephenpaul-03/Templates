# Templates
This repo contains multiple starter templates for different projects. Each template is in its own top-level folder for easy access.

## Included Templates
* ##### Web
    * Starter : React + Vite + TailwindCSS + Shadcn (Dark Mode Preconfigured)
    * e2e : React + Vite + TailwindCSS + Shadcn(Dark Mode Preconfigured) + Netlify Functions + Supabase

* ##### Node Package
    * Starter : Basic template with basic cli setup and command-based routing.  

## Quick Start Guide

If you only want one template, use **Git sparse checkout**:


* Clone the repo (shallow, no file content yet)
```
git clone --filter=blob:none --sparse https://github.com/Stephenpaul-03/Templates.git
```
* Navigate inside the folder
```
cd Templates
```
* Checkout only the template you need
```
git sparse-checkout set <folder-name>
````

Now your working directory will only contain the `web-starter` folder.

> Replace `<folder-name>` with any other template folder name you want.
