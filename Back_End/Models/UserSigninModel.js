const { Signup_Collection } = require('./SignupModel')
const bcrypt = require('bcrypt')
const Jwt=require('jsonwebtoken')
const Secret_Key="Signin"

const SigninModel = async (body) => {
    const { Emailsignin, Passwordsignin } = body
    try {
        const res = await Signup_Collection.find({ Email: Emailsignin })
        console.log(res)
       
        if (res.length > 0) {
            if (!bcrypt.compare(Passwordsignin , res[0].Password)) {
                return { message: "Password Does Not Match" }
            }
            else {
                const Secret_Token=Jwt.sign({ Email:res.Email,ID:res._id },Secret_Key)
                Jwt.decode()
                console.log(Secret_Token)
                return{Secret_Token}
            }
        }
        else {
            throw "Email Not Found Create First Account"
        }

    } catch (error) {
        return { message: error }
    }
}
module.exports = { SigninModel }