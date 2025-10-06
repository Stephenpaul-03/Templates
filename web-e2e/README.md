# Web End2End Template (React + Vite + Tailwind + Netlify Functions + Supabase)

A minimal fullstack starter template using:

* Frontend: **React + TypeScript + Vite + Tailwind + shadcn/ui**
* Backend: **Netlify Functions (TypeScript)**
* Database: **Supabase (Postgres)**
* Deployment: **Netlify**

This README walks you **step-by-step** from setting up Supabase to testing functions locally and deploying for basic **CRUD** functions


## Create Supabase Project

1. Go to [Supabase](https://supabase.com/) and log in.
2. Click **New Project**.
3. Fill in the details:

   * Project Name
   * Database Password: save it somewhere
   * Region: pick nearest to you
4. Wait a few minutes until the project is ready.


## Get Supabase Keys

1. Go to **Settings → API** in your Supabase project.
2. Copy:

   * **Project URL** → this will be your `SUPABASE_URL`
   * **Service Role Key** → this will be your `SUPABASE_SERVICE_ROLE_KEY` (keep secret!)


## Create the database table

1. Go to **SQL Editor** in Supabase.
2. Run this SQL to create the `items` table:

```sql
create table items (
  id serial primary key,
  title text not null,
  content text,
  created_at timestamptz default now()
);
```

3. This sets up a simple table for testing CRUD.


## Create `.env` file

1. In the project root, copy to `.env`:

```env
SUPABASE_URL=https://<your-project-ref>.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
```

**⚠️ Do not commit `.env` to version control!**


## Install dependencies

```bash
npm install
```

This installs frontend dependencies, Tailwind, Vite, and Netlify Functions.


## Run locally

Start the **frontend + Netlify functions** simultaneously:

```bash
npx netlify dev
```

* Netlify will run your frontend and functions.
* Open the URL Netlify shows (usually `http://localhost:8888`) in your browser.


## Test functions

* `src/netlify_test_scripts.tsx` contains a **quick test** that calls all four functions.
* Open browser console to see logs for:

  * `GET get-items`
  * `POST create-item`
  * `PATCH update-item`
  * `DELETE delete-item`

## Build for production

```bash
npm run build
```

* Frontend builds into `dist/`.
* Netlify deploys both `dist/` and serverless functions.


## Deploy to Netlify

1. Login to Netlify CLI:

```bash
npx netlify login
```

2. Deploy:

```bash
npx netlify deploy --prod
```

* Follow prompts for site name, branch, etc.
* Netlify will build your frontend and upload your functions.

## Adding More Functions

You can add or modify functions in the `netlify/functions` folder as long as they are **serverless functions**.

* Each function file should export a `handler` using the `@netlify/functions` format.
* Any new function you add will automatically be available at:

```
/.netlify/functions/<function-name>
```

* This allows you to extend your backend API without touching the frontend code.

## Notes

* **Netlify Functions + Supabase service role key**

  * Keep the service key **server-side only**. Never expose it to the frontend.
* **RLS** (Row Level Security) is not set up here. This is for templates/testing purposes.

