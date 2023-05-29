const { Blog_Post } =require('../../Models/User_PostModel')
const Jwt = require('jsonwebtoken')
const Secret_Key = "Signin"
const FiveLatestPostMiddleware=(req,res,next)=>
{
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
const FiveLatestPost=async(req,res)=>
{
    console.log(req.params)
    const {latestid}=req.params
    console.log("hello")
    try {
        const response=await Blog_Post.find({UserID:latestid}).limit(5).sort({$natural:-1}) 
        res.send(response)

    } catch (error) {
        res.send(error)
    }
}
module.exports={ FiveLatestPost,FiveLatestPostMiddleware }