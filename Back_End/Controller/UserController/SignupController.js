const { CreateDoc } = require('../../Models/SignupModel')

// SIGN_UP CONTROLLER 
const SignupController = (req, res) => {
    CreateDoc(req.body).then((data) => {
        res.send(data)
    })
}




module.exports = { SignupController }
