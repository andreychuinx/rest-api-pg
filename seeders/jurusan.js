const db = require('../config/index')


const insertJurusan = async () => {
  try {
    await db.query(
      `
      INSERT INTO jurusan (nama_jurusan) VALUES
      ('Tehnik Informatika'),
      ('Sistem Informatika'),
      ('Ekonomi');
      `
    )
  } catch(err) {
    console.log(err, 'ini err')
    return err
  }
}

module.exports = insertJurusan;