const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllAuthors =
  ("/",
  async (req, res) => {
    const authors = await prisma.author.findMany();
    if(authors){
        res.json(authors);
    }else{
        res.send('No authors found')
    }
  });

const getAuthorById = async (req, res) => {
  const author = await prisma.author.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });
  if (author) {
    res.json(author);
  } else {
    res.send("No author with that id");
  }
};

const deleteAuthorById = async(req, res) =>{
    const deleteAuthor = await prisma.author.delete({
        where: {
            id: parseInt(req.params.id)
        }
    })
    if(deleteAuthor){
        res.send('Author deleted')
    }else{
        res.send('Failed to delete author')
    }
}

const createNewAuthor = async (req, res) => {
  const { name } = req.body;
  if(name){
    const createAuthor = await prisma.author.create({
        data: {
          name,
        },
      });
      res.send('Author created')
  }else{
        res.send('Failed to create author')
  }

};



const updateAuthorById =  async(req, res) => {
    const {name} = req.body
    const updateAuthor = await prisma.author.update({
        where:{
            id: +req.params.id
        },
        data: {
            name
        }
    })

    if(updateAuthor){
        res.send('Author updated')
    }else{
        res.send('Failed to update Author')
    }
  };

module.exports = {
  getAllAuthors,
  createNewAuthor,
  getAuthorById,
  deleteAuthorById,
  updateAuthorById,
};
