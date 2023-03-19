const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

// routers
const authRoutes = require('./routes/auth')
const productRoutes = require('./routes/product')
const serviceRoutes = require('./routes/service')
const userRoutes = require('./routes/user')

const app = express()

// middlewares
app.use(cors())
app.use(express.json())

// database connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server started on ${process.env.PORT}`)
    })
})
.catch((err) => {
   console.log(err.message)
})

// routes
app.use("/api/auth",authRoutes)
app.use("/api/products",productRoutes)
app.use("/api/services",serviceRoutes)
app.use("/api/users", userRoutes)




