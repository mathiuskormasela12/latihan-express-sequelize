// ==== Add Middleware
// import all modules
const Flasher       = require('../core/Flasher');

exports.add         = (req, res, next) => {
  const {
    nama,
    kelas,
    jurusan
  } = req.body;

  if(!nama || !kelas || !jurusan) {
    Flasher.setFlash(req, 'warning', "Form can't be empty");
    return res.redirect('/add');
  } else {
    next();
  }
}