const express = require('express')
//const path = require('path')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()   

// conexao com o banco de dados
db.connect()

//habilita server para receber dados JSON
app.use(express.json())

// Definindo as rotas
app.use('/api', routes)

//executando servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))