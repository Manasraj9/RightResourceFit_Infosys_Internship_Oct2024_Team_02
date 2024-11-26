const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const User = require('../models/User'); 
const JobseekerProfile = require('../models/JobseekerProfile'); 
const router = express.Router();

// Multer setup for in-memory storage
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/svg+xml'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only image files (JPG, PNG, JPEG, SVG) are allowed'), false);
    }
  },
}).single('profileImage'); // Upload field name is 'profileImage'

// POST: Save Jobseeker Profile with image upload
router.post('/jobseeker-profile/save', (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: 'Error uploading the image: ' + err.message });
    }

    const { name, userId, email, phoneNumber, dob, address, gender } = req.body;
    const profileImageBuffer = req.file ? req.file.buffer : null;

    if (!userId || !name || !email || !phoneNumber || !dob || !address || !gender || !profileImageBuffer) {
      return res.status(400).json({ message: 'Missing required fields or image not uploaded.' });
    }

    try {
      const jobseekerProfile = new JobseekerProfile({
        userId,
        name,
        email,
        phoneNumber,
        dob,
        address,
        gender,
        profileImage: {
          filename: req.file.originalname,
          contentType: req.file.mimetype,
          data: profileImageBuffer,
        },
      });

      await jobseekerProfile.save();
      res.status(201).json({ success: true, message: 'Jobseeker profile created successfully' });
    } catch (error) {
      console.error('Error saving jobseeker profile:', error);
      res.status(500).json({ message: 'Error saving jobseeker profile.' });
    }
  });
});

router.get('/jobseeker-profiles', async (req, res) => {
  console.log('Fetching profiles with query:', req.query); // Log any query params
  try {
    const profiles = await JobseekerProfile.find();
    if (!profiles || profiles.length === 0) {
      return res.status(404).json({ error: 'No profiles found' });
    }
    res.json(profiles);
  } catch (error) {
    console.error('Error fetching jobseeker profiles:', error);
    res.status(500).json({ error: 'Failed to fetch jobseeker profiles' });
  }
});


router.put('/Jobseeker-profile/:id', async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;

  // Check if the provided ID is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send('Invalid ObjectId format');
  }

  try {
    // Find and update the role
    const user = await JobseekerProfile.findByIdAndUpdate(id, { role }, { new: true });

    if (!user) {
      return res.status(404).send('User not found');
    }

    res.status(200).json({ message: 'Role updated successfully', user });
  } catch (error) {
    console.error('Error updating role:', error);
    res.status(500).send('Error updating role');
  }
});

router.delete('/Jobseeker-profile/:id', async (req, res) => {
  const { id } = req.params;

  // Check if the provided ID is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send('Invalid ObjectId format');
  }

  try {
      // Delete the user by ID
      const user = await JobseekerProfile.findByIdAndDelete(id);

      if (!user) {
          return res.status(404).send('User not found');
      }

      res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).send('Error deleting user');
  }
});

router.get('/jobseeker-profile/:userId', async (req, res) => {
  const { userId } = req.params;
  
  try {
    const profile = await JobseekerProfile.findOne({ userId });
    
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.json(profile);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Error fetching user profile' });
  }
});


module.exports = router;
