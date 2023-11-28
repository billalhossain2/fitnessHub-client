import React from 'react'
import { useParams } from 'react-router-dom'
import useLoadData from '../../../hooks/useLoadData';
import PackagePlanCard from './PackagePlanCard';

const packages = [
    {
      "plan": "Silver",
      "classes": [
        "Beginner Yoga",
        "Cardio Kickboxing"
      ],
      "facilities": [
        "Access to gym equipment",
        "Locker room facilities"
      ],
      "price":350
    },
    {
      "plan": "Gold",
      "classes": [
        "Intermediate Yoga",
        "High-Intensity Interval Training (HIIT)",
        "Pilates"
      ],
      "facilities": [
        "Access to gym equipment",
        "Locker room facilities",
        "Swimming pool access"
      ],
      "price":500
    },
    {
      "plan": "Diamond",
      "classes": [
        "Advanced Yoga",
        "CrossFit",
        "Martial Arts",
        "Pilates"
      ],
      "facilities": [
        "Access to gym equipment",
        "Locker room facilities",
        "Swimming pool access",
        "Personal trainer sessions"
      ],
      "price":700
    }
]
  

const TrainerBooking = () => {
    const {trainerId} = useParams();
    const {loading, error, data:trainer} = useLoadData(`trainers/${trainerId}`);
  return (
    <div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10'>
            {
                packages?.map((item, index)=><PackagePlanCard key={index} item={item} trainer={trainer}></PackagePlanCard>)
            }
        </div>
    </div>
  )
}

export default TrainerBooking