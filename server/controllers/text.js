const Text = require('../models/text')

module.exports.index = async (req, res) => {
    await Text.find({})
        .then(data => {
            res.status(200).json(data)
        })
}