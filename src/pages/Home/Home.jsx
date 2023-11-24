import useTitle from "../../hooks/useTitle"
import Banner from "./Banner/Banner"

const Home = () => {
  useTitle('FitnessHub | Home')
  return (
    <div>
      <Banner></Banner>
      <h3>Home Page</h3>
    </div>
  )
}

export default Home