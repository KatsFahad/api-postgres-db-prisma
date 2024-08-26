const { PrismaClient } = require("@prisma/client");
const { updateAuthorById } = require("./authorController");

const prisma = new PrismaClient();

const getAllQuotes =
  ("/",
  async (req, res) => {
    const quotes = await prisma.quote.findMany();
    if(quotes){
        res.json(quotes);
    }else{
        res.send('No quotes found')
    }
    
  });

const getQuoteById = async (req, res) => {
  const quote = await prisma.quote.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });
  if (quote) {
    res.json(quote);
  } else {
    res.send("No quote with that id");
  }
};

const deleteQuoteById = async (req, res) => {
  const quoteToDelete = await prisma.quote.delete({
    where: {
      id: +req.params.id,
    },
  });
  if (quoteToDelete) {
    res.send("Quote deleted");
  } else {
    res.send("Quote not deleted");
  }
};

const createNewQuote = async (req, res) => {
    const { text, category } = req.body;
    if(text, category){
      const createQuote = await prisma.quote.create({
          data: {
            text,
            category
          },
        });
        res.send('Quote created')
    }else{
      res.send('Failed to create Quote')
    }
};

const updateQuoteById = async(req, res) =>{
    const {text, category} = req.body
    const updateQuote = await prisma.quote.update({
        where: {
            id: +req.params.id
        },
        data: {
            text,
            category
        }
    })
    if(updateQuote){
        res.send('Quote updated')
    }else{
        res.send('Failed to update quote')
    }
}

module.exports = {
  getAllQuotes,
  getQuoteById,
  createNewQuote,
  deleteQuoteById,
  updateQuoteById
};
