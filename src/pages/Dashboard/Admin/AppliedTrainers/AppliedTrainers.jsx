import React from 'react'
import useTitle from '../../../../hooks/useTitle'
import TableRow from './TableRow'


const allTrainers = [
  {
    "name": "Emily Johnson",
    "image": "https://i.ibb.co/xjkx8ZX/fitness-trainer.jpg",
    "experience": "5 years",
    "available_slots": [
      "8:00 AM - 9:00 AM",
      "12:00 PM - 1:00 PM",
      "5:00 PM - 6:00 PM"
    ],
    "totalSlots": 3,
    "specialization": "Cardio Instructor",
    "bio": "Passionate about helping individuals achieve their fitness goals through fun and effective cardio workouts. Believes in a holistic approach to health and wellness.",
    "achievements": [
      "Certified Personal Trainer",
      "Featured in Fitness Magazine's Trainer Spotlight",
      "Completed Marathon in 3 hours"
    ],
    "skills": [
      "Cardio",
      "Holistic Approach"
    ],
    "availableTimeWeek": [
      "monday",
      "tuesday",
      "wednesday",
      "thursday"
    ],
    "email": "emily.johnson@example.com",
    "phone": "+1 (555) 123-4567"
  },
  {
    "name": "Daniel Smith",
    "image": "https://i.ibb.co/JndpMjL/yoga-instructor.jpg",
    "experience": "3 years",
    "available_slots": [
      "9:00 AM - 10:00 AM",
      "2:00 PM - 3:00 PM",
      "6:00 PM - 7:00 PM",
      "8:00 PM - 9:00 PM"
    ],
    "totalSlots": 4,
    "specialization": "Strength Training Specialist",
    "bio": "Dedicated to helping clients build strength and transform their bodies. Specializes in customized strength training programs tailored to individual needs.",
    "achievements": [
      "NASM Certified Strength and Conditioning Specialist",
      "Won Gold Medal in Regional Powerlifting Competition"
    ],
    "skills": [
      "Strength Training",
      "Customized Programs"
    ],
    "availableTimeWeek": [
      "monday",
      "tuesday",
      "wednesday",
      "thursday"
    ],
    "email": "daniel.smith@example.com",
    "phone": "+1 (555) 234-5678"
  },
  {
    "name": "Sophia Davis",
    "image": "https://i.ibb.co/3Wp9HpH/nutritionist.jpg",
    "experience": "7 years",
    "available_slots": [
      "10:00 AM - 11:00 AM",
      "1:00 PM - 2:00 PM",
      "7:00 PM - 8:00 PM",
      "9:00 PM - 10:00 PM",
      "11:00 PM - 12:00 AM"
    ],
    "totalSlots": 5,
    "specialization": "Yoga Instructor",
    "bio": "Passionate about the transformative power of yoga for both the body and mind. Guides students on a journey of self-discovery and mindfulness.",
    "achievements": [
      "Certified Yoga Instructor"
    ],
    "skills": [
      "Yoga",
      "Mindfulness"
    ],
    "availableTimeWeek": [
      "monday",
      "tuesday",
      "wednesday",
      "thursday"
    ],
    "email": "sophia.davis@example.com",
    "phone": "+1 (555) 345-6789"
  },
  {
    "name": "Ryan Wilson",
    "image": "https://i.ibb.co/7Jv70sd/wellness-couch.jpg",
    "experience": "4 years",
    "available_slots": [
      "11:00 AM - 12:00 PM",
      "3:00 PM - 4:00 PM",
      "8:00 PM - 9:00 PM",
      "10:00 PM - 11:00 PM"
    ],
    "totalSlots": 4,
    "specialization": "HIIT Trainer",
    "bio": "Committed to pushing clients to their limits through high-intensity interval training. Believes in the power of short, intense workouts for maximum results.",
    "achievements": [
      "Certified HIIT Specialist",
      "Trained Professional Athletes for Endurance"
    ],
    "skills": [
      "HIIT",
      "Endurance Training"
    ],
    "availableTimeWeek": [
      "monday",
      "tuesday",
      "wednesday",
      "thursday"
    ],
    "email": "ryan.wilson@example.com",
    "phone": "+1 (555) 456-7890"
  },
  {
    "name": "Olivia Taylor",
    "image": "https://i.ibb.co/xjkx8ZX/fitness-trainer.jpg",
    "experience": "6 years",
    "available_slots": [
      "7:00 AM - 8:00 AM",
      "12:00 PM - 1:00 PM",
      "5:00 PM - 6:00 PM"
    ],
    "totalSlots": 3,
    "specialization": "Pilates Instructor",
    "bio": "Passionate about promoting core strength and flexibility through Pilates. Designs sessions that focus on toning and sculpting the body.",
    "achievements": [
      "Certified Pilates Instructor",
      "Developed Specialized Pilates Program for Rehabilitation"
    ],
    "skills": [
      "Pilates",
      "Core Strength"
    ],
    "availableTimeWeek": [
      "monday",
      "tuesday",
      "wednesday",
      "thursday"
    ],
    "email": "olivia.taylor@example.com",
    "phone": "+1 (555) 567-8901"
  },
  {
    "name": "Matthew Anderson",
    "image": "https://i.ibb.co/JndpMjL/yoga-instructor.jpg",
    "experience": "2 years",
    "available_slots": [
      "8:00 AM - 9:00 AM",
      "2:00 PM - 3:00 PM",
      "6:00 PM - 7:00 PM"
    ],
    "totalSlots": 3,
    "specialization": "CrossFit Coach",
    "bio": "Dedicated to helping clients achieve peak fitness through CrossFit. Emphasizes functional movements and varied workouts for overall strength.",
    "achievements": [
      "Certified CrossFit Trainer",
      "Competed in Regional CrossFit Games"
    ],
    "skills": [
      "CrossFit",
      "Functional Movements"
    ],
    "availableTimeWeek": [
      "monday",
      "tuesday",
      "wednesday",
      "thursday"
    ],
    "email": "matthew.anderson@example.com",
    "phone": "+1 (555) 678-9012"
  }
]




const AppliedTrainers = () => {
  useTitle("FitnessHub | Applied Trainers")
  return (
    <div className="bg-gray-100 w-full h-full">
    <h3 className='lg:text-5xl md:text-4xl text-3xl font-bold text-center my-10'>Applied Trainers</h3>

    {/* Users Table  */}
    <div className="overflow-x-auto w-[90%] mx-auto">
      <div className="mb-8">
        <h3 className="md:text-2xl font-semibold">Total Applied Trainers: 0</h3>
      </div>
      {/* Trainer Table  */}
      <div className="overflow-x-auto">
  <table className="table mb-10">
    {/* head */}
    <thead className="bg-[#C8D96F] text-black text-[14px] font-bold uppercase">
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
      allTrainers?.map((trainer, index) => <TableRow key={trainer._id} index={index} trainer={trainer}></TableRow>)
     }
    </tbody>
  </table>
</div>
    </div>
  </div>
  )
}

export default AppliedTrainers