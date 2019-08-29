# Boomtown 🏙

## Server

First half of Boomtown project, this project was based off building a server containing the database for our App.

### Learning Curve

This project was a very good challenge, where I got a chance to learn how database's are built on the server side. This project also gave me a good chance to further improve writing JavaScript functions.

#### Challenges

My biggest challenge was writing functions on the pg-resource.js file which converted the Postgres data into workable JavaScript data. Specifically the newItemTag function where we had to connect newly added tags to newly added items.

EG.

```
        const newItemTag = await postgres.query({
        text: `INSERT INTO itemtags (tagid, itemid) VALUES ${tagsQueryString([tags], itemId)}`,
        values: tagId
        });
```

### Installation Instructions

Commands must be run from the `server` directory:

## Server

```bash
npm install
```

#### Run

```bash
npm run start:dev
```

## Client

Commands must be run from the `client` directory:

### Installation

```bash
yarn install
```

### Run

```bash
yarn run start
```
