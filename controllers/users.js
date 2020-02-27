const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

function createJWT(user) {
    return jwt.sign({ user }, SECRET, { expiresIn: '24h' });
}

async function signup(req, res) {
    try {
        const user = await User.create(req.body);
        res.json(user);
        // const token = createJWT(user);
        // res.json({ token })
    } catch (error) {
        res.status(400).json(error);
    }
};


module.exports = {
    signup
}