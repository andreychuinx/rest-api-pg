const express = require('express')
const app = express()
const userRoutes = require('./routes/user')
const port = process.env.PORT
app.use(express.json())


//Routes
app.use('/user', userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})