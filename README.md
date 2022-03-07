## What you should download at first

You need to download [yarn](https://yarnpkg.com/) in order to run commands via cmd.

## Getting started

`1.` Clone this repository;\n
`2.` Check the `.env.example` file then replace the details with your own (You can see them below);\n
`3.` Run `yarn dev` to run the development server on port 3000.

## Scripts

You can see all the scripts in `package.json`.

`yarn start` - Run the server.
`yarn dev` - Run the development server.
`yarn build` - Compile TypeScript.

## Resources (.env file)

`MONGODB_URL` - [Your MongoDB database url](https://www.mongodb.com/basics/create-database)
`DISCORD_CLIENT_ID` - [Your bot ID](https://discord.com/developers/applications)
`DISCORD_CLIENT_SECRET` - Your client secret (Choose your application [here](https://discord.com/developers/applications) -> OAuth2)
`BOT_TOKEN` - Your bot token.

You should also visit your application -> OAuth2 -> Add a new redirct URI and paste this -> http://localhost:3000/api/auth/discord/redirect.
