const express = require("express")
const res = require("express/lib/response")
const path = require("path")
const app = express()
const port = 3000

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views/index.html')))
app.get('/Sobre', (req, res) => res.sendFile(path.join(__dirname, 'views/sobre.html')))
app.listen(port, () => console.info(`Servidor está rodando na porta ${port}`))