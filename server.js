// Dependencies
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

// const { Sequelize } = require('sequelize');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
const hbs = exphbs.create({ helpers });

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict'
  },
  resave: false,
  saveUninitialized: true,
  // store: new SequelizeStore({
  //   db: sequelize
  // })
};

app.use(session(sess));

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
// app.use(require('./controllers/index'));

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening on  http://localhost:' + PORT));
// });