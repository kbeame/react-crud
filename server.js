const express = require('express');
const app = express();
const mongoose = require('mongoose');
var PORT = process.env.PORT || 5555;
const petRouter = require(__dirname + '/routes/petRouter.js');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pet_db');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
  next();
});

app.use('/api', petRouter);

app.listen(PORT, () => console.log('server up at: ' + PORT));
