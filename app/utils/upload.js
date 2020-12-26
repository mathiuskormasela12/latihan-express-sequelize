module.exports = (req, res) => {
  if(!req.files) {
    return printResult('warning', 'wajib upload gambar');
  }

  const foto = req.files.foto;

  // checking file type
  const validExt = /jpg|jpeg|png/gi;
  const isImgExt = validExt.test(foto.name);
  const isImgMimeExt = validExt.test(foto.mimeType);

  if(!isImgExt && !isImgMimeExt) {
    return printResult('warning', 'Yang anda upload bukan gambar');
  }

  // checking image size
  if(foto.size > 3000000) {
    return printResult('warning', 'maks ukuran gambar 3mb');
  }

  let file = foto.name.split('.')[0];
  const ext = foto.name.split('.')[1].toLowerCase();
  file += '-';
  file += Date.now();
  file += '.';
  file += ext;

  foto.mv('./public/uploads/' + file);
  return file;
}

const printResult = (type, message) => ({ type, message });