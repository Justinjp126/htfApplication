# MERN Boilerplate

## Introduction 👋

This is a full-stack boilerplate using MongoDB, Express.js, React.js, Node.js, and Typescript.
This application allows for HTF members to apply to the club with this form I created.

## Setup 🔨

Install all dependencies for `client/` and `server/`.

In two separate terminals:

```
cd client
npm install
```

```
cd server
npm install
```

Create `.env` files in both `client/` and `server/`

```
root/
  client/
    .env
  server/
    .env
```

`client/.env`

```
NODE_ENV=development
REACT_APP_SERVER_URL=http://localhost:8080
```

`server/.env`

```
NODE_ENV=development
PORT=8080
MONGO_URI=mongodb://localhost:27017/mern-db
CLIENT_URL=http://localhost:3000
```

### Running client and server

In two separate terminals:

```
cd client
npm start
```

```
cd server
npm start
```

## Technologies ⚙

### Frontend

- [React.js](https://reactjs.org/)
  - [Create-react-app](https://create-react-app.dev/)
- [MUI](https://mui.com)
- [React-Redux](https://react-redux.js.org/)
  - [Redux-toolkit](https://redux-toolkit.js.org/)
- [Axios](https://axios-http.com/)

### Backend

- [MongoDB](https://www.mongodb.com/)
  - [Mongoose](https://mongoosejs.com/)
- [Express.js](https://expressjs.com/)

### Others

- [Eslint](https://eslint.org/) (Linter)
- [Prettier](https://prettier.io/) (Formatter)
