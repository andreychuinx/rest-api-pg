const db = require('../config/index')


const createTableMahasiswa = async () => {
  try {
    await db.query(
      `
        CREATE TABLE IF NOT EXISTS Mahasiswa (
        nik char(9) PRIMARY KEY,
        nama varchar(20) not null,
        tanggal_lahir date,
        alamat varchar(50),
        id_jurusan serial
      );
      `
    )
  } catch(err) {
    console.log(err, 'ini err')
    return err
  }
}

module.exports = createTableMahasiswa;