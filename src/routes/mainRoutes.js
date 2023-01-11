const express = require('express');

const route = express.Router();
const {
  renderHome,
  renserOneCardMain,
} = require('../controllers/mainControllers');

route.get('/', renderHome);
route.get('/onecard/:id', renserOneCardMain);

module.exports = route;
