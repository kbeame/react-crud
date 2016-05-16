const express = require('express');
const app = express();
const mongoose = require('mongoose');
var PORT = process.env.PORT || 5555;
const petRouter = require(__dirname + '/routes/petRouter.js');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pet_db');

app.use('/api', petRouter);

app.listen(PORT, () => console.log('server up at: ' + PORT));
