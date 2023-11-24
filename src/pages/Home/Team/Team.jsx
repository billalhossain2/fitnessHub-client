import SectionTitle from "../../../components/SectionTitle"
import TeamItem from "./TeamItem"

const teamData = [
  {
    "name": "Alexandra Davis",
    "role": "Fitness Trainer",
    "experience": "8 years",
    "description": "Certified personal trainer with a passion for helping clients achieve their fitness goals. Specializes in strength training and HIIT workouts.",
    "image": "https://i.ibb.co/xjkx8ZX/fitness-trainer.jpg"
  },
  {
    "name": "Michael Rodriguez",
    "role": "Yoga Instructor",
    "experience": "10 years",
    "description": "Experienced yoga instructor dedicated to promoting physical and mental well-being. Expertise in Vinyasa and mindfulness practices.",
    "image": "https://i.ibb.co/JndpMjL/yoga-instructor.jpg"
  },
  {
    "name": "Emily Carter",
    "role": "Nutritionist",
    "experience": "6 years",
    "description": "Registered dietitian passionate about helping individuals adopt healthy eating habits. Provides personalized nutrition plans for optimal well-being.",
    "image": "https://i.ibb.co/3Wp9HpH/nutritionist.jpg"
  },
  {
    "name": "Daniel Johnson",
    "role": "Wellness Coach",
    "experience": "12 years",
    "description": "Wellness coach focused on guiding individuals towards a balanced and fulfilling life. Specializes in stress management and overall wellness.",
    "image": "https://i.ibb.co/7Jv70sd/wellness-couch.jpg"
  }
]




const Team = () => {
  return (
    <>
    <SectionTitle title="Our Team"></SectionTitle>

    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
       {
        teamData.map((team, index) => <TeamItem key={index} team={team}></TeamItem>)
       }
    </div>
    </>
  )
}

export default Team