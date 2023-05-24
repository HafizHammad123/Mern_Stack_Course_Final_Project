const express = require('express')
const router = express.Router()
const { SignupController } = require('../Controller/UserController/SignupController')
const { SigninController } = require('../Controller/UserController/SigninController')


router.post('/Signup', SignupController)
router.post('/Signin', SigninController)
router.post('/Create/Post', (req, res) => {
})
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

module.exports = router