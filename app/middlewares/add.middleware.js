// ==== Add Middleware
// import all modules
const Flasher       = require('../core/Flasher');
const upload        = require('../utils/upload');

exports.add         = async (req, res, next) => {
  const {
    nama,
    kelas,
    jurusan
  } = req.body;

  if(!nama || !kelas || !jurusan) {
    Flasher.setFlash(req, 'warning', "Form can't be empty");
    return res.redirect('/add');
  }

  const foto = await upload(req, res);
  console.log(foto)
  if(typeof foto === 'object') {
    Flasher.setFlash(req, foto.type, foto.message);
    return res.redirect('/add');
  }
}