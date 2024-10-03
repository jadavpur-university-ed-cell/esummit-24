# Todos For Events Registration
- [x] Check if same emails cant be repeated
- [x] wrap this up to check with db if the team name is already taken
- [x] check the valid eventName
- [x] handling the null entries
- [x] Check if the email is a registered user and a team member or not
- [x] final submission
- [x] zod verification on frontend ??
- [ ] user without email verification are not allowed
- [x] db call optimization

# issues
- [ ] White bg at esummit's homepage


# Todos for Merch
- [x] set Shirt size
- [x] Add basic UI
- [x] server action
- [x] Payment Integration
- [ ] Admin Side Code Remaining

# Documentation

### Stack
- TailwindCSS
- Typescript
- NextJS
- Prisma
- Postgres
> Other tools: Zod for validation, Nodemailer for emails, NextAuth/AuthJS for authentication

### Setting up the project locally for development

```sh
 git clone https://github.com/jadavpur-university-ed-cell/esummit-24.git
 ```

```sh
 npm install
 ```

 - Setup a local database to test the site while developing. You can refer to this [article](https://chaicode.com/blogs/effortless-postgresql-installation-instructions), or this [Youtube video](https://www.youtube.com/watch?v=EhapnaEKl-w).

 - Add the necessary environment variables to a .env file.

 - The adminer part of the docker-compose is not required, we can run ```npx prisma studio``` in the terminal to check the data in the database.