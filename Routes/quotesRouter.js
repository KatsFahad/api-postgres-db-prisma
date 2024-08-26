const express = require('express')
const quotesRouter = express.Router()
const quoteController = require('../Controllers/quoteController')

quotesRouter.get('/', quoteController.getAllQuotes)

quotesRouter.get('/:id', quoteController.getQuoteById)

quotesRouter.post('/', quoteController.createNewQuote)

quotesRouter.delete('/:id', quoteController.deleteQuoteById)

quotesRouter.put('/:id', quoteController.updateQuoteById)

module.exports = quotesRouter