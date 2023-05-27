const Jwt = require('jsonwebtoken')
const Secret_Key = "Signin"
const { Blog_Post } = require('../../Models/User_PostModel')
const PersonalBlogMiddleWare = (req, res, next) => {
    if (req.headers.authorization) {
        const Token = req.headers.authorization.split(' ')
        Jwt.verify(Token[1], Secret_Key, (err) => {
            if (err) {
                res.send({ message: "Un Authorized User token" })
            }
            else {
                next()
            }
        })
    }
    else {
        res.send({ message: "Un Authorized User" })
    }
}
const FetchPersonalBlogController = async (req, res) => {
    const { id } = req.params;
    try {
        const Fetchdata = await Blog_Post.find({ UserID: id })
        res.send(Fetchdata)
    } catch (error) {
        res.send(error)
    }

}
module.exports = { PersonalBlogMiddleWare, FetchPersonalBlogController }