import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

//Kur don me shfaq diqka ne prapavije per me pa se osht tu funksionu ne qet port
app.get('/', (req, res) => {
    res.send('API is running..')
})

//kur don mi fetch krejt produktet qka i ki te deklarune tek products

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000

app.listen(
    PORT, 
    console.log(`Server runing in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
    )