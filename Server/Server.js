const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors')
require('dotenv').config()
const app = express();
app.use(cors());

// start the server in the port 3005 !
app.listen(3000, function () {
    console.log('App listening on port 3005.');
});
