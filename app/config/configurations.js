require('dotenv').config();

exports.session  = {
  secret: process.env.SECRET,
  saveUninitialized: true,
  resave: true
};

exports.upload   = { 
  createParentPath: true 
};
