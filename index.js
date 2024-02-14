const express = require('express')
const app = express()

let notes = {
    'R': 200,
    'D': 'Te quedan 100000000'
}

app.post('/', (request, response) => {
  response.send("Hola mundo")
})

app.post('/api/auth', (request, response) => {
  response.json(notes)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`)
})
