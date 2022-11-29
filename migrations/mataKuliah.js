const db = require('../config/index')


const createTableMatakuliah = async () => {
  try {
    await db.query(
      `
        CREATE TABLE IF NOT EXISTS Matakuliah (
        id_matakuliah serial PRIMARY KEY,
        nama_matakuliah varchar(50) not null,
        jumlah_sks int,
        status char(1)
      );
      `
    )
  } catch(err) {
    console.log(err, 'ini err')
    return err
  }
}

module.exports = createTableMatakuliah;