const Text = require('../models/text');
const Seo = require('../models/seo')

module.exports.index = async (req, res) => {
    await Text.find({})
        .then(data => {
            res.status(200).json(data)
        })
}

module.exports.seo = async (req, res) => {
    await Seo.find({})
        .then(data => {
            res.status(200).json(data)
        })
}

