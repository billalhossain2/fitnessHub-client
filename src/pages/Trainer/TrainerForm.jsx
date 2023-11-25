import React, { useState } from 'react';

const TrainerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '', // Email is read-only
    age: '',
    profileImage: '',
    skills: [],
    availableTimeWeek: '',
    availableTimeDay: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSkillsChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({ ...prevData, skills: [...formData.skills, value] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Trainer Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-semibold text-gray-600">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            className="w-full mt-1 p-2 border rounded-md bg-gray-100"
            readOnly
          />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-semibold text-gray-600">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="profileImage" className="block text-sm font-semibold text-gray-600">
            Profile Image
          </label>
          <input
            type="text"
            id="profileImage"
            name="profileImage"
            value={formData.profileImage}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Skills</label>
          <div className="flex flex-wrap">
            <label className="mr-4">
              <input
                type="checkbox"
                name="skills"
                value="JavaScript"
                onChange={handleSkillsChange}
              />
              <span className="ml-2">Adaptability</span>
            </label>
            <label className="mr-4">
              <input type="checkbox" name="skills" value="React" onChange={handleSkillsChange} />
              <span className="ml-2">Client Assessment</span>
            </label>
            <label className="mr-4">
              <input type="checkbox" name="skills" value="React" onChange={handleSkillsChange} />
              <span className="ml-2">Nutritional Guidance</span>
            </label>
            <label className="mr-4">
              <input type="checkbox" name="skills" value="React" onChange={handleSkillsChange} />
              <span className="ml-2">Program Design</span>
            </label>
            {/* Add more skills as needed */}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="availableTimeWeek" className="block text-sm font-semibold text-gray-600">
            Available Time in a Week
          </label>
          <input
            type="text"
            id="availableTimeWeek"
            name="availableTimeWeek"
            value={formData.availableTimeWeek}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="availableTimeDay" className="block text-sm font-semibold text-gray-600">
            Available Time in a Day
          </label>
          <input
            type="text"
            id="availableTimeDay"
            name="availableTimeDay"
            value={formData.availableTimeDay}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default TrainerForm;
