const express = require('express')
const authorsRouter = express.Router()
const authorController =  require("../Controllers/authorController.js");

authorsRouter.get('/', authorController.getAllAuthors)

authorsRouter.post('/', authorController.createNewAuthor)

authorsRouter.get('/:id', authorController.getAuthorById)

authorsRouter.put('/', authorController.updateAuthorById)

module.exports = authorsRouter