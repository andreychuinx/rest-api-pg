const db = require('../../config/index')

const createUser = async (req, res) => {
  try {
    const { username, fullname, email, phone } = req.body
    await db.query(
      `
        insert into users (username, fullname, email, phone) VALUES
        ('${username}', '${fullname}', '${email}', '${phone}');
      `
    )
    res.status(200).send({
      message: 'OK',
    })
  } catch(err) {
    res.status(400).send({
      message: 'ERROR',
      data: err
    })
  }
}

module.exports = createUser;