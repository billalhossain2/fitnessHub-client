import React from 'react'
import TimeTableRow from './TimeTableRow'

const dailyActivities = [
    {
      "time": "8:00 AM",
      "exercise": "Morning Stretch",
      "instructor": "John Doe",
      "exercise2": "Cardio Warm-up",
      "instructor2": "Jane Smith",
      "exercise3": "Bodyweight Exercises",
      "instructor3": "Chris Johnson",
      "exercise4": "Functional Training",
      "instructor4": "Emily Davis",
      "exercise5": "Cool Down",
      "instructor5": "Michael White"
    },
    {
      "time": "9:00 AM",
      "exercise": "Yoga Flow",
      "instructor": "Sophia Davis",
      "exercise2": "Strength Training",
      "instructor2": "Daniel Smith",
      "exercise3": "HIIT Circuit",
      "instructor3": "Ryan Wilson",
      "exercise4": "Pilates Core Workout",
      "instructor4": "Olivia Taylor",
      "exercise5": "Relaxation Techniques",
      "instructor5": "Alex Johnson"
    },
    {
      "time": "10:00 AM",
      "exercise": "CrossFit Coach",
      "instructor": "Matthew Anderson",
      "exercise2": "Zumba Dance",
      "instructor2": "Jennifer White",
      "exercise3": "Meditation Session",
      "instructor3": "Emma Davis",
      "exercise4": "Functional Training",
      "instructor4": "Chris Johnson",
      "exercise5": "Cooldown Stretches",
      "instructor5": "Michael White"
    },
    {
      "time": "11:00 AM",
      "exercise": "Pilates Core Workout",
      "instructor": "Olivia Taylor",
      "exercise2": "Functional Training",
      "instructor2": "Chris Johnson",
      "exercise3": "CrossFit Coach",
      "instructor3": "Matthew Anderson",
      "exercise4": "Yoga Flow",
      "instructor4": "Sophia Davis",
      "exercise5": "HIIT Cardio",
      "instructor5": "Ryan Wilson"
    },
    {
      "time": "12:00 PM",
      "exercise": "Lunch Break",
      "instructor": "N/A",
      "exercise2": "Cardio Warm-up",
      "instructor2": "Jane Smith",
      "exercise3": "Bodyweight Exercises",
      "instructor3": "Chris Johnson",
      "exercise4": "Functional Training",
      "instructor4": "Emily Davis",
      "exercise5": "Cool Down",
      "instructor5": "Michael White"
    },
    {
      "time": "1:00 PM",
      "exercise": "Yoga Flow",
      "instructor": "Sophia Davis",
      "exercise2": "Strength Training",
      "instructor2": "Daniel Smith",
      "exercise3": "HIIT Circuit",
      "instructor3": "Ryan Wilson",
      "exercise4": "Pilates Core Workout",
      "instructor4": "Olivia Taylor",
      "exercise5": "Relaxation Techniques",
      "instructor5": "Alex Johnson"
    },
    {
      "time": "2:00 PM",
      "exercise": "CrossFit Coach",
      "instructor": "Matthew Anderson",
      "exercise2": "Zumba Dance",
      "instructor2": "Jennifer White",
      "exercise3": "Meditation Session",
      "instructor3": "Emma Davis",
      "exercise4": "Functional Training",
      "instructor4": "Chris Johnson",
      "exercise5": "Cooldown Stretches",
      "instructor5": "Michael White"
    },
    {
      "time": "3:00 PM",
      "exercise": "Pilates Core Workout",
      "instructor": "Olivia Taylor",
      "exercise2": "Functional Training",
      "instructor2": "Chris Johnson",
      "exercise3": "CrossFit Coach",
      "instructor3": "Matthew Anderson",
      "exercise4": "Yoga Flow",
      "instructor4": "Sophia Davis",
      "exercise5": "HIIT Cardio",
      "instructor5": "Ryan Wilson"
    },
    {
      "time": "4:00 PM",
      "exercise": "Cardio Warm-up",
      "instructor": "Jane Smith",
      "exercise2": "Bodyweight Exercises",
      "instructor2": "Chris Johnson",
      "exercise3": "Functional Training",
      "instructor3": "Emily Davis",
      "exercise4": "HIIT Trainer",
      "instructor4": "Ryan Wilson",
      "exercise5": "Cooldown Stretches",
      "instructor5": "Michael White"
    },
    {
      "time": "5:00 PM",
      "exercise": "Functional Training",
      "instructor": "Emily Davis",
      "exercise2": "HIIT Trainer",
      "instructor2": "Ryan Wilson",
      "exercise3": "Certified Pilates Instructor",
      "instructor3": "Olivia Taylor",
      "exercise4": "CrossFit Coach",
      "instructor4": "Matthew Anderson",
      "exercise5": "Cardio Warm-up",
      "instructor5": "Jane Smith"
    }
  ]

const TimeTable = () => {
  return (
    <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-slate-300 shadow-md">
            <tr className="">
              <th className="py-10 text-[16px] text-gray-800">Time</th>
              <th className="px-16 text-[16px] text-gray-800">Sunday</th>
              <th className="px-16 text-[16px] text-gray-800">Monday</th>
              <th className="px-16 text-[16px] text-gray-800">Tuesday</th>
              <th className="px-16 text-[16px] text-gray-800">Wednessday</th>
              <th className="px-16 text-[16px] text-gray-800">Thirsday</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {
              dailyActivities.map((item, index) => <TimeTableRow key={index} item={item}></TimeTableRow>)
            }
          </tbody>
        </table>
      </div>
  )
}

export default TimeTable