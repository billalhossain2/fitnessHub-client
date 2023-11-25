import useTitle from '../../hooks/useTitle'
import ForumItem from './ForumItem'
const forumsData = [
  {
    "title": "Introduction to Fitness",
    "content": "Hello, fitness enthusiasts! Let's discuss various workout routines, diet plans, and share our fitness journeys. What's your favorite workout?",
    "author": "FitnessFanatic123",
    "date": "2023-11-25",
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg"
  },
  {
    "title": "Yoga for Beginners",
    "content": "Looking to start practicing yoga? Join this thread to get tips on beginner-friendly yoga poses, breathing techniques, and recommended yoga mats.",
    "author": "ZenYogi",
    "date": "2023-11-25",
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg"
  },
  {
    "title": "Nutrition Tips for Muscle Gain",
    "content": "Share your favorite recipes and nutrition tips for building muscle. Let's discuss the best sources of protein and effective meal plans for bulking.",
    "author": "MuscleChef",
    "date": "2023-11-25",
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg"
  },
  {
    "title": "HIIT Workouts Challenge",
    "content": "Join the HIIT workouts challenge! Share your favorite high-intensity interval training routines and track your progress. Let's motivate each other!",
    "author": "HIITWarrior",
    "date": "2023-11-25",
    "image": "https://i.ibb.co/SVnj5R6/meditation.png"
  },
  {
    "title": "Pilates for Core Strength",
    "content": "Discuss Pilates exercises that target core strength and flexibility. Share your favorite Pilates routines and tips for improving posture.",
    "author": "PilatesPro",
    "date": "2023-11-25",
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg"
  },
  {
    "title": "Running Enthusiasts Club",
    "content": "Calling all runners! Join the running enthusiasts club to share your running experiences, training plans, and favorite running routes.",
    "author": "RunForever",
    "date": "2023-11-26",
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg"
  },
  {
    "title": "Mindfulness Meditation",
    "content": "Explore the benefits of mindfulness meditation. Share meditation techniques, mindfulness apps, and discuss the impact of mindfulness on mental well-being.",
    "author": "MindfulSoul",
    "date": "2023-11-26",
    "image": "https://i.ibb.co/SVnj5R6/meditation.png"
  },
  {
    "title": "Cycling Adventures",
    "content": "Love cycling? Share your cycling adventures, tips on bike maintenance, and recommendations for scenic cycling routes. Let's pedal together!",
    "author": "CycleExplorer",
    "date": "2023-11-26",
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg"
  },
  {
    "title": "CrossFit Challenges",
    "content": "Embark on CrossFit challenges! Discuss CrossFit workouts, techniques, and share your achievements. Set new fitness goals and crush them!",
    "author": "CrossFitChamp",
    "date": "2023-11-26",
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg"
  },
  {
    "title": "Rest and Recovery",
    "content": "Rest and recovery are essential! Share your favorite recovery strategies, relaxation techniques, and discuss the importance of a good night's sleep.",
    "author": "RecoveryGuru",
    "date": "2023-11-26",
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg"
  },
  {
    "title": "Vegetarian Fitness",
    "content": "Are you a vegetarian fitness enthusiast? Share your favorite plant-based recipes, protein sources, and tips for meeting nutritional needs without meat.",
    "author": "PlantPowered",
    "date": "2023-11-27",
    "image": "https://i.ibb.co/SVnj5R6/meditation.png"
  },
  {
    "title": "Bodyweight Workouts",
    "content": "Discuss effective bodyweight workouts that can be done anywhere. Share your favorite bodyweight exercises and routines for strength and flexibility.",
    "author": "BodyweightWarrior",
    "date": "2023-11-27",
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg"
  },
  {
    "title": "Fitness Challenges",
    "content": "Challenge yourself and others with new fitness goals! Share your fitness challenges, track progress, and celebrate achievements together.",
    "author": "ChallengeAccepted",
    "date": "2023-11-27",
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg"
  },
  {
    "title": "Healthy Cooking Recipes",
    "content": "Share and explore healthy cooking recipes. Discuss meal prep tips, cooking techniques, and flavorful recipes that align with your fitness goals.",
    "author": "CookingEnthusiast",
    "date": "2023-11-27",
    "image": "https://i.ibb.co/SVnj5R6/meditation.png"
  },
  {
    "title": "Cardiovascular Health",
    "content": "Discuss tips and strategies for maintaining cardiovascular health. Share your favorite cardio workouts, routines, and experiences with heart-healthy living.",
    "author": "HeartHealthHero",
    "date": "2023-11-28",
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg"
  },
  {
    "title": "Outdoor Fitness Adventures",
    "content": "Love outdoor workouts? Share your experiences with outdoor fitness adventures, hiking trails, and tips for staying active in nature.",
    "author": "OutdoorExplorer",
    "date": "2023-11-28",
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg"
  },
  {
    "title": "Mind-Body Connection",
    "content": "Explore the mind-body connection in fitness. Discuss the impact of mental well-being on physical health and share mindfulness practices.",
    "author": "MindBodyHarmony",
    "date": "2023-11-28",
    "image": "https://i.ibb.co/SVnj5R6/meditation.png"
  },
  {
    "title": "Strength Training Tips",
    "content": "Share and learn strength training tips. Discuss proper form, effective exercises, and personalized strength training programs for various fitness levels.",
    "author": "StrengthTrainingGuru",
    "date": "2023-11-28",
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg"
  },
  {
    "title": "Mental Wellness Journey",
    "content": "Embark on a mental wellness journey. Share personal experiences, coping strategies, and resources for mental well-being in the fitness community.",
    "author": "WellnessExplorer",
    "date": "2023-11-29",
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg"
  },
  {
    "title": "Functional Fitness Workouts",
    "content": "Discuss the benefits of functional fitness workouts. Share exercises that improve everyday movements and enhance overall functional strength.",
    "author": "FunctionalFitFan",
    "date": "2023-11-29",
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg"
  },
  {
    "title": "Hydration Tips for Athletes",
    "content": "Stay hydrated! Share and learn hydration tips for athletes. Discuss the importance of water intake and strategies for optimal hydration during workouts.",
    "author": "HydrationPro",
    "date": "2023-11-29",
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg"
  },
  {
    "title": "Post-Workout Recovery",
    "content": "Optimize your post-workout recovery! Share and explore effective recovery strategies, from stretching routines to nutrition tips for muscle recovery.",
    "author": "RecoveryChampion",
    "date": "2023-11-29",
    "image": "https://i.ibb.co/SVnj5R6/meditation.png"
  },
  {
    "title": "Motivational Fitness Quotes",
    "content": "Share your favorite motivational fitness quotes. Inspire and be inspired by uplifting words that fuel your determination on the fitness journey.",
    "author": "MotivationMaster",
    "date": "2023-11-30",
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg"
  },
  {
    "title": "Flexibility Training",
    "content": "Explore the world of flexibility training. Share your favorite stretches, yoga poses, and tips for improving flexibility and mobility.",
    "author": "FlexibilityExplorer",
    "date": "2023-11-30",
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg"
  },
  {
    "title": "Virtual Fitness Classes",
    "content": "Join the discussion on virtual fitness classes. Share experiences with online workouts, challenges, and tips for staying active in the digital fitness realm.",
    "author": "VirtualFitConnect",
    "date": "2023-11-30",
    "image": "https://i.ibb.co/SVnj5R6/meditation.png"
  },
  {
    "title": "Injury Prevention Strategies",
    "content": "Discuss injury prevention strategies. Share tips on proper warm-ups, cool-downs, and exercises to reduce the risk of injuries in various fitness activities.",
    "author": "InjuryPreventionPro",
    "date": "2023-11-30",
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg"
  },
  {
    "title": "Mindful Eating Habits",
    "content": "Practice mindful eating for a healthier lifestyle. Share tips on savoring food, recognizing hunger and fullness, and cultivating a positive relationship with food.",
    "author": "MindfulEater",
    "date": "2023-12-01",
    "image": "https://i.ibb.co/SVnj5R6/meditation.png"
  },
  {
    "title": "Powerlifting Community",
    "content": "Connect with fellow powerlifters! Discuss powerlifting techniques, training programs, and share your personal records in squat, bench press, and deadlift.",
    "author": "PowerliftingPro",
    "date": "2023-12-01",
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg"
  },
  {
    "title": "Mind-Body Wellness Retreat",
    "content": "Plan your mind-body wellness retreat! Share recommendations for retreat locations, mindfulness activities, and tips for a rejuvenating experience.",
    "author": "WellnessRetreatGuide",
    "date": "2023-12-01",
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg"
  },
  {
    "title": "Balance and Stability Workouts",
    "content": "Enhance your balance and stability! Discuss workouts and exercises that focus on improving balance and stability for overall functional fitness.",
    "author": "StabilityFanatic",
    "date": "2023-12-01",
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg"
  },
  {
    "title": "Trail Running Adventures",
    "content": "Trail runners unite! Share your experiences with trail running, favorite trail routes, and tips for conquering elevation changes and uneven terrain.",
    "author": "TrailRunningExplorer",
    "date": "2023-12-02",
    "image": "https://i.ibb.co/SVnj5R6/meditation.png"
  },
  {
    "title": "Vegan Fitness Lifestyle",
    "content": "Embrace the vegan fitness lifestyle! Share plant-based recipes, nutritional tips, and discuss the benefits of a vegan diet for athletic performance.",
    "author": "VeganFitLife",
    "date": "2023-12-02",
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg"
  },
  {
    "title": "Mindful Running",
    "content": "Experience mindful running. Discuss techniques for incorporating mindfulness into your runs, staying present, and finding joy in each step.",
    "author": "MindfulRunner",
    "date": "2023-12-02",
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg"
  },
  {
    "title": "Rowing Workouts",
    "content": "Row your way to fitness! Share rowing workouts, tips on proper rowing machine technique, and discuss the benefits of rowing for cardiovascular health.",
    "author": "RowingEnthusiast",
    "date": "2023-12-02",
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg"
  },
  {
    "title": "Kettlebell Training Tips",
    "content": "Master kettlebell training! Share tips on proper form, effective kettlebell exercises, and discuss how to incorporate kettlebells into your fitness routine.",
    "author": "KettlebellMaster",
    "date": "2023-12-03",
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg"
  },
  {
    "title": "Recovery Yoga",
    "content": "Unwind with recovery yoga. Share gentle yoga poses, stretches, and relaxation techniques to promote recovery and flexibility in your fitness journey.",
    "author": "YogaRecovery",
    "date": "2023-12-03",
    "image": "https://i.ibb.co/SVnj5R6/meditation.png"
  },
  {
    "title": "Circuit Training Workouts",
    "content": "Rev up your fitness with circuit training! Discuss circuit workouts, tips for creating effective circuits, and share your favorite high-energy routines.",
    "author": "CircuitWarrior",
    "date": "2023-12-03",
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg"
  },
  {
    "title": "Posture Improvement",
    "content": "Achieve better posture! Share exercises, stretches, and tips to improve posture. Discuss the impact of good posture on overall health and well-being.",
    "author": "PosturePro",
    "date": "2023-12-03",
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg"
  },
  {
    "title": "Mindful Swimming",
    "content": "Dive into mindful swimming. Explore techniques for staying present in the water, share swimming workouts, and discuss the mental and physical benefits of swimming.",
    "author": "SwimMindfully",
    "date": "2023-12-04",
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg"
  },
  {
    "title": "Boxing Fitness",
    "content": "Knockout fitness with boxing! Share boxing workouts, tips on technique, and discuss the cardiovascular and strength benefits of incorporating boxing into your routine.",
    "author": "BoxingFitFan",
    "date": "2023-12-04",
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg"
  },
  {
    "title": "Mindful Cycling",
    "content": "Pedal mindfully with cycling. Discuss techniques for mindful cycling, share favorite cycling routes, and explore the mental and physical benefits of biking.",
    "author": "CycleMindfully",
    "date": "2023-12-04",
    "image": "https://i.ibb.co/SVnj5R6/meditation.png"
  },
  {
    "title": "Dance Workouts",
    "content": "Move and groove with dance workouts! Share dance routines, tips for dancing fitness, and discuss how dance can be a fun and effective way to stay active.",
    "author": "DanceEnthusiast",
    "date": "2023-12-04",
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg"
  },
  {
    "title": "Recovery Nutrition",
    "content": "Fuel your recovery with proper nutrition. Discuss post-workout nutrition, recovery meals, and share recipes that support muscle recovery and overall well-being.",
    "author": "NutritionRecovery",
    "date": "2023-12-05",
    "image": "https://i.ibb.co/SVnj5R6/meditation.png"
  },
  {
    "title": "Outdoor Yoga Sessions",
    "content": "Connect with nature through outdoor yoga sessions. Share experiences of practicing yoga outdoors and discuss the unique benefits of combining yoga with nature.",
    "author": "YogaNature",
    "date": "2023-12-05",
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg"
  },
  {
    "title": "Interval Running",
    "content": "Boost your cardio with interval running. Share interval running workouts, tips on pacing, and discuss the benefits of incorporating intervals into your runs.",
    "author": "IntervalRunner",
    "date": "2023-12-05",
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg"
  },
  {
    "title": "Nutrition for Endurance",
    "content": "Fuel your endurance! Discuss nutrition strategies for long-distance runners, cyclists, and endurance athletes. Share tips on staying energized during extended workouts.",
    "author": "EnduranceNutrition",
    "date": "2023-12-05",
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg"
  },
  {
    "title": "Meditation for Sleep",
    "content": "Wind down with meditation for better sleep. Share calming meditation techniques, bedtime rituals, and discuss the importance of mindfulness in improving sleep quality.",
    "author": "SleepMeditation",
    "date": "2023-12-06",
    "image": "https://i.ibb.co/SVnj5R6/meditation.png"
  },
  {
    "title": "Keto Fitness Lifestyle",
    "content": "Explore the intersection of keto and fitness. Discuss how a ketogenic diet can complement your fitness goals, share keto-friendly recipes, and exchange tips.",
    "author": "KetoFitLife",
    "date": "2023-12-06",
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg"
  },
  {
    "title": "Mindful Hiking",
    "content": "Hike mindfully in nature. Share your favorite hiking trails, experiences with mindful hiking, and discuss the mental and physical benefits of hiking.",
    "author": "HikeMindfully",
    "date": "2023-12-06",
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg"
  },
  {
    "title": "Yoga Nidra for Relaxation",
    "content": "Experience deep relaxation with Yoga Nidra. Share your practices, guided sessions, and discuss how Yoga Nidra can promote relaxation and reduce stress.",
    "author": "YogaNidraRelax",
    "date": "2023-12-06",
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg"
  },
  {
    "title": "Climbing Adventures",
    "content": "Reach new heights with climbing adventures! Share rock climbing tips, indoor climbing experiences, and discuss the physical and mental challenges of climbing.",
    "author": "ClimbingExplorer",
    "date": "2023-12-07",
    "image": "https://i.ibb.co/tPX3Xr4/strength.jpg"
  },
  {
    "title": "Fitness Book Club",
    "content": "Combine your love for fitness and reading! Join the fitness book club to discuss inspiring fitness books, share recommendations, and explore new perspectives.",
    "author": "BookwormFit",
    "date": "2023-12-07",
    "image": "https://i.ibb.co/SVnj5R6/meditation.png"
  },
  {
    "title": "Mental Resilience",
    "content": "Build mental resilience through fitness. Discuss mindset strategies, mental toughness exercises, and share personal stories of overcoming challenges.",
    "author": "ResilienceBuilder",
    "date": "2023-12-07",
    "image": "https://i.ibb.co/HhHvzdN/fitness.jpg"
  },
  {
    "title": "Swimming Techniques",
    "content": "Dive into swimming techniques. Share tips on improving your swim strokes, discuss effective drills, and explore the world of competitive and recreational swimming.",
    "author": "SwimTechniques",
    "date": "2023-12-07",
    "image": "https://i.ibb.co/N7yYmJn/nutrition-muscle-building.jpg"
  }
]

const Forums = () => {
  useTitle('FitnessHub | Forums')
  return (
    <div>
      <div className='relative'>
            <img className='w-full h-[500px] rounded-3xl' src="https://i.ibb.co/b2xqh63/forum.png" alt="Forum cover" />
            <p className='absolute bg-black bg-opacity-70 top-0 w-full h-full text-white font-bold md:text-7xl text-4xl flex items-center justify-center rounded-3xl'>Our Forums</p>

      </div>

    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 mt-10">
        {
            forumsData.map((forum, index) => <ForumItem key={index} forum={forum}></ForumItem>)
        }
    </div>
    </div>
  )
}

export default Forums