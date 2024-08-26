const express = require('express')
const authorsRouter = express.Router()
const authorController =  require("../Controllers/authorController.js");
const validator = require('../Utilities/joi-validate.js')
const {authorSchema} = require('../Utilities/joi-schemas.js')

authorsRouter.get('/', authorController.getAllAuthors)

authorsRouter.get('/:id', authorController.getAuthorById)

authorsRouter.post('/', validator(authorSchema), authorController.createNewAuthor)

authorsRouter.delete('/:id', authorController.deleteAuthorById)

authorsRouter.put('/:id', authorController.updateAuthorById)

module.exports = authorsRouter