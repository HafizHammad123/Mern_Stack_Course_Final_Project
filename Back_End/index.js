const express=require('express')
const cors=require('cors')
const app=express()
app.use(cors())



// Create Api Here

// signup Api

app.put('/User_Signup',(req,res)=>
{

})

// signin Api

app.post('/User_Signin',(req,res)=>
{

})

// User Blog Post Create Api

app.put('/User_CreatePost',(req,res)=>
{

})

// User Blog Post Delete Api

app.delete('/User_DeletePost',(req,res)=>
{
    
})

// User Blog Post Update Api

app.post("/User_UpdatePost",(req,res)=>
{

})

// Fetch User personal blogs

app.get("/Fetch_UserPersonalBlog",(req,res)=>
{

})

// Fetch All Blogs of users

app.get("/Fetch_UserAllBlogs",(req,res)=>
{

})


app.listen(8000,()=>
{
    console.log("server is in running form")
})
