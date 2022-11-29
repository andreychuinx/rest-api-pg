const db = require('../../config/index')

const listMahasiswa = async (req, res) => {
  try {
    const query = await db.query(
      `
        select mh.nik, mh.nama, mh.tanggal_lahir, mh.alamat, jr.nama_jurusan
        from mahasiswa mh
        inner join jurusan jr
        on mh.id_jurusan = jr.id_jurusan;
      `
    )
    res.status(200).send({
      message: 'OK',
      data: query.rows
    })
  } catch(err) {
    console.log(err)
    res.status(400).send({
      message: 'ERROR',
      data: err
    })
  }
}

module.exports = listMahasiswa;