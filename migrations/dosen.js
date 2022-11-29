const db = require('../config/index')


const createTableDosen = async () => {
  try {
    await db.query(
      `
        CREATE TABLE IF NOT EXISTS Dosen (
        id_dosen serial PRIMARY KEY,
        nama_dosen varchar(30) not null,
        tanggal_lahir date,
        alamat varchar(50)
      );
      `
    )
  } catch(err) {
    console.log(err, 'ini err')
    return err
  }
}

module.exports = createTableDosen;