const { buildActionCallApiTrigger } = require("admin-bro");
const { cloudinary } = require("../cloudinary");
const Blog = require('../models/blog')



module.exports.index = async (req, res) => {
    const campgrounds = await Blog.find({})
    res.json({ campgrounds })
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
