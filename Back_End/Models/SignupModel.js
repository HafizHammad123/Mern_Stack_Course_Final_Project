const mongoose = require('mongoose')
const bcrypt=require('bcrypt')

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
    const HashPassword= await bcrypt.hash(data.PasswordSignup,12)
  
    try {
        const Create_Document = new Signup_Collection(
            {
                Name: data.NameSignup,
                Email: data.EmailSignup,
                Password: HashPassword
            }
        )
        const result = await Create_Document.save()
        return { message: "Successfully inserted record" }
    } catch (error) {
        return { message: "This Email has already been use try another email" }

    }
}

module.exports = { CreateDoc, Signup_Collection }
