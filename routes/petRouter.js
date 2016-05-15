const Router = require('express').Router;
const Pet = require(__dirname + '/../models/petModels.js');
const bodyParser = require('body-parser').json();
const errorHandler = require(__dirname + '/../lib/errorHandler.js');

var petRouter = module.exports = new Router();

petRouter.get('/pet', (req, res) => {
  Pet.find({}, (err, data) => {
    if (err) errorHandler(err, res);
    res.status(200).json(data);
  });
});

petRouter.post('/pet', bodyParser, (req, res) => {
  var newPet = new Pet(req.body);
  newPet.save((err, data) => {
    if (err) errorHandler(err, res);
    res.status(200).json(data);
  });
});
