const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    lastname: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    age: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    phone: {
        type: Number,
        required: true,
    },
    phone2: {
        type: Number
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    education: {
        type: String,
        required: true,
        min: 6,
        max: 100
    },
    profession: {
        type: String,
        required: true,
        min: 6,
        max: 100
    },
    about: {
        type: String,
        required: true,
        min: 100,
        max: 1024
    },
})

module.exports = mongoose.model('User', userSchema);
/*
*{
    "name": "Raul",
    "lastname": "sda",
    "age": 12,
    "location": "SS",
    "phone": 78452123,
    "phone2": 78452123,
    "email": "kira200017717@uca.sdas",
    "education": "Universdad",
    "profession": "ING",
    "about": "MEE"
  }
* */
