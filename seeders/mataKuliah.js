const db = require('../config/index')


const insertMatakuliah = async () => {
  try {
    await db.query(
      `
      INSERT INTO matakuliah (nama_matakuliah, jumlah_sks) VALUES
      ('Algoritma', 10),
      ('Perancangan Bisnis', 20),
      ('Psuedocode', 5),
      ('Perencanaan Sumber Daya Perusahaan.', 5),
      ('Manajemen Proyek Teknologi Informasi.', 5),
      ('Manajemen Risiko Teknologi Informasi.', 5),
      ('Keamanan Aset Informasi.', 5),
      ('Analisis dan Desain Perangkat Lunak.', 5),
      ('Rekayasa Perangkat Lunak.', 5),
      ('Komputasi Berbasis Jaringan.', 5),
      ('Komputasi Cerdas dan Visi.', 5),
      ('Arsitektur dan Jaringan Komputer.', 5),
      ('Grafika, Interaksi dan Game.', 5),
      ('Algoritma dan Pemrograman.', 5),
      ('Manajemen Cerdas Informasi.', 5),
      ('Pemodelan dan Komputasi Terapan.', 5),
      ('Pengantar Bisnis.', 5),
      ('Matematika Ekonomi dan Keuangan.', 5),
      ('Ekonomi Pembangunan.', 5),
      ('Ekonometrika', 5),
      ('Sistem keuangan.', 5),
      ('Perekonomian Indonesia.', 5),
      ('Manajemen Perbankan.', 5),
      ('Valuasi Korporat.', 5)

      `
    )
  } catch(err) {
    console.log(err, 'ini err')
    return err
  }
}

module.exports = insertMatakuliah;