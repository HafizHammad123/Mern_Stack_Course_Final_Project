const mongoose = require('mongoose')

// defining mongoose.Schema

const Signup_Schema = new mongoose.Schema(
    {
        Name: { type: String },
        Email: { type: String, unique: true },
        Password: { type: String },
    }
)

// compiling Signup Schema 

const Signup_Collection = mongoose.model('User_Signup', Signup_Schema)

const CreateDoc = async (data) => {
    try {
        const Create_Document = new Signup_Collection(
            {
                Name: data.NameSignup,
                Email: data.EmailSignup,
                Password: data.PasswordSignup
            }
        )
        const result = await Create_Document.save()
        // console.log(result)
        return { message: "Successfully inserted record" }
    } catch (error) {
        return { message: "This Email has already been use try another email" }

    }
}

module.exports = { CreateDoc }