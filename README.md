# esummit-24

### Stack
- TailwindCSS
- Typescript
- NextJS
- Prisma
- Postgres

> Other tools: Zod for validation, Nodemailer for emails, NextAuth/AuthJS for authentication, GSAP for animation

#### Frontend Components
- SwiperJS
- Aceternity
- ShadCN

### Setting up the project locally for development

```sh
 git clone https://github.com/jadavpur-university-ed-cell/esummit-24.git
 ```

 ```sh
 cd esummit-24
 ```

```sh
 npm install
 ```

 - Setup a local database to test the site while developing. You can refer to this [article](https://chaicode.com/blogs/effortless-postgresql-installation-instructions), or this [Youtube video](https://www.youtube.com/watch?v=EhapnaEKl-w).

 - Add the necessary environment variables to a .env file, refer to the .env.example file for help.

 - The adminer part of the docker-compose given in the article is not required, we can run ```npx prisma studio``` in the terminal to check the data in the database.