const express = require('express')
const router = express.Router()
const { SignupController } = require('../Controller/UserController/SignupController')
const { SigninController } = require('../Controller/UserController/SigninController')


// signup Api
router.post('/Signup', SignupController)

// signin Api
router.post('/Signin', SigninController)

// User Blog Post Create Api
router.post('/Create/Post', (req, res) => {

})

// User Blog Post Delete Api
router.delete('/Delete/Post', (req, res) => {

})

// User Blog Post Update Api
router.put("/Update/Post", (req, res) => {

})

// Fetch User personal blogs
router.get("/Personal/Blog", (req, res) => {
  res.send("hello")
})

// Fetch All Blogs of users
router.get("/All/Blogs", (req, res) => {
  res.send({ name: "hammad" })
})

module.exports = router