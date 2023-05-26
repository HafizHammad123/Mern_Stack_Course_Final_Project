const { Signup_Collection } = require('./SignupModel')
const bcrypt = require('bcrypt')
const Jwt = require('jsonwebtoken')
const Secret_Key = "Signin"

const SigninModel = async (body) => {
    const { Emailsignin, Passwordsignin } = body
    try {
        const res = await Signup_Collection.find({ Email: Emailsignin })
        console.log(res)


        if (res.length > 0) {
            console.log((await bcrypt.compare(Passwordsignin, res[0].Password)))
            if (! await bcrypt.compare(Passwordsignin, res[0].Password)) {
                return { message: "Password Does Not Match" }
            }
            else {
                const ID=res._id
                console.log(ID)
                const Secret_Token = Jwt.sign({}, Secret_Key)
                Jwt.decode()
                console.log(Secret_Token)
                return {ID:res[0]._id,SecretToken:Secret_Token} 
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