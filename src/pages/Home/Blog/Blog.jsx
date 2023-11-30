import Error from "../../../components/Error";
import SectionTitle from "../../../components/SectionTitle"
import Spinner from "../../../components/Spinner";
import useLoadData from "../../../hooks/useLoadData";
import BlogItem from "./BlogItem"
  

const Blog = () => {

  const {loading, error, data:blogs} = useLoadData("blogs");

  if(error){
    return <Error error={error}></Error>
  }

  if(loading){
    return <Spinner></Spinner>
  }

  return (
    <>
    <SectionTitle title="Recent Articles"></SectionTitle>

    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
        {
            blogs.map((blog) => <BlogItem key={blog._id} blog={blog}></BlogItem>)
        }
    </div>
    </>
  )
}

export default Blog