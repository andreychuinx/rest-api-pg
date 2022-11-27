const tableUser = require('./user')

const dbInit = async () => {
  try {
    await tableUser()
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

dbInit()