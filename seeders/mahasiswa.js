const db = require('../config/index')


const insertMatakuliah = async () => {
  try {
    const selectJurusan = await db.query(
      `
        select id_jurusan from jurusan;
      `
    )
    await db.query(
      `
      INSERT INTO mahasiswa (nik, nama, tanggal_lahir, alamat, id_jurusan) VALUES
      ('001001', 'Andrey', '14-01-1992', 'Jl. Mangga', ${selectJurusan.rows[0].id_jurusan}),
      ('001002', 'Amrulloh', '14-02-1992', 'Jl. Sirsak', ${selectJurusan.rows[0].id_jurusan}),
      ('001003', 'Endah', '14-03-1992', 'Jl. Rambutan', ${selectJurusan.rows[2].id_jurusan});
      `
    )
  } catch(err) {
    console.log(err, 'ini err')
    return err
  }
}

module.exports = insertMatakuliah;