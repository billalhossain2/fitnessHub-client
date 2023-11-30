import Error from '../../../components/Error';
import SectionTitle from '../../../components/SectionTitle'
import Spinner from '../../../components/Spinner';
import useLoadData from '../../../hooks/useLoadData'
import FeaturedItem from './FeaturedItem'

const Featured = () => {
  
  const {loading, error, data:features} = useLoadData("features");

  if(error){
    console.log("Error========> ", error)
    return <Error error={error}></Error>
  }

  if(loading){
    return <Spinner></Spinner>
  }

  return (
    <>
    <SectionTitle title="Key Features"></SectionTitle>
    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5'>
      {
        features.map((feature) => <FeaturedItem key={feature._id} feature={feature}></FeaturedItem>)
      }
    </div>
    </>
  )
}

export default Featured
