const db = require('../config/index')


const insertUsers = async () => {
  try {
    await db.query(
      `
      INSERT INTO users (username, fullname, email, phone) VALUES
      ('ridho', 'Ridho Mufti Asyari', 'ridho@gmail.com', '081222261664'),
      ('andi', 'andi sutisna', 'andi@gmail.com', '081222261614'),
      ('rizki', 'rizki arif', 'rizki@gmail.com', '081222261264'),
      ('mazhuri', 'aziz', 'mazhuri@gmail.com', '081222261244');
      `
    )
  } catch(err) {
    console.log(err, 'ini err')
    return err
  }
}

module.exports = insertUsers;