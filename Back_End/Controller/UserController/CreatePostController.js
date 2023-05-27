const { CreatePostModelFunction } = require('../../Models/User_PostModel')
const Jwt = require('jsonwebtoken')
const Secret_Key = "Signin"

const CreatePostMiddleWare = (req, res, next) => {
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

const CreatePostController = (req, res) => {
    CreatePostModelFunction(req.body).then((data) => res.send(data))

}
module.exports = { CreatePostMiddleWare, CreatePostController }