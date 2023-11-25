import React from "react";
import useTitle from "../../hooks/useTitle";
import TimeTable from "./TimeTable";
import ClassCard from "./ClassCard";

const classesData = [
  {
    "organizer": {
      "name": "FitnessHub",
      "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
      "description": "Dedicated to promoting a healthy and active lifestyle through a variety of fitness classes and programs.",
      "email": "info@fitnesshub.com",
      "phone": "+1 (555) 789-0123"
    },
    "instructor": {
      "name": "Emily Johnson",
      "image": "https://i.ibb.co/xjkx8ZX/fitness-trainer.jpg",
      "experience": "5 years",
      "role": "Cardio Instructor",
      "bio": "Passionate about helping individuals achieve their fitness goals through fun and effective cardio workouts.",
      "contact_info": {
        "email": "emily.johnson@example.com",
        "phone": "+1 (555) 123-4567"
      },
      "achievements": [
        "Certified Personal Trainer",
        "Featured in Fitness Magazine's Trainer Spotlight",
        "Completed Marathon in 3 hours"
      ]
    },
    "class_details": {
      "class_type": "Cardio Blast",
      "difficulty_level": "Intermediate",
      "location": "FitnessHub Studio",
      "class_size": 20,
      "price": "$25 per session",
      "start_date": "2023-12-01",
      "category": "Cardio"
    },
    "schedule": {
      "time": "8:00 AM - 9:00 AM",
      "exercise": "Morning Cardio Blast"
    },
    "description": "The Cardio Blast class with Emily Johnson is designed for individuals with an intermediate fitness level. The class combines various cardio exercises to provide a high-energy workout experience.",
    "additional_info": {
      "location_info": {
        "location_name": "FitnessHub Studio",
        "address": "123 Fitness Lane, Cityville",
        "amenities": [
          "Spacious Workout Area",
          "State-of-the-Art Equipment",
          "Changing Rooms",
          "Showers"
        ],
        "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
        "description": "FitnessHub Studio is a modern fitness facility equipped with the latest technology and amenities to provide a comfortable and effective workout environment.",
        "map_link": "https://maps.example.com/fitnesshubstudio"
      },
      "join_info": "To join the Cardio Blast class, participants can sign up through the fitnessHub website or contact Emily Johnson directly through her provided contact information."
    }
  },
  {
    "organizer": {
      "name": "FitnessHub",
      "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
      "description": "Dedicated to promoting a healthy and active lifestyle through a variety of fitness classes and programs.",
      "email": "info@fitnesshub.com",
      "phone": "+1 (555) 789-0123"
    },
    "instructor": {
      "name": "Daniel Smith",
      "image": "https://i.ibb.co/xjkx8ZX/fitness-trainer.jpg",
      "experience": "3 years",
      "role": "Strength Training Specialist",
      "bio": "Dedicated to helping clients build strength and transform their bodies. Specializes in customized strength training programs tailored to individual needs.",
      "contact_info": {
        "email": "daniel.smith@example.com",
        "phone": "+1 (555) 234-5678"
      },
      "achievements": [
        "NASM Certified Strength and Conditioning Specialist",
        "Won Gold Medal in Regional Powerlifting Competition"
      ]
    },
    "class_details": {
      "class_type": "Strength Training",
      "difficulty_level": "Advanced",
      "location": "FitnessHub Studio",
      "class_size": 15,
      "price": "$30 per session",
      "start_date": "2023-12-02",
      "category": "Strength Training"
    },
    "schedule": {
      "time": "9:00 AM - 10:00 AM",
      "exercise": "Powerlifting Techniques"
    },
    "description": "Join Daniel Smith in a high-intensity Strength Training class. This advanced class focuses on powerlifting techniques to maximize strength gains and overall body transformation.",
    "additional_info": {
      "location_info": {
        "location_name": "FitnessHub Studio",
        "address": "123 Fitness Lane, Cityville",
        "amenities": [
          "Spacious Workout Area",
          "State-of-the-Art Equipment",
          "Changing Rooms",
          "Showers"
        ],
        "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
        "description": "FitnessHub Studio is a modern fitness facility equipped with the latest technology and amenities to provide a comfortable and effective workout environment.",
        "map_link": "https://maps.example.com/fitnesshubstudio"
      },
      "join_info": "To join the Strength Training class with Daniel Smith, sign up through the fitnessHub website or contact him directly using the provided contact information."
    }
  },

  {
    "organizer": {
      "name": "FitnessHub",
      "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
      "description": "Dedicated to promoting a healthy and active lifestyle through a variety of fitness classes and programs.",
      "email": "info@fitnesshub.com",
      "phone": "+1 (555) 789-0123"
    },
    "instructor": {
      "name": "Emily Johnson",
      "image": "https://i.ibb.co/xjkx8ZX/fitness-trainer.jpg",
      "experience": "5 years",
      "role": "Cardio Instructor",
      "bio": "Passionate about helping individuals achieve their fitness goals through fun and effective cardio workouts.",
      "contact_info": {
        "email": "emily.johnson@example.com",
        "phone": "+1 (555) 123-4567"
      },
      "achievements": [
        "Certified Personal Trainer",
        "Featured in Fitness Magazine's Trainer Spotlight",
        "Completed Marathon in 3 hours"
      ]
    },
    "class_details": {
      "class_type": "Cardio Blast",
      "difficulty_level": "Intermediate",
      "location": "FitnessHub Studio",
      "class_size": 20,
      "price": "$25 per session",
      "start_date": "2023-12-01",
      "category": "Cardio"
    },
    "schedule": {
      "time": "8:00 AM - 9:00 AM",
      "exercise": "Morning Cardio Blast"
    },
    "description": "The Cardio Blast class with Emily Johnson is designed for individuals with an intermediate fitness level. The class combines various cardio exercises to provide a high-energy workout experience.",
    "additional_info": {
      "location_info": {
        "location_name": "FitnessHub Studio",
        "address": "123 Fitness Lane, Cityville",
        "amenities": [
          "Spacious Workout Area",
          "State-of-the-Art Equipment",
          "Changing Rooms",
          "Showers"
        ],
        "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
        "description": "FitnessHub Studio is a modern fitness facility equipped with the latest technology and amenities to provide a comfortable and effective workout environment.",
        "map_link": "https://maps.example.com/fitnesshubstudio"
      },
      "join_info": "To join the Cardio Blast class, participants can sign up through the fitnessHub website or contact Emily Johnson directly through her provided contact information."
    }
  },
  {
    "organizer": {
      "name": "FitnessHub",
      "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
      "description": "Dedicated to promoting a healthy and active lifestyle through a variety of fitness classes and programs.",
      "email": "info@fitnesshub.com",
      "phone": "+1 (555) 789-0123"
    },
    "instructor": {
      "name": "Emily Johnson",
      "image": "https://i.ibb.co/xjkx8ZX/fitness-trainer.jpg",
      "experience": "5 years",
      "role": "Cardio Instructor",
      "bio": "Passionate about helping individuals achieve their fitness goals through fun and effective cardio workouts.",
      "contact_info": {
        "email": "emily.johnson@example.com",
        "phone": "+1 (555) 123-4567"
      },
      "achievements": [
        "Certified Personal Trainer",
        "Featured in Fitness Magazine's Trainer Spotlight",
        "Completed Marathon in 3 hours"
      ]
    },
    "class_details": {
      "class_type": "Cardio Blast",
      "difficulty_level": "Intermediate",
      "location": "FitnessHub Studio",
      "class_size": 20,
      "price": "$25 per session",
      "start_date": "2023-12-01",
      "category": "Cardio"
    },
    "schedule": {
      "time": "8:00 AM - 9:00 AM",
      "exercise": "Morning Cardio Blast"
    },
    "description": "The Cardio Blast class with Emily Johnson is designed for individuals with an intermediate fitness level. The class combines various cardio exercises to provide a high-energy workout experience.",
    "additional_info": {
      "location_info": {
        "location_name": "FitnessHub Studio",
        "address": "123 Fitness Lane, Cityville",
        "amenities": [
          "Spacious Workout Area",
          "State-of-the-Art Equipment",
          "Changing Rooms",
          "Showers"
        ],
        "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
        "description": "FitnessHub Studio is a modern fitness facility equipped with the latest technology and amenities to provide a comfortable and effective workout environment.",
        "map_link": "https://maps.example.com/fitnesshubstudio"
      },
      "join_info": "To join the Cardio Blast class, participants can sign up through the fitnessHub website or contact Emily Johnson directly through her provided contact information."
    }
  },
  {
    "organizer": {
      "name": "FitnessHub",
      "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
      "description": "Dedicated to promoting a healthy and active lifestyle through a variety of fitness classes and programs.",
      "email": "info@fitnesshub.com",
      "phone": "+1 (555) 789-0123"
    },
    "instructor": {
      "name": "Emily Johnson",
      "image": "https://i.ibb.co/xjkx8ZX/fitness-trainer.jpg",
      "experience": "5 years",
      "role": "Cardio Instructor",
      "bio": "Passionate about helping individuals achieve their fitness goals through fun and effective cardio workouts.",
      "contact_info": {
        "email": "emily.johnson@example.com",
        "phone": "+1 (555) 123-4567"
      },
      "achievements": [
        "Certified Personal Trainer",
        "Featured in Fitness Magazine's Trainer Spotlight",
        "Completed Marathon in 3 hours"
      ]
    },
    "class_details": {
      "class_type": "Cardio Blast",
      "difficulty_level": "Intermediate",
      "location": "FitnessHub Studio",
      "class_size": 20,
      "price": "$25 per session",
      "start_date": "2023-12-01",
      "category": "Cardio"
    },
    "schedule": {
      "time": "8:00 AM - 9:00 AM",
      "exercise": "Morning Cardio Blast"
    },
    "description": "The Cardio Blast class with Emily Johnson is designed for individuals with an intermediate fitness level. The class combines various cardio exercises to provide a high-energy workout experience.",
    "additional_info": {
      "location_info": {
        "location_name": "FitnessHub Studio",
        "address": "123 Fitness Lane, Cityville",
        "amenities": [
          "Spacious Workout Area",
          "State-of-the-Art Equipment",
          "Changing Rooms",
          "Showers"
        ],
        "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
        "description": "FitnessHub Studio is a modern fitness facility equipped with the latest technology and amenities to provide a comfortable and effective workout environment.",
        "map_link": "https://maps.example.com/fitnesshubstudio"
      },
      "join_info": "To join the Cardio Blast class, participants can sign up through the fitnessHub website or contact Emily Johnson directly through her provided contact information."
    }
  },
  {
    "organizer": {
      "name": "FitnessHub",
      "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
      "description": "Dedicated to promoting a healthy and active lifestyle through a variety of fitness classes and programs.",
      "email": "info@fitnesshub.com",
      "phone": "+1 (555) 789-0123"
    },
    "instructor": {
      "name": "Emily Johnson",
      "image": "https://i.ibb.co/xjkx8ZX/fitness-trainer.jpg",
      "experience": "5 years",
      "role": "Cardio Instructor",
      "bio": "Passionate about helping individuals achieve their fitness goals through fun and effective cardio workouts.",
      "contact_info": {
        "email": "emily.johnson@example.com",
        "phone": "+1 (555) 123-4567"
      },
      "achievements": [
        "Certified Personal Trainer",
        "Featured in Fitness Magazine's Trainer Spotlight",
        "Completed Marathon in 3 hours"
      ]
    },
    "class_details": {
      "class_type": "Cardio Blast",
      "difficulty_level": "Intermediate",
      "location": "FitnessHub Studio",
      "class_size": 20,
      "price": "$25 per session",
      "start_date": "2023-12-01",
      "category": "Cardio"
    },
    "schedule": {
      "time": "8:00 AM - 9:00 AM",
      "exercise": "Morning Cardio Blast"
    },
    "description": "The Cardio Blast class with Emily Johnson is designed for individuals with an intermediate fitness level. The class combines various cardio exercises to provide a high-energy workout experience.",
    "additional_info": {
      "location_info": {
        "location_name": "FitnessHub Studio",
        "address": "123 Fitness Lane, Cityville",
        "amenities": [
          "Spacious Workout Area",
          "State-of-the-Art Equipment",
          "Changing Rooms",
          "Showers"
        ],
        "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
        "description": "FitnessHub Studio is a modern fitness facility equipped with the latest technology and amenities to provide a comfortable and effective workout environment.",
        "map_link": "https://maps.example.com/fitnesshubstudio"
      },
      "join_info": "To join the Cardio Blast class, participants can sign up through the fitnessHub website or contact Emily Johnson directly through her provided contact information."
    }
  }
]

const Classes = () => {
  useTitle("FitnessHub | Classes");
  return (
    <div>
      <h3 className="font-bold md:text-5xl text-3xl mt-10 mb-5">All Classes</h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
         {
          classesData.map((classItem, index)=> <ClassCard key={index} classItem={classItem}></ClassCard>)
         }
      </div>

{/* Weekly Activities  */}
      <h3 className="border-[1px] border-gray-500 rounded-full p-3 w-40 text-center mt-32 mb-10">
        TIMETABLE
      </h3>
      <div className="h-[1px] bg-gray-500 my-10"></div>
      <h3 className="md:text-5xl text-3xl font-medium my-8">
        Weekly Schedule Events
      </h3>
      <TimeTable></TimeTable>
    </div>
  );
};

export default Classes;
