const { Blog_Post } =require('../../Models/User_PostModel')
const Getallblogs=async(req,res)=>
{
    try {
        const FindAllBlog = await Blog_Post.find()
        res.send(FindAllBlog)

    } catch (error) {
         console.log(error)
    }
}
module.exports={ Getallblogs }