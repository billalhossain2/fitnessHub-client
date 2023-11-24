import SectionTitle from "../../../components/SectionTitle"
import BlogItem from "./BlogItem"

const blogsData = [
    {
      "title": "The Benefits of High-Intensity Interval Training (HIIT)",
      "date": "2023-05-15",
      "author": "Alexandra Davis",
      "image": "https://i.ibb.co/1b7nrcQ/high-intensity.jpg",
      "content": "Discover the incredible benefits of incorporating High-Intensity Interval Training (HIIT) into your fitness routine. From increased calorie burn to improved cardiovascular health, explore the science behind this efficient workout method."
    },
    {
      "title": "Mindful Eating: A Key to Sustainable Weight Management",
      "date": "2023-04-22",
      "author": "Emily Carter",
      "image": "https://i.ibb.co/2PrKf5B/mindful-eating.jpg",
      "content": "Explore the concept of mindful eating and how it can transform your relationship with food. Learn practical tips to cultivate mindfulness during meals, fostering a healthier approach to nutrition and weight management."
    },
    {
      "title": "Unlocking the Power of Plant-Based Proteins",
      "date": "2023-03-10",
      "author": "Michael Rodriguez",
      "image": "https://i.ibb.co/GHwDJ63/plant-based-eating.png",
      "content": "Dive into the world of plant-based proteins and their role in muscle building and overall health. Discover delicious plant-based sources and how to incorporate them into your daily diet for optimal fitness."
    },
    {
      "title": "The Importance of Flexibility Training in Your Workout Routine",
      "date": "2023-02-18",
      "author": "Daniel Johnson",
      "image": "https://i.ibb.co/Qj1ysK5/workout-routine.png",
      "content": "Learn why flexibility training is crucial for overall fitness and injury prevention. Explore effective stretching exercises and techniques to enhance your flexibility and range of motion, no matter your fitness level."
    },
    {
      "title": "Fueling Your Workouts: A Guide to Pre- and Post-Workout Nutrition",
      "date": "2023-01-05",
      "author": "Emily Carter",
      "image": "https://i.ibb.co/zV6LBJ6/workout-fuel.jpg",
      "content": "Maximize your workout performance with the right nutrition. This comprehensive guide covers pre- and post-workout nutrition, offering tips on what to eat and when to optimize energy, recovery, and results."
    },
    {
      "title": "Stress and Fitness: Finding Balance for a Healthier Life",
      "date": "2022-12-12",
      "author": "Daniel Johnson",
      "image": "https://i.ibb.co/F8D1qPT/stress-management.jpg",
      "content": "Explore the intricate relationship between stress and fitness. Discover practical strategies to manage stress levels, allowing you to achieve a healthier and more balanced lifestyle while reaching your fitness goals."
    },
    {
      "title": "Setting Realistic Fitness Goals: A Step-by-Step Guide",
      "date": "2022-11-20",
      "author": "Alexandra Davis",
      "image": "https://i.ibb.co/F8D1qPT/stress-management.jpg",
      "content": "Embark on your fitness journey with confidence by setting realistic and achievable goals. This step-by-step guide provides insights into effective goal-setting strategies, ensuring long-term success and motivation."
    },
    {
      "title": "The Role of Sleep in Muscle Recovery and Overall Fitness",
      "date": "2022-10-08",
      "author": "Michael Rodriguez",
      "image": "https://i.ibb.co/QMb5800/sleeping.jpg",
      "content": "Uncover the critical role that sleep plays in muscle recovery and overall fitness. Learn how prioritizing quality sleep can enhance your physical performance, boost recovery, and contribute to a healthier lifestyle."
    }
  ]
  

const Blog = () => {
  return (
    <>
    <SectionTitle title="Recent Articles"></SectionTitle>

    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {
            blogsData.map((blog, index) => <BlogItem key={index} blog={blog}></BlogItem>)
        }
    </div>
    </>
  )
}

export default Blog