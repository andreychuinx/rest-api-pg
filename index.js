const express = require('express')
const app = express()
const userRoutes = require('./routes/user')
const mahasiswaRoutes = require('./routes/mahasiswa')
const port = process.env.PORT
app.use(express.json())


//Routes
app.use('/user', userRoutes);
app.use('/mahasiswa', mahasiswaRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})