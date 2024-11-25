const express = require('express');
const multer = require('multer');
const JobseekerProfile = require('../models/JobseekerProfile'); // Assuming this model exists
const router = express.Router();

// Multer setup for in-memory storage for profile image
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
}).single('profileImage'); // 'profileImage' matches the form field name for uploading the image

// POST: Save Jobseeker Profile with image upload
router.post('/jobseeker-profile/save', (req, res) => {
  // Use multer to handle the file upload
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: 'Error uploading the image. ' + err.message });
    }

    const {name, userId, email, phoneNumber, dob, address, gender } = req.body;
    const profileImageBuffer = req.file ? req.file.buffer : null;  // Get the uploaded image buffer

    // Validate required fields and ensure the image is uploaded
    if (!userId ||!name ||!email || !phoneNumber || !dob || !address || !gender || !profileImageBuffer) {
      return res.status(400).json({ message: 'Missing required fields or image not uploaded.' });
    }

    try {
      // Create the jobseeker profile object
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
          data: profileImageBuffer, // Store the image buffer
        },
      });

      // Save the profile to the database
      await jobseekerProfile.save();
      res.status(201).json({ success: true, message: 'Jobseeker profile created successfully' });
    } catch (error) {
      console.error('Error saving jobseeker profile:', error);
      res.status(500).json({ message: 'Error saving jobseeker profile.' });
    }
  });
});

// GET: Retrieve Jobseeker Profile by ID
router.get('/:id', async (req, res) => {
  try {
    const profile = await JobseekerProfile.findById(req.params.id);

    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    res.status(200).json(profile);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ error: 'Failed to retrieve jobseeker profile' });
  }
});

// GET: Retrieve the profile image for a jobseeker
router.get('/profile-image/:id', async (req, res) => {
  try {
    const profile = await JobseekerProfile.findById(req.params.id);

    if (!profile || !profile.profileImage) {
      return res.status(404).json({ error: 'Profile image not found' });
    }

    res.set('Content-Type', profile.profileImage.contentType); // Set the correct MIME type
    res.send(profile.profileImage.data); // Send the image buffer
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).json({ error: 'Failed to retrieve jobseeker profile image' });
  }
});

module.exports = router;
