const Joi = require("joi");

const authorSchema = Joi.object({
  name: Joi.string().min(3).max(12).required(),
});

const quoteSchema = Joi.object({
    text: Joi.string().min(3).max(80).required(),
    category: Joi.string().min(3).max(15).required()
})

module.exports = { authorSchema, quoteSchema };
