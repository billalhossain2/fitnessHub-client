import React from 'react'
import useTitle from '../../hooks/useTitle'
import GalleryItem from './GalleryItem'

const galleryData = [
  {
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg",
    "exercise": "Shoulder Press",
    "likes": 110,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
    "exercise": "Coordination Drill",
    "likes": 90,
    "difficulty_level": "Beginner"
  },
  {
    "image": "https://i.ibb.co/SVnj5R6/meditation.png",
    "exercise": "Cardio Kickboxing",
    "likes": 140,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Mindful Eating",
    "likes": 120,
    "difficulty_level": "Beginner"
  },
  {
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
    "exercise": "Agility Drills",
    "likes": 100,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/SVnj5R6/meditation.png",
    "exercise": "Flexibility Training",
    "likes": 130,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg",
    "exercise": "Powerlifting Basics",
    "likes": 80,
    "difficulty_level": "Advanced"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Tabata Workouts",
    "likes": 170,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/SVnj5R6/meditation.png",
    "exercise": "Flexibility Training",
    "likes": 130,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg",
    "exercise": "Powerlifting Basics",
    "likes": 80,
    "difficulty_level": "Advanced"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Tabata Workouts",
    "likes": 170,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/SVnj5R6/meditation.png",
    "exercise": "Flexibility Training",
    "likes": 130,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg",
    "exercise": "Powerlifting Basics",
    "likes": 80,
    "difficulty_level": "Advanced"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Tabata Workouts",
    "likes": 170,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/SVnj5R6/meditation.png",
    "exercise": "Plyometric Exercises",
    "likes": 110,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
    "exercise": "Bodyweight Circuit",
    "likes": 160,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg",
    "exercise": "Medicine Ball Workouts",
    "likes": 120,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Rowing for Fitness",
    "likes": 140,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
    "exercise": "Body Combat",
    "likes": 130,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/SVnj5R6/meditation.png",
    "exercise": "Outdoor Bootcamp",
    "likes": 120,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg",
    "exercise": "Aggressive Walking",
    "likes": 90,
    "difficulty_level": "Beginner"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Strength Training for Seniors",
    "likes": 110,
    "difficulty_level": "Beginner"
  },
  {
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
    "exercise": "Functional Fitness for Everyday Life",
    "likes": 180,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/SVnj5R6/meditation.png",
    "exercise": "Mindful Weightlifting",
    "likes": 150,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg",
    "exercise": "Sprint Intervals",
    "likes": 130,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Rowing Machine Techniques",
    "likes": 120,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
    "exercise": "Functional Fitness for Everyday Life",
    "likes": 180,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/SVnj5R6/meditation.png",
    "exercise": "Mindful Weightlifting",
    "likes": 150,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg",
    "exercise": "Sprint Intervals",
    "likes": 130,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Rowing Machine Techniques",
    "likes": 120,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
    "exercise": "Functional Fitness for Everyday Life",
    "likes": 180,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/SVnj5R6/meditation.png",
    "exercise": "Mindful Weightlifting",
    "likes": 150,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg",
    "exercise": "Sprint Intervals",
    "likes": 130,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Rowing Machine Techniques",
    "likes": 120,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
    "exercise": "Functional Fitness for Everyday Life",
    "likes": 180,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/SVnj5R6/meditation.png",
    "exercise": "Mindful Weightlifting",
    "likes": 150,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg",
    "exercise": "Sprint Intervals",
    "likes": 130,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Rowing Machine Techniques",
    "likes": 120,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
    "exercise": "Functional Fitness for Everyday Life",
    "likes": 180,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/SVnj5R6/meditation.png",
    "exercise": "Mindful Weightlifting",
    "likes": 150,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg",
    "exercise": "Sprint Intervals",
    "likes": 130,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Rowing Machine Techniques",
    "likes": 120,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
    "exercise": "Battle Ropes",
    "likes": 110,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/SVnj5R6/meditation.png",
    "exercise": "Kettlebell Snatches",
    "likes": 140,
    "difficulty_level": "Advanced"
  },
  {
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg",
    "exercise": "Jumping Jacks",
    "likes": 120,
    "difficulty_level": "Beginner"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Kickboxing Cardio",
    "likes": 160,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
    "exercise": "Bodyweight Squats",
    "likes": 140,
    "difficulty_level": "Beginner"
  },
  {
    "image": "https://i.ibb.co/SVnj5R6/meditation.png",
    "exercise": "Mindful Cycling",
    "likes": 150,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg",
    "exercise": "CrossFit WOD",
    "likes": 170,
    "difficulty_level": "Advanced"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Pilates Reformer",
    "likes": 120,
    "difficulty_level": "Advanced"
  },
  {
    "image": "https://i.ibb.co/SVnj5R6/meditation.png",
    "exercise": "Mindful Yoga",
    "likes": 130,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
    "exercise": "Stair Climbing",
    "likes": 110,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Full Body Stretch",
    "likes": 120,
    "difficulty_level": "Beginner"
  },
  {
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg",
    "exercise": "Tabata Sprints",
    "likes": 140,
    "difficulty_level": "Advanced"
  },
  {
    "image": "https://i.ibb.co/SVnj5R6/meditation.png",
    "exercise": "Zumba Dance Workout",
    "likes": 160,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
    "exercise": "Mindful Climbing",
    "likes": 120,
    "difficulty_level": "Advanced"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Functional Core Training",
    "likes": 130,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Rowing Machine Techniques",
    "likes": 120,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
    "exercise": "Battle Ropes",
    "likes": 110,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/SVnj5R6/meditation.png",
    "exercise": "Kettlebell Snatches",
    "likes": 140,
    "difficulty_level": "Advanced"
  },
  {
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg",
    "exercise": "Jumping Jacks",
    "likes": 120,
    "difficulty_level": "Beginner"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Kickboxing Cardio",
    "likes": 160,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
    "exercise": "Bodyweight Squats",
    "likes": 140,
    "difficulty_level": "Beginner"
  },
  {
    "image": "https://i.ibb.co/SVnj5R6/meditation.png",
    "exercise": "Mindful Cycling",
    "likes": 150,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg",
    "exercise": "CrossFit WOD",
    "likes": 170,
    "difficulty_level": "Advanced"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Pilates Reformer",
    "likes": 120,
    "difficulty_level": "Advanced"
  },
  {
    "image": "https://i.ibb.co/SVnj5R6/meditation.png",
    "exercise": "Mindful Yoga",
    "likes": 130,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
    "exercise": "Stair Climbing",
    "likes": 110,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Full Body Stretch",
    "likes": 120,
    "difficulty_level": "Beginner"
  },
  {
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg",
    "exercise": "Tabata Sprints",
    "likes": 140,
    "difficulty_level": "Advanced"
  },
  {
    "image": "https://i.ibb.co/SVnj5R6/meditation.png",
    "exercise": "Zumba Dance Workout",
    "likes": 160,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
    "exercise": "Mindful Climbing",
    "likes": 120,
    "difficulty_level": "Advanced"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Functional Core Training",
    "likes": 130,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Rowing Machine Techniques",
    "likes": 120,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
    "exercise": "Battle Ropes",
    "likes": 110,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/SVnj5R6/meditation.png",
    "exercise": "Kettlebell Snatches",
    "likes": 140,
    "difficulty_level": "Advanced"
  },
  {
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg",
    "exercise": "Jumping Jacks",
    "likes": 120,
    "difficulty_level": "Beginner"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Kickboxing Cardio",
    "likes": 160,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
    "exercise": "Bodyweight Squats",
    "likes": 140,
    "difficulty_level": "Beginner"
  },
  {
    "image": "https://i.ibb.co/SVnj5R6/meditation.png",
    "exercise": "Mindful Cycling",
    "likes": 150,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg",
    "exercise": "CrossFit WOD",
    "likes": 170,
    "difficulty_level": "Advanced"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Pilates Reformer",
    "likes": 120,
    "difficulty_level": "Advanced"
  },
  {
    "image": "https://i.ibb.co/SVnj5R6/meditation.png",
    "exercise": "Mindful Yoga",
    "likes": 130,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
    "exercise": "Stair Climbing",
    "likes": 110,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Full Body Stretch",
    "likes": 120,
    "difficulty_level": "Beginner"
  },
  {
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg",
    "exercise": "Tabata Sprints",
    "likes": 140,
    "difficulty_level": "Advanced"
  },
  {
    "image": "https://i.ibb.co/SVnj5R6/meditation.png",
    "exercise": "Zumba Dance Workout",
    "likes": 160,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
    "exercise": "Mindful Climbing",
    "likes": 120,
    "difficulty_level": "Advanced"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Functional Core Training",
    "likes": 130,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Rowing Machine Techniques",
    "likes": 120,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
    "exercise": "Battle Ropes",
    "likes": 110,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/SVnj5R6/meditation.png",
    "exercise": "Kettlebell Snatches",
    "likes": 140,
    "difficulty_level": "Advanced"
  },
  {
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg",
    "exercise": "Jumping Jacks",
    "likes": 120,
    "difficulty_level": "Beginner"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Kickboxing Cardio",
    "likes": 160,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
    "exercise": "Bodyweight Squats",
    "likes": 140,
    "difficulty_level": "Beginner"
  },
  {
    "image": "https://i.ibb.co/SVnj5R6/meditation.png",
    "exercise": "Mindful Cycling",
    "likes": 150,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg",
    "exercise": "CrossFit WOD",
    "likes": 170,
    "difficulty_level": "Advanced"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Pilates Reformer",
    "likes": 120,
    "difficulty_level": "Advanced"
  },
  {
    "image": "https://i.ibb.co/SVnj5R6/meditation.png",
    "exercise": "Mindful Yoga",
    "likes": 130,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
    "exercise": "Stair Climbing",
    "likes": 110,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Full Body Stretch",
    "likes": 120,
    "difficulty_level": "Beginner"
  },
  {
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg",
    "exercise": "Tabata Sprints",
    "likes": 140,
    "difficulty_level": "Advanced"
  },
  {
    "image": "https://i.ibb.co/SVnj5R6/meditation.png",
    "exercise": "Zumba Dance Workout",
    "likes": 160,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
    "exercise": "Mindful Climbing",
    "likes": 120,
    "difficulty_level": "Advanced"
  },
  {
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg",
    "exercise": "Functional Core Training",
    "likes": 130,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg",
    "exercise": "Circuit Boxing",
    "likes": 110,
    "difficulty_level": "Advanced"
  },
  {
    "image": "https://i.ibb.co/SVnj5R6/meditation.png",
    "exercise": "Mindful Rowing",
    "likes": 140,
    "difficulty_level": "Intermediate"
  },
  {
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg",
    "exercise": "Trail Running",
    "likes": 120,
    "difficulty_level": "Intermediate"
  }
]

const Gallery = () => {
    useTitle('FitnessHub | Gallery')
  return (
    <div>
        <div className='relative'>
            <img className='w-full h-[500px]' src="https://i.ibb.co/R9vqHPw/gallery.png" alt="Gallery" />
            <p className='absolute bg-black bg-opacity-70 top-0 background-opacity-50 w-full h-full text-white font-bold md:text-6xl text-4xl flex items-center justify-center'>Gallery</p>
        </div>

        {/* Gallery Container  */}
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 mt-10'>
          {
            galleryData.map((item, index) =>  <GalleryItem key={index} item={item}></GalleryItem>)
          }
        </div>
    </div>
  )
}

export default Gallery