const Jwt = require('jsonwebtoken')
const Secret_Key = "Signin"
const { Blog_Post } = require('../../Models/User_PostModel')
const UpdatePostMiddleWare = (req, res, next) => {
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
const UpdatePostController = async (req, res) => {

    try {
        const { Author_Name, Title, Description, Image, _id, UserID } = req.body.BlogData


        const Result = await Blog_Post.updateOne({ _id: _id }, { $set: { Author_Name: Author_Name, Title: Title, Description: Description, Image: Image } }, {})
        console.log(Result)
        console.log("Update Successfully")
        const findAll = await Blog_Post.find({ UserID: UserID })
        res.send({ message: "Successfully Updated", findall: findAll })
    } catch (error) {
        res.send(error)
    }

}

module.exports = { UpdatePostMiddleWare, UpdatePostController }