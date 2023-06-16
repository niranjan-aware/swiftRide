const  mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})
const DB=process.env.DATABASE
mongoose.connect(DB,{
}).then(()=>{
    console.log('Connection done')
}).catch((error)=>{
    console.log('not done',error)
})