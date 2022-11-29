const db = require('../config/index')


const createTableJurusan = async () => {
  try {
    await db.query(
      `
        CREATE TABLE IF NOT EXISTS Jurusan (
        id_jurusan serial PRIMARY KEY,
        nama_jurusan varchar(20) not null
      );
      `
    )
  } catch(err) {
    return err
  }
}

module.exports = createTableJurusan;