const {CreatePostModelFunction}=require('../../Models/User_PostModel')
const CreatePostController=(req,res)=>
{
    console.log(req.body)
    CreatePostModelFunction(req.body).then((data)=>res.send(data))

}
module.exports={ CreatePostController }