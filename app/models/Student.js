const db = require('../core/db');

module.exports = (sequelize, Sequelize) => {
  const student = sequelize.define('student', {
    nama: {
      type: Sequelize.STRING
    },
    kelas: {
      type: Sequelize.STRING
    },
    jurusan: {
      type: Sequelize.STRING
    },
    foto: {
      type: Sequelize.STRING
    }
  });

  return student;
}