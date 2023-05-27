const { Signup_Collection } = require('./SignupModel')
const bcrypt = require('bcrypt')
const Jwt = require('jsonwebtoken')
const Secret_Key = "Signin"

const SigninModel = async (body) => {
    const { Emailsignin, Passwordsignin } = body
    try {
        const res = await Signup_Collection.find({ Email: Emailsignin })


        if (res.length > 0) {
            if (! await bcrypt.compare(Passwordsignin, res[0].Password)) {
                return { message: "Password Does Not Match" }
            }
            else {
                const Secret_Token = Jwt.sign({}, Secret_Key)
                Jwt.decode()
                return { ID: res[0]._id, SecretToken: Secret_Token }
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