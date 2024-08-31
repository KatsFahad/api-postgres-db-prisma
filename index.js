const express = require('express')
const morgan = require('morgan')

const quotesRouter = require('./Routes/quotesRouter')
const { userRouter } = require('./Routes/userRouter')
 authorsRouter = require('./Routes/authorsRouter')


const app = express()

app.use(morgan('dev'))

app.use(express.json())

app.get('/', (req,res)=>{
    res.send('<h2>Getting, creating Quotes and Authors <br> Using apis with Node and Express<br>With Prisma connecting to Postgres Database </h2> ')
})

app.use('/authors', authorsRouter)

app.use('/quotes', quotesRouter)

app.use('/users', userRouter)

const PORT = 4700

app.listen(PORT, ()=>{
    console.log(`Listening on port http://localhost:${PORT}`)
})