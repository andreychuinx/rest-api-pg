const db = require('../../config/index')

const updateUser = async (req, res) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const payloadToString = [];
    for (var key of Object.keys(payload)) {
      payloadToString.push(`${key}='${payload[key]}'`)
    }
    await db.query(
      `
        update users set ${payloadToString.join(',')}
        where id=${id}
      `
    )
    res.status(200).send({
      message: 'OK',
    })
  } catch(err) {
    console.log(err, 'ini')
    res.status(400).send({
      message: 'ERROR',
      data: err
    })
  }
}

module.exports = updateUser;