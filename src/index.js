const mongoose = require('mongoose')
const Category = require('./models/caregoryModel')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const config = require('./db/config')

mongoose.connect(config.dbConnection, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

app.use(bodyParser.json())
app.use(cors())

const apiRoutes = require('./routes/categoryRoutes')
apiRoutes(app)

app.listen(port, () => console.log(`Categories app listening on port ${port}!`))