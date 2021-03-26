const Zeit = require('../models/text')

module.exports.index = async (req, res) => {
    await Zeit.find({})
        .then(data => {
            res.status(200).json(data)
        })
}