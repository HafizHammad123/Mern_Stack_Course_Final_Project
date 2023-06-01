const { Blog_Post } = require('../../Models/User_PostModel')
const LatestThreePost = async (req, res) => {
    try {
        const find = await Blog_Post.find({ UserID: req.params.UserID }).limit(4).sort({ $natural: -1 })
        res.send(find)
    } catch (error) {
        res.send(error)
    }


}
module.exports = { LatestThreePost }