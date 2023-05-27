const express = require('express')
const router = express.Router()
const { SignupController } = require('../Controller/UserController/SignupController')
const { SigninController } = require('../Controller/UserController/SigninController')
const { CreatePostMiddleWare } = require('../Controller/UserController/CreatePostController')
const { CreatePostController } = require("../Controller/UserController/CreatePostController")
const { PersonalBlogMiddleWare } = require('../Controller/UserController/FetchPersonalBlogController')
const { FetchPersonalBlogController } = require('../Controller/UserController/FetchPersonalBlogController')
const { Getallblogs } = require('../Controller/UserController/GetAllBlogs')

router.post('/Signup', SignupController)
router.post('/Signin', SigninController)
router.post('/Create/Post', CreatePostMiddleWare, CreatePostController)
router.delete('/Delete/Post', (req, res) => {
})
router.put("/Update/Post", (req, res) => {
})
router.get("/Personal/Blog/:id", PersonalBlogMiddleWare, FetchPersonalBlogController)
router.get("/All/Blogs", Getallblogs)
router.post('/EditProfile', (req, res) => {
  res.send("Edit Profile")
})
router.post('/ForgetPassword', (req, res) => {
  res.send("Forget Password")
})

module.exports = router