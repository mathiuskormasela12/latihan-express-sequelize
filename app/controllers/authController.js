// ===== Auth Controller
// import all modules
const db              = require('../core/db');
const authUtil        = require('../utils/auth');
const Flasher         = require('../core/Flasher');
const bcrypt          = require('bcryptjs');

exports.register      = async (req, res) => {
  const users = db.user;
  const hash  = await authUtil.hashedPassword(req.body.password);

  const data = {
    username: req.body.username,
    password: hash
  }

  try {
    await users.create(data);
    Flasher.setFlash(req, 'success', `New user has been registered`);
    res.status(400).redirect('/register');
  } catch(err) {
    Flasher.setFlash(req, 'warning', `New user has not been registered`);
    res.status(400).redirect('/register');
  }
}

exports.login         = async (req, res) => {
  const users = db.user;
  
  let results = await users.findOne({
    where: {
      username: req.body.username
    }
  });
  
  const compareHash = await authUtil.compareHash(req.body.password, results.password);
  
  if(!results || !compareHash) {
    Flasher.setFlash(req, 'warning', 'Wrong username or Password');
    res.status(200).redirect('/login');;
  } else {
    if(req.body.remember) {
      res.cookie('login', Math.random().toString(), {
        maxAge: (1000 * (60 * 30))
      });
    }

    req.session.login = true;
    Flasher.setFlash(req, 'success', 'berhasil login');
    res.redirect('/');
  }
}

exports.logout = (req, res) => {
  req.session.login = false;
  res.cookie('login', false, {
    maxAge: -(1000 * (60 * 30))
  });
  res.redirect('/login');
}