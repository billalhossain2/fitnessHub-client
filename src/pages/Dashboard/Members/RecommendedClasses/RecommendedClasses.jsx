import React from 'react'
import useTitle from '../../../../hooks/useTitle'
import useLoadData from '../../../../hooks/useLoadData'
import ClassCard from './ClassCard'
import Spinner from '../../../../components/Spinner'

const RecommendedClasses = () => {
  useTitle("FitnessHub | Recommended Classes")
  const {loading, error, data:classes} = useLoadData("classes");
  
  return (
    <div>
      <h3 className="font-bold md:text-3xl text-3xl mt-10 mb-5 ml-3">Recommended Classes</h3>
      {
        loading ? <Spinner></Spinner> : <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-3">
        {
         classes?.slice(4).map((classItem)=> <ClassCard key={classItem._id} classItem={classItem}></ClassCard>)
        }
     </div>
      }
    </div>
  )
}

export default RecommendedClasses