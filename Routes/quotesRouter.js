const express = require('express')
const quotesRouter = express.Router()
const quoteController = require('../Controllers/quoteController')
const validator = require('../Utilities/joi-validate')
const {quoteSchema} = require('../Utilities/joi-schemas')

quotesRouter.get('/', quoteController.getAllQuotes)

quotesRouter.get('/:id', quoteController.getQuoteById)

quotesRouter.post('/', validator(quoteSchema), quoteController.createNewQuote)

quotesRouter.delete('/:id', quoteController.deleteQuoteById)

quotesRouter.put('/:id', quoteController.updateQuoteById)

module.exports = quotesRouter