const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

const getAllQuotes = ('/', async(req, res) =>{
    const quotes = await prisma.quote.findMany()
    res.json(quotes)
})

const getQuoteById = ('/:id', async(req,res)=>{
    const quote = await prisma.quote.findUnique({
        where : {
            id: parseInt(req.params.id)
        }
    })
    if(quote){
        res.json(quote)
    }else{
        res.send('No quote with that id')
    }
})

module.exports = {
    getAllQuotes,
    getQuoteById
}