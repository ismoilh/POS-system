const Distance = require("../models/distance")


module.exports.showDist = () => {
    Distance.find()
        .then(data => {
            res.json(data)
        })
}