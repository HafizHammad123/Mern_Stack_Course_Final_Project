const multer = require('multer')
const Jwt = require('jsonwebtoken')
const Secret_Key = "Signin"
const { UserProfileModel } = require('../../Models/UserProfile')


const VerifyTokenMiddle = (req, res, next) => {
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

const imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './Upload')
    },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}.${file.originalname}`)
    }
})

const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true)
    }
    else {
        callback(new Error('only images are allowed'))
    }
}

const uploadFile = multer({
    storage: imgconfig,
    fileFilter: isImage
})


const UserProfileImage = async (req, res) => {
    console.log(req.file)
    console.log(req.body.ID)
    const { path } = req.file
    const { ID } = req.body

    const data = new UserProfileModel({
        UserProfile: path,
        UserID: ID
    })
    try {
        const insertdata = await data.save()
        res.send(insertdata)
        console.log(insertdata)
    } catch (error) {
        res.send(error)
    }


}
module.exports = { VerifyTokenMiddle, UserProfileImage, uploadFile }