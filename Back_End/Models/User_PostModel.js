const mongoose = require('mongoose')
const moment = require('moment')
// defiining User_Post Schema
const Blog_Post_Schema = new mongoose.Schema({
    Author_Name: { type: String },
    Title: { type: String },
    Description: { type: String },
    Image: { type: String },
    UserID: { type: String },
    Publish_Date: { type: Date }
})
// compiling Post_Schema
const Blog_Post = mongoose.model('Blog_Post', Blog_Post_Schema)
const CreatePostModelFunction = async (CreatePostData) => {

    const date = moment(new Date()).format('YYYY-MM-DD')
    const { Author_Name, Title, Description, Image } = CreatePostData.BlogData;
    const { ID } = CreatePostData
    const InserPost = new Blog_Post({
        Author_Name: Author_Name,
        Title: Title,
        Description: Description,
        Image: Image,
        UserID: ID,
        Publish_Date: date

    })
    const result = await InserPost.save()
    return result
}

module.exports = { Blog_Post, CreatePostModelFunction }

