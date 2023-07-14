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
    const {name,driver_id,email,phone_number} = req.body
    console.log(name);
    try {
        const driver = new Driver({name:name,driver_id:driver_id,email:email,phone_number:phone_number,assigned_cab:[]})
        await driver.save()
        // const i = driver._id;
        // console.log(i)
        res.status(200).json({ message: "saved" })
    } catch (e) {
        console.log(e)
        res.status(404).json({message: "something went wrong" })
    }

})


router.get('/DriverDetails', async (req, res) => {
    try {
        const posts = await Driver.find()
        res.status(200).json(posts)
    } catch (e) {
        console.log(e)
        res.status(404).json({message: "something went wrong" })
    }

})

router.delete('/DriverDetails/:id', async (req, res) => {
    const driverId = req.params.id;
  
    try {
      // Find and delete the driver entry by ID
      const deletedDriver = await Driver.findByIdAndDelete(driverId);
  
      if (!deletedDriver) {
        return res.status(404).json({ message: 'Driver not found' });
      }
  
      res.status(200).json({ message: 'Driver deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });


  router.put('/DriverDetails/:id', async (req, res) => {
    const driverId = req.params.id;
    const { name, driver_id, email,phone_number } = req.body;
    // console.log(driverId)
    try {
      // Find and update the cab entry by ID
      const updatedDriver = await Driver.findByIdAndUpdate(
        driverId,
        {
          name:name,
          driver_id:driver_id,
          email:email,
          phone_number:phone_number
        },
        { new: true }
      );
  
      if (!updatedDriver) {
        return res.status(404).json({ message: 'Cab not found' });
      }
  
      res.status(200).json(updatedDriver);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });



router.put('/AssignedCabs/:id', async (req, res) => {
  const driverId = req.params.id;
  const { assigned_cabs } = req.body;

  try {
    // Find the driver entry by ID
    const driver = await Driver.findById(driverId);

    if (!driver) {
      return res.status(404).json({ message: 'Driver not found' });
    }

    // Check if assigned_cab already exists in the assigned_cabs array
    const isAlreadyAssigned = driver.assigned_cab.includes(assigned_cabs);

    if (isAlreadyAssigned) {
      return res.status(400).json({ message: 'Cab already assigned to the driver' });
    }

    // Push the assigned_cab to the assigned_cabs array
    driver.assigned_cab.push(assigned_cabs);

    // Save the updated driver document
    const updatedDriver = await driver.save();

    res.status(200).json(updatedDriver);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

  
  
  

module.exports = router