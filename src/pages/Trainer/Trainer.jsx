import React from 'react'
import useTitle from '../../hooks/useTitle'
import TrainerCard from './TrainerCard'
import { Link } from 'react-router-dom';


const trainers =[
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
    "contact_info": {
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 123-4567"
    },
    "achievements": [
      "Certified Personal Trainer",
      "Featured in Fitness Magazine's Trainer Spotlight",
      "Completed Marathon in 3 hours"
    ],
    "skills": ["Cardio", "Holistic Approach"],
    "availableTimeWeek": ["monday", "tuesday", "wednesday", "thursday"]
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
    "contact_info": {
      "email": "daniel.smith@example.com",
      "phone": "+1 (555) 234-5678"
    },
    "achievements": [
      "NASM Certified Strength and Conditioning Specialist",
      "Won Gold Medal in Regional Powerlifting Competition"
    ],
    "skills": ["Strength Training", "Customized Programs"],
    "availableTimeWeek": ["monday", "tuesday", "wednesday", "thursday"]
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
    "contact_info": {
      "email": "sophia.davis@example.com",
      "phone": "+1 (555) 345-6789"
    },
    "achievements": [
      "Certified Yoga Instructor"
    ],
    "skills": ["Yoga", "Mindfulness"],
    "availableTimeWeek": ["monday", "tuesday", "wednesday", "thursday"]
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
    "contact_info": {
      "email": "ryan.wilson@example.com",
      "phone": "+1 (555) 456-7890"
    },
    "achievements": [
      "Certified HIIT Specialist",
      "Trained Professional Athletes for Endurance"
    ],
    "skills": ["HIIT", "Endurance Training"],
    "availableTimeWeek": ["monday", "tuesday", "wednesday", "thursday"]
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
    "contact_info": {
      "email": "olivia.taylor@example.com",
      "phone": "+1 (555) 567-8901"
    },
    "achievements": [
      "Certified Pilates Instructor",
      "Developed Specialized Pilates Program for Rehabilitation"
    ],
    "skills": ["Pilates", "Core Strength"],
    "availableTimeWeek": ["monday", "tuesday", "wednesday", "thursday"]
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
    "contact_info": {
      "email": "matthew.anderson@example.com",
      "phone": "+1 (555) 678-9012"
    },
    "achievements": [
      "Certified CrossFit Trainer",
      "Competed in Regional CrossFit Games"
    ],
    "skills": ["CrossFit", "Functional Movements"],
    "availableTimeWeek": ["monday", "tuesday", "wednesday", "thursday"]
  }
]




const Trainer = () => {
    useTitle('FitnessHub | Trainer')
  return (
    <div>
        <div className='relative mb-5'>
            <img className='w-full h-96' src="https://i.ibb.co/RpjysL8/galler-cover.jpg" alt="Gallery" />
            <p className='absolute bg-black bg-opacity-80 top-0 background-opacity-50 w-full h-full text-white font-bold text-4xl flex items-center justify-center'>Our Trainers</p>
        </div>

        {/* trainers container  */}
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
          {
            trainers.map((trainer, index) => <TrainerCard key={index} trainer={trainer}></TrainerCard>)
          }
        </div>

        <div className='flex justify-center mt-10'>
        <Link to="/trainer-form">
        <button className='bg-[#EE62C5] hover:bg-[#bb4497] text-white font-bold px-4 py-2 rounded-md'>Become A Trainer</button>
        </Link>
        </div>
    </div>
  )
}

export default Trainer