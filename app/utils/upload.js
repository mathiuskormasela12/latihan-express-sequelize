module.exports = (req, res) => {
  if(!req.files) {
    return printResult('warning', 'wajib upload gambar');
  }
}

const printResult = (type, message) => ({ type, message });