import SectionTitle from '../../../components/SectionTitle'
import FeaturedItem from './FeaturedItem'
const featuredData = [
  {
    "title": "High-Intensity Workouts",
    "description": "Explore our intense workout routines designed for maximum calorie burn and muscle sculpting.",
    "image": "https://i.ibb.co/WP92pkB/high-intensive.png"
  },
  {
    "title": "Mindful Yoga Sessions",
    "description": "Immerse yourself in serene yoga practices that enhance both physical strength and mental well-being.",
    "image": "https://i.ibb.co/4tJtxJY/mindful-yoga.png"
  },
  {
    "title": "Protein-Packed Recipes",
    "description": "Discover delicious recipes packed with protein to fuel your workouts and aid muscle recovery.",
    "image": "https://i.ibb.co/mJwtZb2/protein-packed.png"
  },
  {
    "title": "Virtual Fitness Challenges",
    "description": "Join our community in exciting virtual challenges that boost motivation and foster friendly competition.",
    "image": "https://i.ibb.co/Jkst75b/virtual-fitness.png"
  },
  {
    "title": "Expert Nutrition Tips",
    "description": "Get insights from nutrition experts on optimizing your diet to support your fitness goals and overall health.",
    "image": "https://i.ibb.co/gVbjWQG/nutrition-tips.png"
  },
  {
    "title": "Wellness Webinars",
    "description": "Participate in live webinars featuring health and wellness experts sharing valuable insights and tips.",
    "image": "https://i.ibb.co/zGBfxG6/wellness.png"
  }
]

const Featured = () => {
  return (
    <>
    <SectionTitle title="Key Features"></SectionTitle>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
      {
        featuredData.map((feature, index) => <FeaturedItem key={index} feature={feature}></FeaturedItem>)
      }
    </div>
    </>
  )
}

export default Featured
