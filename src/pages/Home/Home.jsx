import useTitle from "../../hooks/useTitle"
import About from "./About/About"
import Banner from "./Banner/Banner"
import Blog from "./Blog/Blog"
import Featured from "./Featured/Featured"
import NewsLetter from "./NewsLetter/NewsLetter"
import Team from "./Team/Team"
import Testimonial from "./Testimonial/Testimonial"

const Home = () => {
  useTitle('FitnessHub | Home')
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <About></About>
      <Team></Team>
      <Blog></Blog>
      <NewsLetter></NewsLetter>
      <Testimonial></Testimonial>
    </div>
  )
}

export default Home