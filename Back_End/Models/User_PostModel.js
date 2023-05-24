const mongoose=require('mongoose')


// defiining User_Post Schema

const Blog_Post_Schema=new mongoose.Schema({
    Author_Name:{type:String},
    Blog_Category:{type:String},
    Title:{type:String},
    Description:{type:String},
    Image:{type:String},
})


// compiling Post_Schema

const Blog_Post=mongoose.model('Blog_Post',Blog_Post_Schema)
