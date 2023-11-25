import React from "react";
import useTitle from "../../hooks/useTitle";
import TimeTable from "./TimeTable";
import ClassCard from "./ClassCard";

const classesData = [
  {
    organizer: {
      name: "FitnessHub",
      image: "https://i.ibb.co/HhHvzdN/fitness.jpg",
      description:
        "Dedicated to promoting a healthy and active lifestyle through a variety of fitness classes and programs.",
      email: "info@fitnesshub.com",
      phone: "+1 (555) 789-0123",
    },
    instructor: {
      name: "Emily Johnson",
      image: "https://i.ibb.co/xjkx8ZX/fitness-trainer.jpg",
      experience: "5 years",
      role: "Cardio Instructor",
      bio: "Passionate about helping individuals achieve their fitness goals through fun and effective cardio workouts.",
      contact_info: {
        email: "emily.johnson@example.com",
        phone: "+1 (555) 123-4567",
      },
      achievements: [
        "Certified Personal Trainer",
        "Featured in Fitness Magazine's Trainer Spotlight",
        "Completed Marathon in 3 hours",
      ],
    },
    class_details: {
      class_type: "Cardio Blast",
      difficulty_level: "Intermediate",
      location: "FitnessHub Studio",
      class_size: 20,
      price: "$25 per session",
      start_date: "2023-12-01",
      category: "Cardio",
    },
    schedule: {
      time: "8:00 AM - 9:00 AM",
      exercise: "Morning Cardio Blast",
    },
    description:
      "The Cardio Blast class with Emily Johnson is designed for individuals with an intermediate fitness level. The class combines various cardio exercises to provide a high-energy workout experience.",
    additional_info: {
      location_info: {
        location_name: "FitnessHub Studio",
        address: "123 Fitness Lane, Cityville",
        amenities: [
          "Spacious Workout Area",
          "State-of-the-Art Equipment",
          "Changing Rooms",
          "Showers",
        ],
        image: "https://i.ibb.co/HhHvzdN/fitness.jpg",
        description:
          "FitnessHub Studio is a modern fitness facility equipped with the latest technology and amenities to provide a comfortable and effective workout environment.",
        map_link: "https://maps.example.com/fitnesshubstudio",
      },
      join_info:
        "To join the Cardio Blast class, participants can sign up through the fitnessHub website or contact Emily Johnson directly through her provided contact information.",
    },
  },
  {
    organizer: {
      name: "FitnessHub",
      image: "https://i.ibb.co/HhHvzdN/fitness.jpg",
      description:
        "Dedicated to promoting a healthy and active lifestyle through a variety of fitness classes and programs.",
      email: "info@fitnesshub.com",
      phone: "+1 (555) 789-0123",
    },
    instructor: {
      name: "Daniel Smith",
      image: "https://i.ibb.co/xjkx8ZX/fitness-trainer.jpg",
      experience: "3 years",
      role: "Strength Training Specialist",
      bio: "Dedicated to helping clients build strength and transform their bodies. Specializes in customized strength training programs tailored to individual needs.",
      contact_info: {
        email: "daniel.smith@example.com",
        phone: "+1 (555) 234-5678",
      },
      achievements: [
        "NASM Certified Strength and Conditioning Specialist",
        "Won Gold Medal in Regional Powerlifting Competition",
      ],
    },
    class_details: {
      class_type: "Strength Training",
      difficulty_level: "Advanced",
      location: "FitnessHub Studio",
      class_size: 15,
      price: "$30 per session",
      start_date: "2023-12-02",
      category: "Strength Training",
    },
    schedule: {
      time: "9:00 AM - 10:00 AM",
      exercise: "Powerlifting Techniques",
    },
    description:
      "Join Daniel Smith in a high-intensity Strength Training class. This advanced class focuses on powerlifting techniques to maximize strength gains and overall body transformation.",
    additional_info: {
      location_info: {
        location_name: "FitnessHub Studio",
        address: "123 Fitness Lane, Cityville",
        amenities: [
          "Spacious Workout Area",
          "State-of-the-Art Equipment",
          "Changing Rooms",
          "Showers",
        ],
        image: "https://i.ibb.co/HhHvzdN/fitness.jpg",
        description:
          "FitnessHub Studio is a modern fitness facility equipped with the latest technology and amenities to provide a comfortable and effective workout environment.",
        map_link: "https://maps.example.com/fitnesshubstudio",
      },
      join_info:
        "To join the Strength Training class with Daniel Smith, sign up through the fitnessHub website or contact him directly using the provided contact information.",
    },
  },

  {
    organizer: {
      name: "FitnessHub",
      image: "https://i.ibb.co/HhHvzdN/fitness.jpg",
      description:
        "Dedicated to promoting a healthy and active lifestyle through a variety of fitness classes and programs.",
      email: "info@fitnesshub.com",
      phone: "+1 (555) 789-0123",
    },
    instructor: {
      name: "Sophia Davis",
      image: "https://i.ibb.co/3Wp9HpH/nutritionist.jpg",
      experience: "7 years",
      role: "Yoga Instructor",
      bio: "Passionate about the transformative power of yoga for both the body and mind. Guides students on a journey of self-discovery and mindfulness.",
      contact_info: {
        email: "sophia.davis@example.com",
        phone: "+1 (555) 345-6789",
      },
      achievements: [
        "Certified Yoga Instructor",
        "Hosted Yoga Retreat in Bali",
        "Featured in Yoga Journal for Innovative Teaching",
      ],
    },
    class_details: {
      class_type: "Yoga Flow",
      difficulty_level: "Intermediate",
      location: "FitnessHub Studio",
      class_size: 25,
      price: "$20 per session",
      start_date: "2023-12-03",
      category: "Yoga",
    },
    schedule: {
      time: "10:00 AM - 11:00 AM",
      exercise: "Mindful Yoga Flow",
    },
    description:
      "Join Sophia Davis in a transformative Yoga Flow class designed for individuals with an intermediate level of experience. Experience the benefits of mindful movement and breath coordination.",
    additional_info: {
      location_info: {
        location_name: "FitnessHub Studio",
        address: "123 Fitness Lane, Cityville",
        amenities: [
          "Spacious Workout Area",
          "State-of-the-Art Equipment",
          "Changing Rooms",
          "Showers",
        ],
        image: "https://i.ibb.co/HhHvzdN/fitness.jpg",
        description:
          "FitnessHub Studio is a modern fitness facility equipped with the latest technology and amenities to provide a comfortable and effective workout environment.",
        map_link: "https://maps.example.com/fitnesshubstudio",
      },
      join_info:
        "To join the Yoga Flow class with Sophia Davis, sign up through the fitnessHub website or contact her directly using the provided contact information.",
    },
  },

  {
    organizer: {
      name: "FitnessHub",
      image: "https://i.ibb.co/HhHvzdN/fitness.jpg",
      description:
        "Dedicated to promoting a healthy and active lifestyle through a variety of fitness classes and programs.",
      email: "info@fitnesshub.com",
      phone: "+1 (555) 789-0123",
    },
    instructor: {
      name: "Ryan Wilson",
      image: "https://i.ibb.co/JndpMjL/yoga-instructor.jpg",
      experience: "4 years",
      role: "HIIT Trainer",
      bio: "Committed to pushing clients to their limits through high-intensity interval training. Believes in the power of short, intense workouts for maximum results.",
      contact_info: {
        email: "ryan.wilson@example.com",
        phone: "+1 (555) 456-7890",
      },
      achievements: [
        "Certified HIIT Specialist",
        "Trained Professional Athletes for Endurance",
      ],
    },
    class_details: {
      class_type: "HIIT Intensity",
      difficulty_level: "Advanced",
      location: "FitnessHub Studio",
      class_size: 15,
      price: "$35 per session",
      start_date: "2023-12-04",
      category: "HIIT",
    },
    schedule: {
      time: "11:00 AM - 12:00 PM",
      exercise: "Extreme Interval Challenge",
    },
    description:
      "Join Ryan Wilson for an extreme HIIT Intensity class. This advanced session is designed to push your limits with intense interval challenges and dynamic exercises.",
    additional_info: {
      location_info: {
        location_name: "FitnessHub Studio",
        address: "123 Fitness Lane, Cityville",
        amenities: [
          "Spacious Workout Area",
          "State-of-the-Art Equipment",
          "Changing Rooms",
          "Showers",
        ],
        image: "https://i.ibb.co/HhHvzdN/fitness.jpg",
        description:
          "FitnessHub Studio is a modern fitness facility equipped with the latest technology and amenities to provide a comfortable and effective workout environment.",
        map_link: "https://maps.example.com/fitnesshubstudio",
      },
      join_info:
        "To join the HIIT Intensity class with Ryan Wilson, sign up through the fitnessHub website or contact him directly using the provided contact information.",
    },
  },

  {
    organizer: {
      name: "FitnessHub",
      image: "https://i.ibb.co/HhHvzdN/fitness.jpg",
      description:
        "Dedicated to promoting a healthy and active lifestyle through a variety of fitness classes and programs.",
      email: "info@fitnesshub.com",
      phone: "+1 (555) 789-0123",
    },
    instructor: {
      name: "Olivia Taylor",
      image: "https://i.ibb.co/xjkx8ZX/fitness-trainer.jpg",
      experience: "6 years",
      role: "Pilates Instructor",
      bio: "Passionate about promoting core strength and flexibility through Pilates. Designs sessions that focus on toning and sculpting the body.",
      contact_info: {
        email: "olivia.taylor@example.com",
        phone: "+1 (555) 567-8901",
      },
      achievements: [
        "Certified Pilates Instructor",
        "Developed Specialized Pilates Program for Rehabilitation",
      ],
    },
    class_details: {
      class_type: "Pilates Sculpt",
      difficulty_level: "Intermediate",
      location: "FitnessHub Studio",
      class_size: 18,
      price: "$28 per session",
      start_date: "2023-12-05",
      category: "Pilates",
    },
    schedule: {
      time: "7:00 AM - 8:00 AM",
      exercise: "Core Sculpting Pilates",
    },
    description:
      "Join Olivia Taylor for an invigorating Pilates Sculpt class. This intermediate session focuses on core sculpting exercises to enhance strength and flexibility.",
    additional_info: {
      location_info: {
        location_name: "FitnessHub Studio",
        address: "123 Fitness Lane, Cityville",
        amenities: [
          "Spacious Workout Area",
          "State-of-the-Art Equipment",
          "Changing Rooms",
          "Showers",
        ],
        image: "https://i.ibb.co/HhHvzdN/fitness.jpg",
        description:
          "FitnessHub Studio is a modern fitness facility equipped with the latest technology and amenities to provide a comfortable and effective workout environment.",
        map_link: "https://maps.example.com/fitnesshubstudio",
      },
      join_info:
        "To join the Pilates Sculpt class with Olivia Taylor, sign up through the fitnessHub website or contact her directly using the provided contact information.",
    },
  },

  {
    organizer: {
      name: "FitnessHub",
      image: "https://i.ibb.co/HhHvzdN/fitness.jpg",
      description:
        "Dedicated to promoting a healthy and active lifestyle through a variety of fitness classes and programs.",
      email: "info@fitnesshub.com",
      phone: "+1 (555) 789-0123",
    },
    instructor: {
      name: "Matthew Anderson",
      image: "https://i.ibb.co/xjkx8ZX/fitness-trainer.jpg",
      experience: "2 years",
      role: "CrossFit Coach",
      bio: "Dedicated to helping clients achieve peak fitness through CrossFit. Emphasizes functional movements and varied workouts for overall strength.",
      contact_info: {
        email: "matthew.anderson@example.com",
        phone: "+1 (555) 678-9012",
      },
      achievements: [
        "Certified CrossFit Trainer",
        "Competed in Regional CrossFit Games",
      ],
    },
    class_details: {
      class_type: "CrossFit Challenge",
      difficulty_level: "Advanced",
      location: "FitnessHub Studio",
      class_size: 12,
      price: "$40 per session",
      start_date: "2023-12-06",
      category: "CrossFit",
    },
    schedule: {
      time: "8:00 AM - 9:00 AM",
      exercise: "Functional Fitness Circuits",
    },
    description:
      "Join Matthew Anderson for an intense CrossFit Challenge. This advanced class focuses on functional fitness circuits to enhance overall strength and endurance.",
    additional_info: {
      location_info: {
        location_name: "FitnessHub Studio",
        address: "123 Fitness Lane, Cityville",
        amenities: [
          "Spacious Workout Area",
          "State-of-the-Art Equipment",
          "Changing Rooms",
          "Showers",
        ],
        image: "https://i.ibb.co/HhHvzdN/fitness.jpg",
        description:
          "FitnessHub Studio is a modern fitness facility equipped with the latest technology and amenities to provide a comfortable and effective workout environment.",
        map_link: "https://maps.example.com/fitnesshubstudio",
      },
      join_info:
        "To join the CrossFit Challenge class with Matthew Anderson, sign up through the fitnessHub website or contact him directly using the provided contact information.",
    },
  },
  {
    organizer: {
      name: "FitnessHub",
      image: "https://i.ibb.co/HhHvzdN/fitness.jpg",
      description:
        "Dedicated to promoting a healthy and active lifestyle through a variety of fitness classes and programs.",
      email: "info@fitnesshub.com",
      phone: "+1 (555) 789-0123",
    },
    instructor: {
      name: "Ava Miller",
      image: "https://i.ibb.co/xjkx8ZX/fitness-trainer.jpg",
      experience: "5 years",
      role: "Nutrition Specialist",
      bio: "Passionate about fueling the body for optimal performance. Provides personalized nutrition plans to support muscle building and overall health.",
      contact_info: {
        email: "ava.miller@example.com",
        phone: "+1 (555) 890-1234",
      },
      achievements: [
        "Certified Nutritionist",
        "Contributor to Health and Fitness Blogs",
        "Hosts Nutrition Workshops",
      ],
    },
    class_details: {
      class_type: "Nutrition Workshop",
      difficulty_level: "All Levels",
      location: "FitnessHub Studio",
      class_size: 30,
      price: "$15 per session",
      start_date: "2023-12-07",
      category: "Nutrition",
    },
    schedule: {
      time: "12:00 PM - 1:00 PM",
      exercise: "Nutrition Education Session",
    },
    description:
      "Join Ava Miller for an informative Nutrition Workshop. Suitable for all levels, this session focuses on providing essential nutrition education and guidance for a healthy lifestyle.",
    additional_info: {
      location_info: {
        location_name: "FitnessHub Studio",
        address: "123 Fitness Lane, Cityville",
        amenities: [
          "Spacious Workout Area",
          "State-of-the-Art Equipment",
          "Changing Rooms",
          "Showers",
        ],
        image: "https://i.ibb.co/HhHvzdN/fitness.jpg",
        description:
          "FitnessHub Studio is a modern fitness facility equipped with the latest technology and amenities to provide a comfortable and effective workout environment.",
        map_link: "https://maps.example.com/fitnesshubstudio",
      },
      join_info:
        "To join the Nutrition Workshop with Ava Miller, sign up through the fitnessHub website or contact her directly using the provided contact information.",
    },
  },
  {
    organizer: {
      name: "FitnessHub",
      image: "https://i.ibb.co/HhHvzdN/fitness.jpg",
      description:
        "Dedicated to promoting a healthy and active lifestyle through a variety of fitness classes and programs.",
      email: "info@fitnesshub.com",
      phone: "+1 (555) 789-0123",
    },
    instructor: {
      name: "Emma Garcia",
      image: "https://i.ibb.co/3Wp9HpH/nutritionist.jpg",
      experience: "6 years",
      role: "Strength and Conditioning Coach",
      bio: "Passionate about helping individuals build strength and improve overall conditioning. Specializes in personalized programs for diverse fitness levels.",
      contact_info: {
        email: "emma.garcia@example.com",
        phone: "+1 (555) 901-2345",
      },
      achievements: [
        "Certified Strength and Conditioning Specialist",
        "Published Articles on Strength Training",
        "Trains Athletes for Performance Enhancement",
      ],
    },
    class_details: {
      class_type: "Strength Conditioning",
      difficulty_level: "Intermediate",
      location: "FitnessHub Studio",
      class_size: 20,
      price: "$30 per session",
      start_date: "2023-12-08",
      category: "Strength and Conditioning",
    },
    schedule: {
      time: "2:00 PM - 3:00 PM",
      exercise: "Total Body Conditioning",
    },
    description:
      "Join Emma Garcia for a dynamic Strength Conditioning class. This intermediate session focuses on total body conditioning to enhance strength and overall fitness.",
    additional_info: {
      location_info: {
        location_name: "FitnessHub Studio",
        address: "123 Fitness Lane, Cityville",
        amenities: [
          "Spacious Workout Area",
          "State-of-the-Art Equipment",
          "Changing Rooms",
          "Showers",
        ],
        image: "https://i.ibb.co/HhHvzdN/fitness.jpg",
        description:
          "FitnessHub Studio is a modern fitness facility equipped with the latest technology and amenities to provide a comfortable and effective workout environment.",
        map_link: "https://maps.example.com/fitnesshubstudio",
      },
      join_info:
        "To join the Strength Conditioning class with Emma Garcia, sign up through the fitnessHub website or contact her directly using the provided contact information.",
    },
  },
  {
    organizer: {
      name: "FitnessHub",
      image: "https://i.ibb.co/HhHvzdN/fitness.jpg",
      description:
        "Dedicated to promoting a healthy and active lifestyle through a variety of fitness classes and programs.",
      email: "info@fitnesshub.com",
      phone: "+1 (555) 789-0123",
    },
    instructor: {
      name: "Liam Turner",
      image: "https://i.ibb.co/3Wp9HpH/nutritionist.jpg",
      experience: "4 years",
      role: "Mindfulness Meditation Guide",
      bio: "Dedicated to helping individuals achieve mental well-being through mindfulness meditation. Guides sessions for stress reduction and inner peace.",
      contact_info: {
        email: "liam.turner@example.com",
        phone: "+1 (555) 234-5678",
      },
      achievements: [
        "Certified Meditation Instructor",
        "Conducts Mindfulness Workshops",
        "Contributor to Mental Wellness Blogs",
      ],
    },
    class_details: {
      class_type: "Mindfulness Meditation",
      difficulty_level: "All Levels",
      location: "FitnessHub Studio",
      class_size: 25,
      price: "$20 per session",
      start_date: "2023-12-09",
      category: "Mindfulness",
    },
    schedule: {
      time: "6:00 PM - 7:00 PM",
      exercise: "Guided Meditation for Inner Peace",
    },
    description:
      "Join Liam Turner for a session of Mindfulness Meditation. Suitable for all levels, this class focuses on guided meditation techniques for stress reduction and inner peace.",
    additional_info: {
      location_info: {
        location_name: "FitnessHub Studio",
        address: "123 Fitness Lane, Cityville",
        amenities: [
          "Spacious Workout Area",
          "State-of-the-Art Equipment",
          "Changing Rooms",
          "Showers",
        ],
        image: "https://i.ibb.co/HhHvzdN/fitness.jpg",
        description:
          "FitnessHub Studio is a modern fitness facility equipped with the latest technology and amenities to provide a comfortable and effective workout environment.",
        map_link: "https://maps.example.com/fitnesshubstudio",
      },
      join_info:
        "To join the Mindfulness Meditation class with Liam Turner, sign up through the fitnessHub website or contact him directly using the provided contact information.",
    },
  },

  {
    organizer: {
      name: "FitnessHub",
      image: "https://i.ibb.co/HhHvzdN/fitness.jpg",
      description:
        "Dedicated to promoting a healthy and active lifestyle through a variety of fitness classes and programs.",
      email: "info@fitnesshub.com",
      phone: "+1 (555) 789-0123",
    },
    instructor: {
      name: "Isaac Taylor",
      image: "https://i.ibb.co/xjkx8ZX/fitness-trainer.jpg",
      experience: "4 years",
      role: "Strength and Conditioning Coach",
      bio: "Passionate about helping individuals build strength and improve overall conditioning. Specializes in personalized programs for diverse fitness levels.",
      contact_info: {
        email: "isaac.taylor@example.com",
        phone: "+1 (555) 901-2345",
      },
      achievements: [
        "Certified Strength and Conditioning Specialist",
        "Published Articles on Strength Training",
        "Trains Athletes for Performance Enhancement",
      ],
    },
    class_details: {
      class_type: "Strength Conditioning",
      difficulty_level: "Intermediate",
      location: "FitnessHub Studio",
      class_size: 20,
      price: "$30 per session",
      start_date: "2023-12-11",
      category: "Strength and Conditioning",
    },
    schedule: {
      time: "2:00 PM - 3:00 PM",
      exercise: "Total Body Conditioning",
    },
    description:
      "Join Isaac Taylor for a dynamic Strength Conditioning class. This intermediate session focuses on total body conditioning to enhance strength and overall fitness.",
    additional_info: {
      location_info: {
        location_name: "FitnessHub Studio",
        address: "123 Fitness Lane, Cityville",
        amenities: [
          "Spacious Workout Area",
          "State-of-the-Art Equipment",
          "Changing Rooms",
          "Showers",
        ],
        image: "https://i.ibb.co/HhHvzdN/fitness.jpg",
        description:
          "FitnessHub Studio is a modern fitness facility equipped with the latest technology and amenities to provide a comfortable and effective workout environment.",
        map_link: "https://maps.example.com/fitnesshubstudio",
      },
      join_info:
        "To join the Strength Conditioning class with Isaac Taylor, sign up through the fitnessHub website or contact him directly using the provided contact information.",
    },
  },

  {
    organizer: {
      name: "FitnessHub",
      image: "https://i.ibb.co/HhHvzdN/fitness.jpg",
      description:
        "Dedicated to promoting a healthy and active lifestyle through a variety of fitness classes and programs.",
      email: "info@fitnesshub.com",
      phone: "+1 (555) 789-0123",
    },
    instructor: {
      name: "Luna Martinez",
      image: "https://i.ibb.co/3Wp9HpH/nutritionist.jpg",
      experience: "3 years",
      role: "Mindfulness Meditation Guide",
      bio: "Dedicated to helping individuals achieve mental well-being through mindfulness meditation. Guides sessions for stress reduction and inner peace.",
      contact_info: {
        email: "luna.martinez@example.com",
        phone: "+1 (555) 234-5678",
      },
      achievements: [
        "Certified Meditation Instructor",
        "Conducts Mindfulness Workshops",
        "Contributor to Mental Wellness Blogs",
      ],
    },
    class_details: {
      class_type: "Mindfulness Meditation",
      difficulty_level: "All Levels",
      location: "FitnessHub Studio",
      class_size: 25,
      price: "$20 per session",
      start_date: "2023-12-12",
      category: "Mindfulness",
    },
    schedule: {
      time: "6:00 PM - 7:00 PM",
      exercise: "Guided Meditation for Inner Peace",
    },
    description:
      "Join Luna Martinez for a session of Mindfulness Meditation. Suitable for all levels, this class focuses on guided meditation techniques for stress reduction and inner peace.",
    additional_info: {
      location_info: {
        location_name: "FitnessHub Studio",
        address: "123 Fitness Lane, Cityville",
        amenities: [
          "Spacious Workout Area",
          "State-of-the-Art Equipment",
          "Changing Rooms",
          "Showers",
        ],
        image: "https://i.ibb.co/HhHvzdN/fitness.jpg",
        description:
          "FitnessHub Studio is a modern fitness facility equipped with the latest technology and amenities to provide a comfortable and effective workout environment.",
        map_link: "https://maps.example.com/fitnesshubstudio",
      },
      join_info:
        "To join the Mindfulness Meditation class with Luna Martinez, sign up through the fitnessHub website or contact her directly using the provided contact information.",
    },
  },

  {
    organizer: {
      name: "FitnessHub",
      image: "https://i.ibb.co/HhHvzdN/fitness.jpg",
      description:
        "Dedicated to promoting a healthy and active lifestyle through a variety of fitness classes and programs.",
      email: "info@fitnesshub.com",
      phone: "+1 (555) 789-0123",
    },
    instructor: {
      name: "Oliver Baker",
      image: "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
      experience: "5 years",
      role: "Nutrition Specialist",
      bio: "Passionate about fueling the body for optimal performance. Provides personalized nutrition plans to support muscle building and overall health.",
      contact_info: {
        email: "oliver.baker@example.com",
        phone: "+1 (555) 890-1234",
      },
      achievements: [
        "Certified Nutritionist",
        "Contributor to Health and Fitness Blogs",
        "Hosts Nutrition Workshops",
      ],
    },
    class_details: {
      class_type: "Nutrition Workshop",
      difficulty_level: "All Levels",
      location: "FitnessHub Studio",
      class_size: 30,
      price: "$15 per session",
      start_date: "2023-12-13",
      category: "Nutrition",
    },
    schedule: {
      time: "12:00 PM - 1:00 PM",
      exercise: "Nutrition Education Session",
    },
    description:
      "Join Oliver Baker for an informative Nutrition Workshop. Suitable for all levels, this session focuses on providing essential nutrition education and guidance for a healthy lifestyle.",
    additional_info: {
      location_info: {
        location_name: "FitnessHub Studio",
        address: "123 Fitness Lane, Cityville",
        amenities: [
          "Spacious Workout Area",
          "State-of-the-Art Equipment",
          "Changing Rooms",
          "Showers",
        ],
        image: "https://i.ibb.co/HhHvzdN/fitness.jpg",
        description:
          "FitnessHub Studio is a modern fitness facility equipped with the latest technology and amenities to provide a comfortable and effective workout environment.",
        map_link: "https://maps.example.com/fitnesshubstudio",
      },
      join_info:
        "To join the Nutrition Workshop with Oliver Baker, sign up through the fitnessHub website or contact him directly using the provided contact information.",
    },
  },

  {
    organizer: {
      name: "FitnessHub",
      image: "https://i.ibb.co/HhHvzdN/fitness.jpg",
      description:
        "Dedicated to promoting a healthy and active lifestyle through a variety of fitness classes and programs.",
      email: "info@fitnesshub.com",
      phone: "+1 (555) 789-0123",
    },
    instructor: {
      name: "Sophie Turner",
      image: "https://i.ibb.co/tPX3Xr4/strength.jpg",
      experience: "6 years",
      role: "Strength and Conditioning Coach",
      bio: "Passionate about helping individuals build strength and improve overall conditioning. Specializes in personalized programs for diverse fitness levels.",
      contact_info: {
        email: "sophie.turner@example.com",
        phone: "+1 (555) 901-2345",
      },
      achievements: [
        "Certified Strength and Conditioning Specialist",
        "Published Articles on Strength Training",
        "Trains Athletes for Performance Enhancement",
      ],
    },
    class_details: {
      class_type: "Strength Conditioning",
      difficulty_level: "Intermediate",
      location: "FitnessHub Studio",
      class_size: 20,
      price: "$30 per session",
      start_date: "2023-12-14",
      category: "Strength and Conditioning",
    },
    schedule: {
      time: "2:00 PM - 3:00 PM",
      exercise: "Total Body Conditioning",
    },
    description:
      "Join Sophie Turner for a dynamic Strength Conditioning class. This intermediate session focuses on total body conditioning to enhance strength and overall fitness.",
    additional_info: {
      location_info: {
        location_name: "FitnessHub Studio",
        address: "123 Fitness Lane, Cityville",
        amenities: [
          "Spacious Workout Area",
          "State-of-the-Art Equipment",
          "Changing Rooms",
          "Showers",
        ],
        image: "https://i.ibb.co/HhHvzdN/fitness.jpg",
        description:
          "FitnessHub Studio is a modern fitness facility equipped with the latest technology and amenities to provide a comfortable and effective workout environment.",
        map_link: "https://maps.example.com/fitnesshubstudio",
      },
      join_info:
        "To join the Strength Conditioning class with Sophie Turner, sign up through the fitnessHub website or contact her directly using the provided contact information.",
    },
  },
];

const Classes = () => {
  useTitle("FitnessHub | Classes");
  return (
    <div>
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
