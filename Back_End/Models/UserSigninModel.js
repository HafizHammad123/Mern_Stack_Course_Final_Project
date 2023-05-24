const { Signup_Collection } = require('./SignupModel')
const bcrypt = require('bcrypt')

const SigninModel = async (body) => {
    const { Emailsignin, Passwordsignin } = body
    try {
        const res = await Signup_Collection.find({ Email: Emailsignin })
        if (res.length > 0) {
            if (!bcrypt.compare(Passwordsignin , res[0].Password)) {
                return { message: "Password Does Not Match" }
            }
            else {
                return res
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