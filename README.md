# Boomtown 🏙

First half of Boomtown project, this project was based off building a server containing that database for our App.

### Learning Curve

This project was a very good challenge. I got a chance to learn how the database was built on server side. This project also gave me a good chance to further improve writing JavaScript functions.

#### Challenges

My biggest challenge was writing the functions on the pg-resource.js file which converted the Postgres data into workable JavaScript data.

EG.

```
const newItemTag = await postgres.query({
text: `INSERT INTO itemtags (tagid, itemid) VALUES ${tagsQueryString([tags], itemId)}`,
values: tagId
});
```

## Server

Commands must be run from the `server` directory:

### Installation Instructions

```bash
npm install
```

#### Run

```bash
npm run start:dev
```

#### Tests

Just linting:

```bash
npm run lint
```

Run linting, and fix any errors:

```bash
npm run lint:fix
```

Run Jest tests:

```
npm run jest
```

Run Jest tests, and watch for changes:

```bash
npm run jest:watch
```

Run all tests:

```bash
npm run test
```

## Client

Commands must be run from the `client` directory:

### Installation

```bash
npm install
```

### Run

```bash
npm start
```

### Build

```bash
npm run build
```

### Tests

Just linting:

```bash
npm run lint
```

Run linting, and fix any errors:

```bash
npm run lint:fix
```

Run all tests:

```bash
npm run test
```
