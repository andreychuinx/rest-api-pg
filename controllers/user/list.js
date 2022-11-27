const db = require('../../config/index')

const listUsers = async (req, res) => {
  try {
    const query = await db.query(
      `
        select * from users;
      `
    )
    console.log(query, 'ini')
    res.status(200).send({
      message: 'OK',
      data: query.rows
    })
  } catch(err) {
    res.status(400).send({
      message: 'ERROR',
      data: err
    })
  }
}

module.exports = listUsers;