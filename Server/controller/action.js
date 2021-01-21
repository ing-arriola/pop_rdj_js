const router = require('express').Router();
const User = require('../models/Users');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
    // validate user
    const isEmailExist = await User.findOne({ email: req.body.email });
    if (isEmailExist) {
        return res.status(400).json(
            {error: 'Email ya registrado'}
        )
    }
    // hash password
    const salt = await bcrypt.genSalt(10);
    //const password = await bcrypt.hash(req.body.password, salt);
    const user = new User({
        name: req.body.name,
        lastname: req.body.lastname,
        age: req.body.age,
        location: req.body.location,
        phone: req.body.phone,
        phone2: req.body.phone2,
        email: req.body.email,
        education: req.body.education,
        profession: req.body.profession,
        about: req.body.about,

    });
    try {
        const savedUser = await user.save();
        res.json({
            error: null,
            data: savedUser
        })
    } catch (error) {
        res.status(400).json({error})
    }
});
module.exports = router;
