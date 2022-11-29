const db = require('../config/index')


const insertDosen = async () => {
  try {
    await db.query(
      `
      INSERT INTO dosen (nama_dosen, tanggal_lahir, alamat) VALUES
      ('salman', '21/11/1980', 'Jl. Kebangsaan'),
      ('najib', '11/11/1980', 'Jl. Keguruan'),
      ('fikri', '01/11/1980', 'Jl. Kemuridan');
      `
    )
  } catch(err) {
    console.log(err, 'ini err')
    return err
  }
}

module.exports = insertDosen;