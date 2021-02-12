const Category = require('../models/category')


module.exports.show = (req, res) => {
    Category.find({})
        .then(data => {
            res.json(data)
        })
}