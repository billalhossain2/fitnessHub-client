import useTitle from "../../hooks/useTitle"
import Banner from "./Banner/Banner"
import Featured from "./Featured/Featured"

const Home = () => {
  useTitle('FitnessHub | Home')
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <h3>Home Page</h3>
    </div>
  )
}

export default Home