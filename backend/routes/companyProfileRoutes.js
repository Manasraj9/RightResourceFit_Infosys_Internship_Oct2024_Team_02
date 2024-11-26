const express = require('express');
const multer = require('multer');
const CompanyProfile = require('../models/CompanyProfile');
const router = express.Router(); // Add router if it's missing

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
}).single('logo'); // Change 'image' to 'logo' to match the form field name

// POST: Save company profile
router.post('/company-profile/save', (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: 'Error uploading the image.' });
        }

        const { companyName, email, website, location, employeeRange, industry, establishedDate } = req.body;
        const imageBuffer = req.file ? req.file.buffer : null;  // The uploaded image buffer

        // Validate if required fields are filled and image is uploaded
        if (!companyName || !email || !imageBuffer) {
            return res.status(400).json({ message: 'Missing required fields or image not uploaded.' });
        }

        // Create the company profile object
        const companyProfile = new CompanyProfile({
            companyName,
            email,
            website,
            location,
            employeeRange,
            industry,
            establishedDate,
            logo: {
                filename: req.file.originalname,
                contentType: req.file.mimetype,
                data: imageBuffer,  // The file buffer
            },
        });

        try {
            await companyProfile.save();
            res.status(201).json({ success: true, message: 'Company profile submitted successfully' });
        } catch (error) {
            console.error('Error saving company profile:', error);
            res.status(500).json({ message: 'Error saving company profile.' });
        }
    });
});

router.get('/company-profile/:id', async (req, res) => {
  const { id } = req.params;
  
  if (!id) {
    return res.status(400).json({ message: 'Company ID is required' });
  }

  try {
    const companyProfile = await CompanyProfile.findById(id);
    if (!companyProfile) {
      return res.status(404).json({ message: 'Company profile not found' });
    }
    res.json(companyProfile);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).send('Error fetching profile');
  }
});


// GET: Retrieve company profile (use query or params depending on use case)
router.get('/company-profile', async (req, res) => {
  try {
    // Fetch the company profile from the database
    const companyProfile = await CompanyProfile.findOne();

    if (!companyProfile) {
      return res.status(404).json({ message: 'Company profile not found' });
    }

    // If logo exists, convert its buffer to a base64 string
    if (companyProfile.logo && companyProfile.logo.data) {
      // Convert Buffer to Base64 string
      const base64Logo = companyProfile.logo.data.toString('base64');
      companyProfile.logo.data = base64Logo; // Replace the logo buffer with the base64 string
    }

    // Send the updated company profile with the base64 logo data
    res.json(companyProfile);

  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).send('Error fetching profile: ' + error.message);
  }
});



module.exports = router;
