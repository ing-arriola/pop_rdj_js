const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors')
require('dotenv').config()
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());



// bd connect
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@pop.zsndr.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => console.log('DB Connected'))
    .catch(e => console.log('error db:', e))

const authRoutes = require('./controller/action');
app.use('/api/user', authRoutes);
// start the server in the port 3005 !
app.listen(3000, function () {
    console.log('App listening on port 3005.');
});
