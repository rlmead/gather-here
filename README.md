# gather here.

## Hosting

[gather-here.net](https://gather-here.net) is hosted on Vercel. The database is hosted on Supabase.

## Development

This project is being developed with Next.js and TypeScript. The database runs on Supabase.

### Getting set up

#### Next.js

1. Clone this repository
1. In the repo directory, run `npm install`
1. In the repo directory, run `npm run dev`

#### Environment variables

Copy the `.env.sample` file to `.env` and fill in your environment variables.

#### Supabase

1. [Install Docker Desktop](https://docs.docker.com/desktop/install/mac-install/)
1. [Install the Supabase CLI](https://supabase.com/docs/guides/cli/getting-started)
1. Open Docker Desktop
1. In the repo directory, run `supabase start`

### Useful things to know

- This repo runs pre-commit hooks with Husky to apply Prettier code conventions on staged files
- The [Next.js TypeScript plugin for VSCode](https://nextjs.org/docs/app/building-your-application/configuring/typescript#typescript-plugin) is helpful for working on this project
