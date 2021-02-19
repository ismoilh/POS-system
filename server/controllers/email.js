const mailgun = require("mailgun-js");
const DOMAIN = 'sandboxf5268c0f53644472a9b92825ef31e138.mailgun.org';
const mg = mailgun({ apiKey: process.env.MAILGUN_APIKEY, domain: DOMAIN });


module.exports.sent = async (req, res) => {
    let { email, time } = req.body;
    const data = {
        from: 'no-reply@liferando.com',
        to: email,
        subject: 'We received your order',
        html: `
            <h2>Thank you for chosing our restaurant your food will come at ${time}</h2>
        `
    };
    mg.messages().send(data, function (err, body) {
        console.log(body);
        res.json({ msg: "Email has been sent!!!" })
    });
}