import React, { useState } from "react";
import useTitle from "../../../../hooks/useTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const AddClass = () => {
  useTitle("FitnessHub | Add New Class");
  const axiosSecure = useAxiosSecure();

  const [formValues, setFormValues] = useState({
    instructor: "",
    category: "",
    location: "",
    price: "",
    startDate: "",
    startTime: "",
    classTitle: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Values:", formValues);
    // Add logic to submit formValues to your backend or perform other actions
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
        const newClass = {...formValues, image:photoUrl}
        console.log("new class data========> ", newClass)

        axiosSecure.post('/classes', newClass)
        .then(res =>{
          toast.success('Added a new class successfully', {autoClose:2000})
        })
      }
    })
    .catch(error => console.log("File uploading error========> ", error))
  };

  return (
    <div className="max-w-[600px]  my-10">
      <h3 className='lg:text-4xl md:text-3xl text-2xl font-bold text-center my-10 text-gray-500'>Add A New Class</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        <div>
          <label
            htmlFor="instructor"
            className="block text-sm font-medium text-gray-600"
          >
            Instructor
          </label>
          <input
            type="text"
            id="instructor"
            name="instructor"
            value={formValues.instructor}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label
            htmlFor="instructorImage"
            className="block text-sm font-medium text-gray-600"
          >
            Instructor Image
          </label>
          <input
            type="file"
            id="instructorImage"
            name="image"
            value={formValues.instructorImage}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Your image"
            required
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-600"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formValues.category}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Category of your class"
            required
          />
        </div>

        {/* Add similar code for other form fields */}
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-600"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formValues.location}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Where your class will be held"
            required
          />
        </div>

        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-600"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formValues.price}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Price per month"
            required
          />
        </div>

        <div>
          <label
            htmlFor="startDate"
            className="block text-sm font-medium text-gray-600"
          >
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formValues.startDate}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        <div>
          <label
            htmlFor="startTime"
            className="block text-sm font-medium text-gray-600"
          >
            Start Time (Please input time in range)
          </label>
          <input
            type="text"
            id="startTime"
            name="startTime"
            value={formValues.startTime}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="example: 8:00 AM - 9:00 AM"
            required
          />
        </div>

        <div>
          <label
            htmlFor="classTitle"
            className="block text-sm font-medium text-gray-600"
          >
            Class Title
          </label>
          <input
            type="text"
            id="classTitle"
            name="classTitle"
            value={formValues.classTitle}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Title of your class"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600"
          >
            Description
          </label>
          <textarea
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Write a short description about your class..."
            id="description"
            cols="30"
            rows="10"
            name="description"
            value={formValues.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        </div>
        <div className="">
          <button
            type="submit"
            className="bg-[#8ea12f] text-white px-4 py-2 rounded-md hover:bg-[#5f692a] focus:outline-none focus:ring focus:border-blue-300 w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
