const db = require('../../config/index')

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await db.query(
      `
        delete from users where id =${id}
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

module.exports = deleteUser;