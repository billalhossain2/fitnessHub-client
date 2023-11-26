import React from "react";
import useTitle from "../../hooks/useTitle";
import TimeTable from "./TimeTable";
import ClassCard from "./ClassCard";
import useLoadData from "../../hooks/useLoadData";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";

const Classes = () => {
  useTitle("FitnessHub | Classes");
  
  const {loading, error, data:classes} = useLoadData("classes");

  if(error){
    return <Error error={error}></Error>
  }

  if(loading){
    return <Spinner></Spinner>
  }

  return (
    <div>
      <h3 className="font-bold md:text-5xl text-3xl mt-10 mb-5">All Classes</h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
         {
          classes.map((classItem)=> <ClassCard key={classItem._id} classItem={classItem}></ClassCard>)
         }
      </div>

{/* Weekly Activities  */}
      <h3 className="border-[1px] border-gray-500 rounded-full p-3 w-40 text-center mt-32 mb-10">
        TIMETABLE
      </h3>
      <div className="h-[1px] bg-gray-500 my-10"></div>
      <h3 className="md:text-5xl text-3xl font-medium my-8">
        Weekly Schedule Events
      </h3>
      <TimeTable></TimeTable>
    </div>
  );
};

export default Classes;
