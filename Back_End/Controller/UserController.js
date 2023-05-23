const { CreateDoc } = require('../Models/Signup')

// SIGN_UP CONTROLLER 
const SignupController = (req, res) => {
    CreateDoc(req.body).then((data) => {
        res.send(data)
    })
}

// SIGN_IN CONTROLLER 
const SigninController = (req, res) => {
    console.log(req.body)
}


module.exports = { SignupController, SigninController }
