const Jwt = require('jsonwebtoken')
const Secret_Key = "Signin"
const { Blog_Post } = require('../../Models/User_PostModel')
const DeletePostMiddleware=(req,res,next)=>
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
const DeletePostController=async(req,res)=>
{
    try {
        const { id,userid }=req.params;
        const DeleteData=await Blog_Post.deleteOne({_id:id})
        const FindAll=await Blog_Post.find({UserID:userid})
        res.send({ message: "Successfully Deleted", findall: FindAll })
    } catch (error) {
        res.send(error)
    }
  


}
module.exports={ DeletePostController,DeletePostMiddleware }