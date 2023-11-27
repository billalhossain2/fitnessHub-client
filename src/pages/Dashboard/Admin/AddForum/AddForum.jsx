import React, { useState } from "react";
import useTitle from "../../../../hooks/useTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useRole from "../../../../hooks/useRole";

const AddForum = () => {
  useTitle("FitnessHub | Add New Forum");
  const axiosSecure = useAxiosSecure();

  const { isLoading, error, data: role } = useRole();

  const [formValues, setFormValues] = useState({
    title: "",
    date: "",
    likes:0,
    likedBy:"",
    author:"",
    content: "",
    postedBy:role
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
        const newForum = {...formValues, image:photoUrl}
        console.log("new forum data========> ", newForum)

        axiosSecure.post('/forums', newForum)
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
            htmlFor="title"
            className="block text-sm font-medium text-gray-600"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formValues.title}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Your blog title"
            required
          />
        </div>

        <div>
          <label
            htmlFor="blogImage"
            className="block text-sm font-medium text-gray-600"
          >
            Blog Image
          </label>
          <input
            type="file"
            id="blogImage"
            name="image"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Your image"
            required
          />
        </div>

        <div>
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-600"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formValues.author}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Author name"
            required
          />
        </div>

        {/* Add similar code for other form fields */}

        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-600"
          >
           Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formValues.date}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600"
          >
            Content
          </label>
          <textarea
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Write your blog content"
            id="content"
            cols="30"
            rows="10"
            name="content"
            value={formValues.content}
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

export default AddForum;
