const insertUsers = require('./user')

const dataInit = async () => {
  try {
    await insertUsers()
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

dataInit()