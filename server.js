// ===== Server
// import all modules
const express       = require('express');
const dotenv        = require('dotenv');
const path          = require('path');

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

app.use('/', require('./app/routes/pages'));

app.listen(PORT, () => {
  console.log(`Magic happen at http://127.0.0.1:${PORT}`);
});