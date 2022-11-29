const tableUser = require('./user')
const tableDosen = require('./dosen')
const tableJurusan = require('./jurusan')
const tableMataKuliah = require('./mataKuliah')
const tableMahasiswa = require('./mahasiswa')
const tableJurusanMatakuliah = require('./jurusanMatakuliah')

const dbInit = async () => {
  try {
    // await tableUser()
    // await tableDosen()
    await tableJurusan()
    await tableMataKuliah()
    // await tableMahasiswa()
    // await tableJurusanMatakuliah()
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

dbInit()