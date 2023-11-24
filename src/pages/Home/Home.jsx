import useTitle from "../../hooks/useTitle"
import Banner from "./Banner/Banner"
import Blog from "./Blog/Blog"
import Featured from "./Featured/Featured"
import Team from "./Team/Team"

const Home = () => {
  useTitle('FitnessHub | Home')
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <Team></Team>
      <Blog></Blog>
      <h3>Home Page</h3>
    </div>
  )
}

export default Home