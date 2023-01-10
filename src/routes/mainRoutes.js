const express = require('express');

const route = express.Router();
const { Card } = require('../../db/models');
const render = require('../lib/render');
const Main = require('../views/Main');

route.get('/', async (req, res) => {
  // const allCard = await Card.findAll();
  const allCard = [{
    link: 'https://pepelsbey.net/pres/web-in-curves/pictures/hypnotoad.png',
    title: '2',
    status: true,
    id: 1,
  },
  {
    link: 'https://pepelsbey.net/pres/web-in-curves/pictures/hypnotoad.png',
    title: '21',
    status: true,
    id: 1,
  },
  {
    link: 'https://pepelsbey.net/pres/web-in-curves/pictures/hypnotoad.png',
    title: '211',
    status: true,
    id: 1,
  },
  {
    link: 'https://pepelsbey.net/pres/web-in-curves/pictures/hypnotoad.png',
    title: '211',
    status: true,
    id: 1,
  },
  {
    link: 'https://pepelsbey.net/pres/web-in-curves/pictures/hypnotoad.png',
    title: '211',
    status: true,
    id: 1,
  },
  {
    link: 'https://pepelsbey.net/pres/web-in-curves/pictures/hypnotoad.png',
    title: '211',
    status: true,
    id: 1,
  },
  ];
  const user = req.session?.userName;
  console.log('111111', allCard);
  render(Main, { allCard, user }, res);
});

module.exports = route;
