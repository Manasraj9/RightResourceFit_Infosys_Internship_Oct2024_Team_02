import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../Components/Bars/NavbarCompany';
import Footer from '../Components/Footer';
import { FaHome, FaUser } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';

const JobseekerProfile = () => {
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null); // Holds the preview URL
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    address: '',
    gender: '',
    profileImage: null, // Holds the actual file data
  });

  const handleClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      setFormData((prevState) => ({
        ...prevState,
        userId, // Set userId in form data
      }));
    } else {
      console.error('User not logged in');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profileImage') {
      const file = files[0];
      // Update preview image and formData
      setPreviewImage(URL.createObjectURL(file)); // Create and set the image URL
      setFormData((prevState) => ({ ...prevState, profileImage: file })); // Set the file in the formData
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.dateOfBirth ||
      !formData.address ||
      !formData.gender ||
      !formData.profileImage
    ) {
      toast.error('Please fill out all required fields and upload an image.', {
        position: 'top-right',
        autoClose: 5000,
      });
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('userId', formData.userId);
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phoneNumber', formData.phoneNumber);
    formDataToSend.append('dob', formData.dateOfBirth);
    formDataToSend.append('address', formData.address);
    formDataToSend.append('gender', formData.gender);
    formDataToSend.append('profileImage', formData.profileImage);

    try {
      const response = await axios.post('http://localhost:1000/jobseeker-profile/save', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.data.success) {
        toast.success('Profile submitted successfully', {
          position: 'top-right',
          autoClose: 5000,
        });
      }
    } catch (error) {
      toast.error('Unexpected error. Please try again.', {
        position: 'top-right',
        autoClose: 5000,
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Sidebar */}
        <div className="bg-gray-100 p-4">
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <FaHome className="text-blue-500 h-8 w-8" />
              <span className="text-gray-700 font-medium mt-2 ml-4">Dashboard</span>
            </li>
            <li className="flex items-center gap-2">
              <FaUser className="text-blue-500 h-8 w-8" />
              <span className="text-gray-700 font-medium mt-2 ml-4">User Profile</span>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-span-4 p-4">
          <p className="text-3xl font-bold">Basic Info</p>
          <p>This is the user info you can update anytime</p>
          <br /><hr style={{ backgroundColor: 'black', height: '2px' }} /><br />

          <div className="flex gap-20">
            <div className="max-w-80">
              <p className="text-3xl font-bold">User Profile</p>
              <p>This image will be shown publicly as the user profile</p>
            </div>
            <form className="flex items-center gap-4">
              <input
                type="file"
                accept=".png, .jpg, .jpeg, .svg"
                onChange={handleChange}
                ref={fileInputRef}
                style={{ display: 'none' }}
                name="profileImage"
              />
              <button
                type="button"
                onClick={handleClick}
                className="h-36 w-60 border-2 text-sm border-dotted border-gray-400 p-4 py-2 bg-white text-[#112D4E] rounded-lg shadow-md hover:bg-[#3F72AF] hover:text-white"
              >
                Click to replace or drag and drop
                <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (max. 400 x 400px)</p>
              </button>
            </form>

            {/* Image Preview */}
            {previewImage && (
              <div className="mt-4">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-36 h-36 object-cover border rounded"
                />
              </div>
            )}
          </div>

          <br /><hr style={{ backgroundColor: 'black', height: '2px' }} /><br />

          <div className="flex gap-20">
            <form className="w-3.5/5" style={{ width: '500px' }} onSubmit={handleSubmit}>
              <p className="pb-1">User Name</p>
              <input
                type="text"
                placeholder="User Name"
                className="w-full mb-6 p-2 border rounded"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <p className="pb-1">Enter Email Address</p>
              <input
                type="email"
                placeholder="Enter User Email Address"
                className="w-full mb-6 p-2 border rounded"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <p className="pb-1">Phone Number</p>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                className="w-full mb-6 p-2 border rounded"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              />

              <p className="pb-1">Date of Birth</p>
              <input
                type="date"
                className="w-full mb-6 p-2 border rounded"
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
              />

              <p className="pb-1">Address</p>
              <textarea
                placeholder="Enter Address"
                className="w-full mb-6 p-2 border rounded"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />

              <p className="pb-1">Gender</p>
              <select
                className="w-full mb-6 p-2 border rounded"
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobseekerProfile;
