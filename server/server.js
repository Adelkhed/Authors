const mongoose = require("mongoose")
const express = require("express")

const app = express()
const cors = require('cors') 



require("./config/mongoose.config")
app.use(cors())
app.use(
    express.json(), 
    express.urlencoded({ extended: true}))

const AllAuthorsRoutes = require("./routes/authors.route")
AllAuthorsRoutes(app)

app.listen(5000, () => console.log("This server is fired up on port 5000"))