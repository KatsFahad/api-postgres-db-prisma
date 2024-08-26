const express = require('express')
const authorsRouter = express.Router()
const authorController =  require("../Controllers/authorController.js");

authorsRouter.get('/', authorController.getAllAuthors)

authorsRouter.get('/:id', authorController.getAuthorById)

authorsRouter.post('/', authorController.createNewAuthor)

authorsRouter.delete('/:id', authorController.deleteAuthorById)

authorsRouter.put('/:id', authorController.updateAuthorById)

module.exports = authorsRouter