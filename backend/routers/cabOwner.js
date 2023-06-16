const express = require('express')
const router = new express.Router()
var bodyParser = require('body-parser')
const cabProvider = require('../models/cabOwnerSchema')

router.use(express.json());
router.use(express.urlencoded());


//API HEALTH CHECK

// router.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// //ADDING DRIVER API

router.post('/CabProvider', async (req, res) => {
    const {name} = req.body

    try {
        const cabprovider = new cabProvider({name:name})
        await cabprovider.save()
        // const i = driver._id;
        // console.log(i)
        res.status(200).json({ message: "saved" })
    } catch (e) {
        console.log(e)
        res.status(404).json({message: "something went wrong" })
    }

})


module.exports = router