require('dotenv').config();

module.exports = {
  secret: process.env.SECRET,
  saveUninitialized: true,
  resave: true
};