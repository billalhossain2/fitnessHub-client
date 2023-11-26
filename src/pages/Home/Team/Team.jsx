import Error from "../../../components/Error";
import SectionTitle from "../../../components/SectionTitle"
import Spinner from "../../../components/Spinner";
import useLoadData from "../../../hooks/useLoadData";
import TeamItem from "./TeamItem"

const Team = () => {

  const {loading, error, data:team} = useLoadData("team");

  if(error){
    return <Error error={error}></Error>
  }

  if(loading){
    return <Spinner></Spinner>
  }

  return (
    <>
    <SectionTitle title="Our Team"></SectionTitle>

    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
       {
        team.map((team) => <TeamItem key={team._id} team={team}></TeamItem>)
       }
    </div>
    </>
  )
}

export default Team