const express = require('express')
const app = express()
const mongoose=require('mongoose')
require('./db/mongoose')


const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})

const port = process.env.PORT



const cors = require('cors');
app.use(cors({
  origin: '*'
}));

const bodyParser = require('body-parser')

// app.use(require('./routers/auth'))

app.use(express.json());
app.use(express.urlencoded());


//DRIVER ROUTERS
app.use(require('./routers/addDriver'))
// app.use(middleware);

//CAB ROUTERS
app.use(require('./routers/cabDetails'))


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})