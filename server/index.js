const express = require('express')
const control = require('./controller.js')

const app = express()

app.use(express.json())

app.get('/api/tavern', control.getRecruits)
app.post('/api/tavern', control.makeRecruit)
app.put('/api/tavern/:id', control.changeRecruit)
app.delete('/api/tavern/:id', control.removeRecruit)

const port = 4000

app.listen(port, () => console.log(`Server is running on port ${port}`))