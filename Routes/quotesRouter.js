const express = require('express')
const quotesRouter = express.Router()
const fs = require('fs')
const quoteController = require('../Controllers/quoteController')

quotesRouter.get('/', quoteController.getAllQuotes)

quotesRouter.get('/:id', quoteController.getQuoteById)

quotesRouter.post('/', quoteController.createNewQuote)


quotesRouter.delete('/:id', quoteController.deleteQuoteById)

quotesRouter.put('/:id', (req, res)=>{
    fs.readFile('./Modules/quotes.json', 'utf8', (err, data)=>{
        if(err){
            res.send('Failed to get Quote Data')
        }else{
            const quotes = JSON.parse(data)
            const UpdateQuote = quotes.find(q=> q.id === parseInt(req.params.id))
            if(UpdateQuote){
                UpdateQuote.name = req.body.name
                res.json('Quote updated')
            }else{
                res.send('No Quote for that id for found')
            }
        }

    })
})

module.exports = quotesRouter