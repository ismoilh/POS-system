const Paid = require("../models/paket");


module.exports.payment = async (req, res) => {
    const paid = new Paid({
        price: req.body.price,
        owner: req.body.owner,
        address: req.body.address,
        phone: req.body.phone1,
        paketcid: req.body.paketcid
    })
    paid.save().then(order => res.json(order)
    );
}

module.exports.payid = (req, res) => {
    Paid.find({})
        .then((data) => {
            res.json(data);
            console.log(data)
        }).catch(err => {
            res.status(400);
            console.log(err);
        })
}