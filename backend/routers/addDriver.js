const express = require('express')
const router = new express.Router()
var bodyParser = require('body-parser')
const Driver = require('../models/driverScheme')

router.use(express.json());
router.use(express.urlencoded());


//API HEALTH CHECK

router.get('/', (req, res) => {
    res.send('Hello World!')
})

// //ADDING DRIVER API

router.post('/addDriver', async (req, res) => {
    const {name} = req.body

    try {
        const driver = new Driver({name:req.body.name})
        await driver.save()
        // const i = driver._id;
        // console.log(i)
        res.status(200).json({ message: "saved" })
    } catch (e) {
        console.log(e)
        res.status(404).json({message: "something went wrong" })
    }

})


module.exports = router