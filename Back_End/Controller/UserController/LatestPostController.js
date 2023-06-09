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
    
    const {latestid}=req.params
    try {
        const response=await Blog_Post.find({UserID:latestid}).limit(5).sort({$natural:-1}) 
        const TotalPost=await Blog_Post.find({UserID:latestid})
        res.send({response:response,TotalPost:TotalPost.length})

    } catch (error) {
        res.send(error)
    }
}
module.exports={ FiveLatestPost,FiveLatestPostMiddleware }