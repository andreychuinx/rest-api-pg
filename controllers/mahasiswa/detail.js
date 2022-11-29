const db = require('../../config/index')

const detailMahasiswa = async (req, res) => {
  try {
    const { id } = req.params;
    const query = await db.query(
      `
        select mh.nik, mh.nama, mh.tanggal_lahir, mh.alamat,
        jr.nama_jurusan,
        mk.nama_matakuliah as matakuliah
        from mahasiswa mh
        inner join jurusan jr
        on mh.id_jurusan = jr.id_jurusan
        left join jurusan_matakuliah jk
        on mh.id_jurusan = jk.id_jurusan
        left join matakuliah mk
        on mk.id_matakuliah = jk.id_matakuliah
        where mh.nik = '${id}'
        ;
      `
    )
    const result = query.rows.reduce((acc, cur) => {
      if (acc && acc.matakuliah) {
        acc.matakuliah.push(cur.matakuliah)
      } else {
        acc = {
          ...cur,
          matakuliah: []
        }
      }
      return acc
    }, {})
    res.status(200).send({
      message: 'OK',
      data: result
    })
  } catch(err) {
    console.log(err)
    res.status(400).send({
      message: 'ERROR',
      data: err
    })
  }
}

module.exports = detailMahasiswa;