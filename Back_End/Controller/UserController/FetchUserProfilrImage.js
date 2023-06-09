const Jwt = require('jsonwebtoken')
const Secret_Key = "Signin"
const { UserProfileModel } = require('../../Models/UserProfile')

const fetchProfileImageMiddleware = (req, res, next) => {
    if (req.headers.authorization) {
        const Token = req.headers.authorization.split(' ')
        Jwt.verify(Token[1], Secret_Key, (err) => {
            if (err) {
                res.send({ message: "Un Authorized User token" })
            }
            else {
                next()
            }
        })

    }
    else {
        res.send({ message: "Un Authorized User" })
    }
}

const FetchUserProfileImage = async (req, res) => {
    try {
        const { UserID } = req.params;
        const response = await UserProfileModel.find({ UserID: UserID }).limit(1).sort({ $natural: -1 })
        res.send(response)
    } catch (error) {
        res.send(error)
    }

}

module.exports = { fetchProfileImageMiddleware, FetchUserProfileImage }