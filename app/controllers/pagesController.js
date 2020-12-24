// ===== Pages Controller
// import all modules
const Flasher       = require('../core/Flasher');

exports.home        = (req, res) => {
  const props = {
    title: 'Home'
  };

  res.render('index', props);
};

exports.register     = (req, res) => {
  const props = {
    title: 'Register',
    message: req.session.message,
    type: req.session.type
  };

  res.render('register', props);
  Flasher.removeFlash(req);
}