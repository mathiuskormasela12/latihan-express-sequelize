// ===== Pages Controller
// import all modules
const db            = require('../core/db');
const Flasher       = require('../core/Flasher');

exports.home        = async (req, res) => {
  const student = db.student;

  const props = {
    title: 'Home',
    type: req.session.type,
    message: req.session.message
  };

  
  props.data = await student.findAll();
  props.data = props.data.map((item, index) => {
    return {
      id: item.id,
      no: index + 1,
      nama: item.nama,
      kelas: item.kelas,
      jurusan: item.jurusan,
      foto: item.foto
    };
  });
  res.render('index', props);
  Flasher.removeFlash(req);
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