const User = require('../models/user');
const jwt = require('jsonwebtoken');
const mailgun = require("mailgun-js");
const DOMAIN = 'sandboxf5268c0f53644472a9b92825ef31e138.mailgun.org';
const mg = mailgun({ apiKey: process.env.MAILGUN_APIKEY, domain: DOMAIN });

module.exports.register = async (req, res, next) => {
    try {
        let { email, password, username } = req.body;
        if (!email || !password || !username)
            return res.status(400).json({ msg: "Not all fields have been entered." });

        const existingUser = await User.findOne({ email: email, username: username });
        if (existingUser)
            res
                .status(400)
                .json({ msg: "An account with this email or username already exists." });

        const token = jwt.sign({ username, email, password }, process.env.TOKEN_SECRET)
        const data = {
            from: 'no-reply@liferando.com',
            to: email,
            subject: 'Account Activation Link',
            html: `
                <h2>Please verify your account by given link</h2>
                <p>http://localhost:3000/auth/activate/${token}</p>
            `
        };
        mg.messages().send(data, function (err, body) {
            console.log(body);
            res.json({ msg: "Email has been sent!!!" })
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports.getToken = (req, res) => {
    const { token } = req.body;
    res.json(token);

}

module.exports.activateAccount = (req, res) => {
    const { token } = req.body;
    if (token) {
        jwt.verify(token, process.env.TOKEN_SECRET, function (err, decodedToken) {
            if (err) {
                return res.status(400).json({ err: 'Incorrect or Expired Link' })
            }
            const { email, username, password } = decodedToken;


            const newUser = new User({
                email,
                password,
                username
            });
            newUser.save()
                .then(savedUser => {
                    res.json(savedUser);
                })

        })
    } else {
        return res.json({ err: "Something went wrong" })
    }
}


module.exports.login = async (req, res) => {
    try {
        const { email, password, username } = req.body;
        // validate
        if (!email || !password || !username)
            return res.status(400).json({ msg: "Not all fields have been entered." });

        const user = await User.findOne({ email: email, username: username });
        if (!user)
            return res
                .status(400)
                .json({ msg: "No account with this email or username has been registered." });


        const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, {

            expiresIn: '24h' // expires in 24 hours

        });
        res.json({
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            },
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


module.exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        res.json({ deletedUser });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports.tokenIsValid = async (req, res) => {
    try {
        const token = req.header("x-auth-token");
        if (!token) return res.json(false);

        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        if (!verified) return res.json(false);

        const user = await User.findById(verified.id);
        if (!user) return res.json(false);

        return res.json(true);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports.bonus = async (req, res) => {
    try {
        const { bonus } = req.body;
        const { id } = req.params
        const b = User.findOne(id, { bonusFull });
        let sum = await bonus + b;
        const full = await User.findByIdAndUpdate(id, { ...sum });
        await full.save()
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports.mainPage = async (req, res) => {
    const user = await User.findById(req.user);
    res.json({
        user
    });
    cosnole.log(user)
}
