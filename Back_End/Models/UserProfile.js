const mongoose=require('mongoose')

const UserprofileSchema=new mongoose.Schema(
    {
        UserProfile:{type:String},
        UserID:{type:String}
    }
)
const UserProfileModel=mongoose.model('UserProfileImage',UserprofileSchema)

module.exports={UserProfileModel}