const fs = require('fs')
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

const getAllAuthors = ('/', async(req,res)=>{
    const authors = await prisma.author.findMany()  
    res.json(authors)
})

const createNewAuthor = ('/', (req,res)=>{
    fs.readFile('./Modules/authors.json', 'utf8', (err, data)=>{
        if(err){
            res.send('Failed to authors')
        }else{
            fs.writeFile('./Modules/authors.json', JSON.stringify([...JSON.parse(data),req.body],null,2), (err)=>{
                if(err){
                    res.send('Failed to a Author')
                }else{
                    res.send('Author added Successfully')
                }
            })
        }
    })
})

const getAuthorById = ('/:id', (req,res)=>{
    fs.readFile('./Modules/authors.json', 'utf8', (err, data)=>{
        if(err){
            res.send('Failed to get Author Data')
        }else{
            const authors = JSON.parse(data)
            const author = authors.find(a=> a.id === parseInt(req.params.id))
            if(author){
                res.json(author)
            }else{
                res.send('No Author for that id for found')
            }
        }

    })
})

const deleteAuthorById = ('/:id', (req,res)=>{
    fs.readFile('./Modules/authors.json', 'utf8', (err, data)=>{
        if(err){
            res.send('Failed to get Author Data')
        }else{
            const authors = JSON.parse(data)
            const authorToDelete = authors.find(a=> a.id === parseInt(req.params.id))
            if(authorToDelete){
                const index = authors.indexOf(authorToDelete)
                authors.splice(index, 1)
                res.send('Author deleted')
            }
            else{
                res.send('No author for that id found')
            }
        }
    })
    
})

const updateAuthorById = ('/:id', (req, res)=>{
    fs.readFile('./Modules/authors.json', 'utf8', (err, data)=>{
        if(err){
            res.send('Failed to get Author Data')
        }else{
            const authors = JSON.parse(data)
            const UpdateAuthor = authors.find(q=> q.id === parseInt(req.params.id))
            if(UpdateAuthor){
                UpdateAuthor.name = req.body.name
                console.log(UpdateAuthor)
                res.json('Author updated')
            }else{
                res.send('No author for that id for found')
            }
        }

    })
})


module.exports =  {
    getAllAuthors,
    createNewAuthor,
    getAuthorById,
    deleteAuthorById,
    updateAuthorById  
}