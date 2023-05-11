# Next Blog

This is a full-stack application built using Next JS 13.3, Prisma as the ORM, TipTap for text editing, and TypeScript for language support. The app integrates with ChatGPT to automatically generate blog post content, making it easier for bloggers and content creators to quickly generate engaging articles.

## Features

- **Automatic Blog Post Generation**: With the integration of ChatGPT, the app can automatically generate blog post content based on user prompts or suggestions. This saves time and provides inspiration for bloggers.
- **Next JS 13.3**: The latest version of Next JS is used as the foundation for the application. It offers improved performance, advanced features, and enhanced developer experience.
- **Prisma ORM**: Prisma is used as the ORM (Object-Relational Mapping) tool, providing a convenient and efficient way to interact with the database. It supports various databases, including PostgreSQL, MySQL, and SQLite.
- **TipTap Text Editing**: TipTap is used as the text editing library, enabling bloggers to create rich and interactive blog posts. It offers a modern and intuitive editing experience with support for formatting, embedding media, and more.
- **TypeScript**: The application is built with TypeScript, providing static typing and improved developer productivity. It helps catch errors during development and enhances the maintainability of the codebase.

## Installation

To set up the Next Blog App locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/clairetsoi1129/next-blog.git
   ```

2. Navigate to the project directory:

   ```bash
   cd next-blog
   ```

3. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Set up the database connection by creating a `.env` file and configuring the database URL. You can use the provided `.env.example` as a template.

5. Run database migrations:

   ```bash
   npx prisma migrate dev
   ```

6. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

7. Open your browser and navigate to `http://localhost:3000` to access the Next Blog App.

## Usage

1. You will see a list of blog post at the home page

2. To generate blog post content automatically, click on any posts and you will be directed to a individual article pages

3. Click on the "Edit" icon. ChatGPT is given instruction to write the blog post given the title. You can provide a writer style to ChatGPT, then ChatGPT will generate the content for your blog post based on your style.

4. You can customize the generated content as needed using the TipTap text editor. Add headings, formatting, or any other elements to enhance your blog post.

5. Save the blog post to make it visible to your readers.

## How do I start the development

1. create the next js app directory

```
npx create-next-app@latest --experimental-app
✔ What is your project named? … next-blog
✔ Would you like to use TypeScript with this project? … Yes
✔ Would you like to use ESLint with this project? … Yes
✔ Would you like to use Tailwind CSS with this project? … No
✔ Would you like to use `src/` directory with this project? … No
✔ Use App Router (recommended)? … Yes
✔ Would you like to customize the default import alias? … No
```

2. Install heroicons and tailwindcss related library

```
npm install @heroicons/react

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


npm install @tailwindcss/line-clamp
npm install --save-dev @tailwindcss/typography
```

3. Planetscale client (mysql db on cloud)

- Install planetscale client

```
brew install planetscale/tap/pscale
```

- retrieve the username / password / connection string and put into .env

4. Prisma

- Init prisma

```
npx prisma init
```

- Create Post schema in schema.prisma

- Push to Prisma

```
npx prisma db push
```

- Check the Post table is created in planetscale

5. Initial database with data

- Create seed script, seed.ts in the same folder as schema.prisma

- insatall the below libraries

```
npm install -D typescript ts-node @types/node
```

- Put below snippet in package.json under "version"

```
"prisma": {
  "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
},
```

- Run below command to add the initial data to database

```
npx prisma db seed
```

- Check data is created in the database

> Run below command to see the data in Prisma studio

```
npx prisma studio
```

> Or, goto planetscale console to query the data directly

6. TipTap

- Install TipTap

```
npm install @tiptap/react @tiptap/pm @tiptap/starter-kit
```

- Install material icon

```
npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

```

7. OpenAI

```
npm install openai
```

## Reference

> Tailwindcss for UI styles
> https://tailwindcss.com/docs/guides/nextjs

> Hosting mysql server
> https://app.planetscale.com/

> Prisma guide to seed your database
> https://www.prisma.io/docs/guides/migrate/seed-database#how-to-seed-your-database-in-prisma

> TipTap - a headless wrapper around ProseMirror – a toolkit for building rich text WYSIWYG editors
> https://tiptap.dev/installation/nextjs

> OpenAI
> https://github.com/openai/openai-node

## Acknowledgements

- The Next Blog App was inspired by EdRoh
  https://www.youtube.com/watch?v=pfHjxyeCHRs&t=266s

# Below are autogenerated by Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
