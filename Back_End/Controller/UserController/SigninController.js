const {SigninModel}=require("../../Models/UserSigninModel")
// SIGN_IN CONTROLLER 
const SigninController = (req, res) => {
    SigninModel(req.body).then((data)=>res.send(data))

}
module.exports={SigninController}