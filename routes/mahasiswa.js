const express = require('express');
const Router = express.Router();
const listController = require('../controllers/mahasiswa/list')
const detailController = require('../controllers/mahasiswa/detail')
// const createController = require('../controllers/user/create')
// const updateController = require('../controllers/user/update')
// const deleteController = require('../controllers/user/delete')

/* GET users listing. */
Router.get('/list',listController);
Router.get('/detail/:id',detailController);
// Router.post('/create',createController);
// Router.put('/update/:id',updateController);
// Router.delete('/delete/:id',deleteController);

module.exports = Router;