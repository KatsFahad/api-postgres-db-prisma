const jwt = require("jsonwebtoken");
require('dotenv').config();


const validateToken=(req, res, next)=>{
    const authHeader = req.headers.authorization
    if(authHeader){
        let token = authHeader.split(' ')[1]
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=>{
            if(err){
                res.json(err)
            }else{
                // res.json(decoded)
                next()
            }

        })
    }else{
        res.send('auth headers missing')
    }
}

module.exports = validateToken