// ===== Server
// import all modules
const express       = require('express');
const dotenv        = require('dotenv');
const path          = require('path');
const db            = require('./app/core/db');

// setup dotenv
dotenv.config({ path: './.env'});

// init port
const PORT          = process.env.PORT || 3000;

// init app
const app           = express();

// setup urlencoded & json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// setup static files
app.use(express.static(path.join(__dirname, './public')));

// setup template engine
app.set('views', path.join(__dirname, './app/views'));
app.set('view engine', 'hbs');

// sync database
db.sequelize.sync();

app.use('/', require('./app/routes/pages'));
app.use('/', require('./app/routes/app'));

app.listen(PORT, () => {
  console.log(`Magic happen at http://127.0.0.1:${PORT}`);
});