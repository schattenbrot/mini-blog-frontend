This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Use with Docker

If no `.env.local` file containing the backend API it will default to:
NEXT_PUBLIC_BACKEND_URL=http://localhost:4000

Build with Docker:

> docker build -t blog-name:latest .

Run docker container with default .env:

> docker run --name blog-name -p 3000:3000 -d blog-name:latest

Run docker container with `.env.local` file:

> docker run --name blog-name -p 3000:3000 -d -v (pwd)"/.env.local":"/app/.env.local" blog-name:latest

Run from dockerhub (with .env.local) which doesn't require the build process:

> docker run --name blog-name -p 3000:3000 -d -v (pwd)"/.env.local":"/app/.env.local" schattenbrot/mini-blog-frontend:latest

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Environment variables:

Changing the target api from it's default `http://localhost:4000` needs the `API_BASE_URL` value in the `.env.local` file when starting the server.
