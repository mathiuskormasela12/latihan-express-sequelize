// ===== Pages Controller
// import all modules
const Flasher       = require('../core/Flasher');

exports.home        = (req, res) => {
  const props = {
    title: 'Home',
    type: req.session.type,
    message: req.session.message
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

exports.login         = (req, res) => {
  const props = {
    title: 'Login',
    message: req.session.message,
    type: req.session.type
  };

  res.render('login', props);
  Flasher.removeFlash(req);
};

exports.add = (req, res) => {
  const props =  {
    title: 'Add',
    message: req.session.message,
    type: req.session.type
  };
  console.log(req.session.message)
  res.render('add', props);
  Flasher.removeFlash(req);
}