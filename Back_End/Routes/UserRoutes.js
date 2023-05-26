const express = require('express')
const router = express.Router()
const { SignupController } = require('../Controller/UserController/SignupController')
const { SigninController } = require('../Controller/UserController/SigninController')
const { CreatePostController }=require("../Controller/UserController/CreatePostController")


router.post('/Signup', SignupController)
router.post('/Signin', SigninController)
router.post('/Create/Post',CreatePostController)
router.delete('/Delete/Post', (req, res) => {
})
router.put("/Update/Post", (req, res) => {
})
router.get("/Personal/Blog", (req, res) => {
  res.send("hello")
})
router.get("/All/Blogs", (req, res) => {
  res.send({ name: "hammad" })
})
router.post('/EditProfile', (req, res) => {
  res.send("Edit Profile")
})
router.post('/ForgetPassword', (req, res) => {
  res.send("Forget Password")
})

module.exports = router