const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        console.log(user);
        if (!user) return res.status(400).json({ err: 'User not found' })
        console.log(req.body);
        user.comparePassword(req.body.password, (err, isMatch) => {
            console.log(isMatch);
            if (isMatch) {
                const token = createJWT(user);
                res.json({ token })
            } else {
                return res.status(401).json({ err: 'Bad Credentials' });
            }
        })
    } catch (error) {
        res.status(500).json({ err: 'This cannot be completed at this time' });
    }
}

async function signup(req, res) {
    try {
        const user = await User.create(req.body);

        const token = createJWT(user);

        res.json({ token })
    } catch (error) {
        res.status(400).json(error);
    }
};
function createJWT(user) {
    return jwt.sign({ user }, SECRET, { expiresIn: '24h' });
}

module.exports = {
    signup,
    login
}