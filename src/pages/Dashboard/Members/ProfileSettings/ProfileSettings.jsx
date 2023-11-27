import React, { useState } from 'react'
import useTitle from '../../../../hooks/useTitle'
import useAuth from '../../../../hooks/useAuth'
import { toast } from 'react-toastify'

const ProfileSettings = () => {
  useTitle("FitnessHub | Profile Settings")
  const {user, updateUserProfile} = useAuth() || {};
  const {email, displayName} = user || {};
  const initialUserData = {email, fullName:displayName}
  console.log("logged in user======> ", user)
  // State to manage form data
  const [userData, setUserData] = useState(initialUserData);

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add logic to update user data in the backend
    console.log('User data updated:', userData);
    const IMAGE_HOSTING_URL = import.meta.env.VITE_IMAGE_HOSTING_TOKEN;
    const hostingUrl = `https://api.imgbb.com/1/upload?key=${IMAGE_HOSTING_URL}`
    // Handle form submission logic here
    const form = e.target;
    const file = form.image.files[0];

    const formDataFile = new FormData();
    formDataFile.append('image', file)

    fetch(hostingUrl, {
      method:"POST",
      body:formDataFile
    })
    .then(res => res.json())
    .then(imgResponse => {
      if(imgResponse.success && imgResponse.status===200){
        const imgFile = imgResponse.data;
        const photoUrl = imgFile.display_url;
        updateUserProfile(userData.fullName, photoUrl)
        .then(()=>{
          toast.success("Updated profile successfully", {autoClose:2000})
        })
      }
    })
    .catch(error => console.log("File uploading error========> ", error))

    
  };

  return (
    <div className="container mx-auto mt-8 md:ml-20 ml-5">
      <h1 className="text-2xl font-bold mb-4">Profile Settings</h1>
      <form onSubmit={handleSubmit} className="max-w-md">

        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-600 font-semibold mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={userData.fullName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">
            Email (Cannot be modified)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            className="w-full border rounded px-3 py-2 bg-gray-100"
            readOnly
          />
        </div>

        <div className="mb-4">
          <label htmlFor="bio" className="block text-gray-600 font-semibold mb-2">
            Photo
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="w-full border rounded px-3 py-2 bg-gray-100"
          />
        </div>

        <button type="submit" className="bg-[#869440] hover:bg-[#41471e] duration-300 text-white py-2 px-4 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default ProfileSettings