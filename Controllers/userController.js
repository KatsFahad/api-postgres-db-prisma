const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

const getUsers = async(req, res) =>{
    const user = await prisma.user.findMany()
    if(user){
        res.json(user)
    }else{
        res.send('no users found')
    }
}

module.exports = {
    getUsers
}