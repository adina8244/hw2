const express = require("express")
require("dotenv").config()
const cors = require("cors")
const mongoose = require('mongoose')
const corsOptions = require("./config/corsOptions")
const connectDB = require("./config/dbConn")
const PORT = process.env.PORT || 7001
const app = express()
connectDB()
//middlewares
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))
//routes
app.get("/",(req,res)=>{
res.send("this is the home page")
})

app.use("/api/tasks", require("./routes/tasks"))
app.use("/api/artical", require("./routes/artical"))
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port
    ${PORT}`))
    })
    mongoose.connection.on('error', err => {
    console.log(err)
    })
    
