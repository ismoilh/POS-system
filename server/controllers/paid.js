const Paid = require("../models/paid");


module.exports.payment = async (req, res) => {
    const paid = new Paid({
        title: req.body.title,
        price: req.body.price,
        owner: req.body.owner,
        address: req.body.address,
        phone: req.body.phone1
    })
    paid.save().then(order => res.json(order)
    );
}

module.exports.payid = (req, res) => {
    Paid.find({})
        .sort({ "created_at": -1 })
        .then((data) => {
            res.json(data);
            console.log(data)
        }).catch(err => {
            res.status(400);
            console.log(err);
        })
}