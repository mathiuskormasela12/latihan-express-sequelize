const authUtil = require('../utils/auth');
const Flasher  = require('../core/Flasher');

exports.register = (req, res, next) => {
  const {
    username,
    password,
    rePassword
  } = req.body;

  const isAlnum = authUtil.isAlNum(password);

  if(!username || !password || !rePassword) {
    Flasher.setFlash(req, 'warning', `Form can't be empty`);
    res.status(400).redirect('/register');
  }

  else if(username.length < 3) {
    Flasher.setFlash(req, 'warning', `Username must be include at least 3 character`);
    res.status(400).redirect('/register');
  }

  else if(password.length < 5) {
    Flasher.setFlash(req, 'warning', `Password must be include at least 5 character`);
    res.status(400).redirect('/register');
  }

  else if(password !== rePassword) {
    Flasher.setFlash(req, 'warning', `Password don't match`);
    res.status(400).redirect('/register');
  } 

  else if(!isAlnum) {
    Flasher.setFlash(req, 'warning', `Passwprd must include alfanumeric`);
    res.status(400).redirect('/register');
  }

  else {
    next();
  }
};

exports.login     = (req, res, next) => {
  const {
    username,
    password
  } = req.body;

  const isAlnum = authUtil.isAlNum(password);

  if(!username || !password) {
    Flasher.setFlash(req, 'warning', "Form can't be empty");
    res.status(400).redirect('/login');
  }

  else if(username.length < 3) {
    Flasher.setFlash(req, 'warning', `Username must be include at least 3 character`);
    res.status(400).redirect('/login');
  }

  else if(password.length < 5) {
    Flasher.setFlash(req, 'warning', `Password must be include at least 5 character`);
    res.status(400).redirect('/login');
  }

  else if(!isAlnum) {
    Flasher.setFlash(req, 'warning', `Passwprd must include alfanumeric`);
    res.status(400).redirect('/login');
  }

  else {
    next();
  } 
}

exports.isLogin = (req, res, next) => {
  console.log(req.cookies.login)
  if(!req.session.login && !req.cookies.login) {
    res.redirect('/login');
  } else if(req.cookies.login) {
    req.session.login = true;
    next();
  } else {
    next();
  }
}