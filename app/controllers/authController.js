// ===== Auth Controller
// import all modules
const db              = require('../core/db');
const authUtil        = require('../utils/auth');
const Flasher         = require('../core/Flasher');

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