const fs = require("fs");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllAuthors =
  ("/",
  async (req, res) => {
    const authors = await prisma.author.findMany();
    res.json(authors);
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

const deleteAuthorById = async(req, res) =>{
    
}

const updateAuthorById =
  ("/:id",
  (req, res) => {
    fs.readFile("./Modules/authors.json", "utf8", (err, data) => {
      if (err) {
        res.send("Failed to get Author Data");
      } else {
        const authors = JSON.parse(data);
        const UpdateAuthor = authors.find(
          (q) => q.id === parseInt(req.params.id)
        );
        if (UpdateAuthor) {
          UpdateAuthor.name = req.body.name;
          console.log(UpdateAuthor);
          res.json("Author updated");
        } else {
          res.send("No author for that id for found");
        }
      }
    });
  });

module.exports = {
  getAllAuthors,
  createNewAuthor,
  getAuthorById,
  deleteAuthorById,
  updateAuthorById,
};
