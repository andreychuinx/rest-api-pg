const insertUsers = require('./user')
const insertDosen = require('./dosen')
const insertJurusan = require('./jurusan')
const insertMatakuliah = require('./matakuliah')
const insertMahasiswa = require('./mahasiswa')

const dataInit = async () => {
  try {
    // await insertUsers()
    // await insertDosen()
    await insertJurusan()
    // await insertMatakuliah()
    // await insertMahasiswa()
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

dataInit()