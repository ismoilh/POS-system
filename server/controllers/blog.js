const { buildActionCallApiTrigger } = require("admin-bro");
const { cloudinary } = require("../cloudinary");
const Blog = require('../models/blog')



module.exports.index = async (req, res) => {
    const { id } = req.params;
    await Blog.find(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
}


module.exports.createCampground = async (req, res) => {

    const campground = new Blog({
        title: req.body.title,
        description: req.body.desc
    });
    await campground.save().then(blog => res.json(blog));
}

module.exports.showBlog = (req, res) => {
    Blog.findById(req.params.id)
        .exec(function (err, blog) {
            if (err) {
                res.send(err)
            }
            if (!blog) {
                res.status(404)
            }
            res.json(blog);
        })
}
