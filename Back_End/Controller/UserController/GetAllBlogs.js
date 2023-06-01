const { Blog_Post } =require('../../Models/User_PostModel')
const Getallblogs=async(req,res)=>
{
    try {
        const FindAllBlog = await Blog_Post.find()
        const data=Math.floor(FindAllBlog.length/2)
        const response=await Blog_Post.find().limit(data).sort({$natural:-1}) 
        res.send({FindAllBlog:FindAllBlog,LatestBlogs:response})

    } catch (error) {
        res.send(error)
    }
}
module.exports={ Getallblogs }