const validateRequest = (schema) =>{
    return function(req, res, next){
        const { error, value } = schema.validate(req.body)
        if(error){
            res.send(error.details[0].message)
        }else{
            next()
        }
    }
}

module.exports = validateRequest;