const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllQuotes =
  ("/",
  async (req, res) => {
    const quotes = await prisma.quote.findMany();
    res.json(quotes);
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

module.exports = {
  getAllQuotes,
  getQuoteById,
  createNewQuote,
  deleteQuoteById,
};
