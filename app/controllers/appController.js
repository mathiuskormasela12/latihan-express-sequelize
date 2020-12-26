// ===== App Controler
const db              = require('../core/db');
const Flasher = require('../core/Flasher');
const upload          = require('../utils/upload');

exports.add           = async (req, res) => {
  const student = db.student;
  const foto    = await upload(req, res);
  
  if(typeof foto === 'object') {
    Flasher.setFlash(req, foto.type, foto.message);
    return res.redirect('/add');
  }

  const data = {
    nama: req.body.nama,
    kelas: req.body.kelas,
    jurusan: req.body.jurusan,
    foto
  }

  try {
    await student.create(data);
    Flasher.setFlash(req, 'success', 'berhasil menambah data');
    res.redirect('/');
  } catch(err) {
    Flasher.setFlash(req, 'danger', 'Data could not added Server Error');
    return res.redirect('/add');
  }
}