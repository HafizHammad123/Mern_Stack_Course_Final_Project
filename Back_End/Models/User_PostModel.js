const mongoose = require('mongoose')



// defiining User_Post Schema
const Blog_Post_Schema = new mongoose.Schema({
    Author_Name: { type: String },
    Title: { type: String },
    Description: { type: String },
    Image: { type: String },
})


// compiling Post_Schema

const Blog_Post = mongoose.model('Blog_Post', Blog_Post_Schema)

const CreatePostModelFunction = async (CreatePostData) => {
    const { AuthorName, Title, Description, Img } = CreatePostData

    const InserPost = new Blog_Post({
        Author_Name: AuthorName,
        Title: Title,
        Description: Description,
        Image: Img,
    })
    const result = await InserPost.save()
    console.log(result)
    console.log("record insert")
    return result
}

module.exports = { CreatePostModelFunction }

