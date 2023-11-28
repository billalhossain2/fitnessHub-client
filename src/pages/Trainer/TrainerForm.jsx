import axios from 'axios';
import React, { useState } from 'react';
import useTitle from '../../hooks/useTitle';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';


const IMAGE_HOSTING_API_KEY=import.meta.env.VITE_IMAGE_HOSTING_TOKEN;


const TrainerForm = () => {
  useTitle("FitnessHub | Become A Trainer")
  const {user} = useAuth() || {};
  const axiosSecure = useAxiosSecure()

  const [formData, setFormData] = useState({
    name: '',
    email: '', // Email is read-only
    phone:'',
    age: '',
    experience:'',
    specialization:'',
    joined_date:'',
    salary:'',
    skills: [],
    availableTimeWeek: [],
    available_slots: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAvailableTimeDayChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({ ...prevData, available_slots: [...formData.available_slots, value] }));
  };

  const handleAvailableTimeWeekChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({ ...prevData, availableTimeWeek: [...formData.availableTimeWeek, value] }));
  };

  const handleSkillsChange = (e)=>{
    const { value } = e.target;
    setFormData((prevData) => ({ ...prevData, skills: [...formData.skills, value] }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const IMAGE_HOSTING_URL = import.meta.env.VITE_IMAGE_HOSTING_TOKEN;
    const hostingUrl = `https://api.imgbb.com/1/upload?key=${IMAGE_HOSTING_URL}`
    // Handle form submission logic here
    const form = e.target;
    const file = form.image.files[0];

    console.log("Image file info======> ", file)

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
        const newTrainer = {...formData, application:"pending", email:user?.email, image:photoUrl, totalSlots:formData.available_slots.length}
        console.log("new trainer data========> ", newTrainer)

        axiosSecure.post('/trainers', newTrainer)
        
        .then(res =>{
          toast.success('Application was successful', {autoClose:2000})
        })
      }
    })
    .catch(error => console.log("File uploading error========> ", error))

    console.log('Form submitted:', formData);
  };

  return (
    <div className="md:w-[700px] w-full mx-auto mt-8 p-6 bg-white rounded-md shadow-md border-2 border-[#ff4c314d]">
      {console.log("times========> ", formData)}
      <h2 className="text-2xl font-bold mb-4">Apply For A Trainer</h2>
      <form onSubmit={handleSubmit}>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
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
            value={user?.email}
            className="w-full mt-1 p-2 border rounded-md bg-gray-100"
            readOnly
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-600">
            Phone
          </label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={formData?.phone}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold">
           Years Of Experience
          </label>
          <input
            type="number"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>

        {/* new fields  */}
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-semibold">
           Date (Expected Joining Date)
          </label>
          <input
            type="date"
            id="joined_date"
            name="joined_date"
            value={formData.joined_date}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="salary" className="block text-sm font-semibold">
           Expected Salary ($)
          </label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
            placeholder='$ Monthly Expected Salary '
            className="w-full mt-1 p-2 border rounded-md"
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
          <label htmlFor="specialization" className="block text-sm font-semibold text-gray-600">
            Specialization (Your Expertise as a Trainer)
          </label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            value={formData.specialization}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-semibold text-gray-600">
            Profile Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Choose Skills</label>
          <div className="flex flex-col gap-2">
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
              <input type="checkbox" name="skills" value="Client Assessment" onChange={handleSkillsChange} />
              <span className="ml-2">Client Assessment</span>
            </label>
            <label className="mr-4">
              <input type="checkbox" name="skills" value="Nutritional Guidance" onChange={handleSkillsChange} />
              <span className="ml-2">Nutritional Guidance</span>
            </label>
            <label className="mr-4">
              <input type="checkbox" name="skills" value="Program Design" onChange={handleSkillsChange} />
              <span className="ml-2">Program Design</span>
            </label>
            <label className="mr-4">
              <input type="checkbox" name="skills" value="Rehabilitation Specialist" onChange={handleSkillsChange} />
              <span className="ml-2">Rehabilitation Specialist</span>
            </label>
            <label className="mr-4">
              <input type="checkbox" name="skills" value="Fitness Educator" onChange={handleSkillsChange} />
              <span className="ml-2">Fitness Educator</span>
            </label>
            <label className="mr-4">
              <input type="checkbox" name="skills" value="Nutrition Coach" onChange={handleSkillsChange} />
              <span className="ml-2">Nutrition Coach</span>
            </label>
            {/* Add more skills as needed */}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="availableTimeWeek" className="block text-sm font-semibold text-gray-600">
           Choose Available Times in a Week
          </label>
          <div className='flex flex-col gap-1'>
          <label className="mr-4">
              <input type="checkbox" name="availableTimeWeek" value="Sunday" onChange={handleAvailableTimeWeekChange} />
              <span className="ml-2">Sunday</span>
          </label>
          <label className="mr-4">
              <input type="checkbox" name="availableTimeWeek" value="Monday" onChange={handleAvailableTimeWeekChange} />
              <span className="ml-2">Monday</span>
          </label>
          <label className="mr-4">
              <input type="checkbox" name="availableTimeWeek" value="Tuesday" onChange={handleAvailableTimeWeekChange} />
              <span className="ml-2">Tuesday</span>
          </label>
          <label className="mr-4">
              <input type="checkbox" name="availableTimeWeek" value="Wednessday" onChange={handleAvailableTimeWeekChange} />
              <span className="ml-2">Wednessday</span>
          </label>
          <label className="mr-4">
              <input type="checkbox" name="availableTimeWeek" value="Thursday" onChange={handleAvailableTimeWeekChange} />
              <span className="ml-2">Thursday</span>
          </label>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="availableTimeDay" className="block text-sm font-semibold text-gray-600">
           Choose Available Time Slots in a Day
          </label>
          <div className='flex flex-col gap-1'>
          <label className="mr-4">
              <input type="checkbox" name="availableTimeDay" value="8:00 AM - 9:00 AM" onChange={handleAvailableTimeDayChange} />
              <span className="ml-2">8:00 AM - 9:00 AM</span>
          </label>
          <label className="mr-4">
              <input type="checkbox" name="availableTimeDay" value="9:00 AM - 10:00 AM" onChange={handleAvailableTimeDayChange} />
              <span className="ml-2">9:00 AM - 10:00 AM</span>
          </label>
          <label className="mr-4">
              <input type="checkbox" name="availableTimeDay" value="10:00 AM - 11:00 AM" onChange={handleAvailableTimeDayChange} />
              <span className="ml-2">10:00 AM - 11:00 AM</span>
          </label>
          <label className="mr-4">
              <input type="checkbox" name="availableTimeDay" value="11:00 AM - 12:00 PM" onChange={handleAvailableTimeDayChange} />
              <span className="ml-2">11:00 AM - 12:00 PM</span>
          </label>
          <label className="mr-4">
              <input type="checkbox" name="availableTimeDay" value="12:00 PM - 1:00 PM" onChange={handleAvailableTimeDayChange} />
              <span className="ml-2">12:00 PM - 1:00 PM</span>
          </label>
          <label className="mr-4">
              <input type="checkbox" name="availableTimeDay" value="1:00 PM - 2:00 PM" onChange={handleAvailableTimeDayChange} />
              <span className="ml-2">1:00 PM - 2:00 PM</span>
          </label>
          <label className="mr-4">
              <input type="checkbox" name="availableTimeDay" value="2:00 PM - 3:00 PM" onChange={handleAvailableTimeDayChange} />
              <span className="ml-2">2:00 PM - 3:00 PM</span>
          </label>
          <label className="mr-4">
              <input type="checkbox" name="availableTimeDay" value="3:00 PM - 4:00 PM" onChange={handleAvailableTimeDayChange} />
              <span className="ml-2">3:00 PM - 4:00 PM</span>
          </label>
          <label className="mr-4">
              <input type="checkbox" name="availableTimeDay" value="4:00 PM - 5:00 PM" onChange={handleAvailableTimeDayChange} />
              <span className="ml-2">4:00 PM - 5:00 PM</span>
          </label>
          <label className="mr-4">
              <input type="checkbox" name="availableTimeDay" value="5:00 PM - 6:00 PM" onChange={handleAvailableTimeDayChange} />
              <span className="ml-2">5:00 PM - 6:00 PM</span>
          </label>
          <label className="mr-4">
              <input type="checkbox" name="availableTimeDay" value="6:00 PM - 7:00 PM" onChange={handleAvailableTimeDayChange} />
              <span className="ml-2">6:00 PM - 7:00 PM</span>
          </label>
          <label className="mr-4">
              <input type="checkbox" name="availableTimeDay" value="7:00 PM - 8:00 PM" onChange={handleAvailableTimeDayChange} />
              <span className="ml-2">7:00 PM - 8:00 PM</span>
          </label>
          </div>
        </div>
        </div>

        <button
          type="submit"
          className="bg-[hsl(4,100%,60%)] text-white p-2 rounded-md hover:bg-[#FF4D31] transition duration-300 w-full"
        >
          Apply Now
        </button>
      </form>
    </div>
  );
};

export default TrainerForm;
