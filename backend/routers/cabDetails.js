const express = require('express')
const router = new express.Router()
var bodyParser = require('body-parser')
const cabProvider = require('../models/cabDetailsSchema')
const mongoose = require('mongoose');
router.use(express.json());
router.use(express.urlencoded());


//API HEALTH CHECK

// router.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// //ADDING DRIVER API

router.post('/CabProvider', async (req, res) => {
    const {cab_registration_number,cab_model,cab_colour} = req.body
    console.log(cab_registration_number)

    try {
        const cabprovider = new cabProvider({cab_registration_number,cab_model,cab_colour})
        await cabprovider.save()
        // const i = driver._id;
        // console.log(i)
        res.status(200).json({ message: "saved" })
    } catch (e) {
        console.log(e)
        res.status(404).json({message: "something went wrong" })
    }

})

router.get('/CabDetails', async (req, res) => {
    try {
        const posts = await cabProvider.find()
        res.status(200).json(posts)
    } catch (e) {
        console.log(e)
        res.status(404).json({message: "something went wrong" })
    }

})

router.delete('/CabDetails/:id', async (req, res) => {
    const cabId = req.params.id;
  
    try {
      // Find and delete the cab entry by ID
      const deletedCab = await cabProvider.findByIdAndDelete(cabId);
  
      if (!deletedCab) {
        return res.status(404).json({ message: 'Cab not found' });
      }
  
      res.status(200).json({ message: 'Cab deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });


  // Update a cab entry by ID
router.put('/CabDetails/:id', async (req, res) => {
  const cabId = req.params.id;
  const { cab_registration_number, cab_model, cab_colour } = req.body;
  // console.log(cabId)
  try {
    // Find and update the cab entry by ID
    const updatedCab = await cabProvider.findByIdAndUpdate(
      cabId,
      {
        cab_registration_number:cab_registration_number,
        cab_model:cab_model,
        cab_colour:cab_colour,
      },
      { new: true }
    );

    if (!updatedCab) {
      return res.status(404).json({ message: 'Cab not found' });
    }

    res.status(200).json(updatedCab);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});




router.put('/AssignedDrivers/:id', async (req, res) => {
  let cabId = req.params.id.trim();
  const { assigned_driver } = req.body;

  try {
    // Find the driver entry by ID
    const cab = await cabProvider.findById(cabId);

    if (!cab) {
      return res.status(404).json({ message: 'Cab not found' });
    }

    // Check if assigned_driver already exists in the assigned_drivers array
    const isAlreadyAssigned = cab.assigned_drivers.includes(assigned_driver);

    if (isAlreadyAssigned) {
      return res.status(400).json({ message: 'Driver already assigned to the cab' });
    }

    // Push the assigned_driver to the assigned_drivers array
    cab.assigned_drivers.push(new mongoose.Types.ObjectId(assigned_driver));

    // Save the updated cab document
    const updatedCab = await cab.save();

    res.status(200).json(updatedCab);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router