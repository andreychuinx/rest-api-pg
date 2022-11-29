const db = require('../config/index')


const createTableJurusanMatakuliah = async () => {
  try {
    await db.query(
      `
        CREATE TABLE IF NOT EXISTS jurusan_matakuliah (
        id_jurusan_matakuliah serial PRIMARY KEY,
        id_jurusan serial not null,
        id_matakuliah serial not null
      );
      `
    )
  } catch(err) {
    console.log(err, 'ini err')
    return err
  }
}

module.exports = createTableJurusanMatakuliah;