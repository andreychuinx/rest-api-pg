const db = require('../config/index')


const createTableUser = async () => {
  try {
    await db.query(
      `
        CREATE TABLE IF NOT EXISTS users (
        id serial PRIMARY KEY,
        username VARCHAR ( 50 ) UNIQUE NOT NULL,
        fullname VARCHAR ( 50 ) NOT NULL,
        email VARCHAR ( 255 ) UNIQUE NOT NULL,
        phone VARCHAR ( 50 ) UNIQUE NOT NULL,
        created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
      `
    )
  } catch(err) {
    console.log(err, 'ini err')
    return err
  }
}

module.exports = createTableUser;