import React from 'react'
import useTitle from '../../hooks/useTitle'
import GalleryItem from './GalleryItem'
import useLoadData from '../../hooks/useLoadData'
import Error from '../../components/Error'
import Spinner from '../../components/Spinner'


const Gallery = () => {
    useTitle('FitnessHub | Gallery')
   
  const {loading, error, data:gallery} = useLoadData("gallery");

  if(error){
    return <Error error={error}></Error>
  }

  if(loading){
    return <Spinner></Spinner>
  }

  return (
    <div>
        <div className='relative'>
            <img className='w-full h-[500px]' src="https://i.ibb.co/R9vqHPw/gallery.png" alt="Gallery" />
            <p className='absolute bg-black bg-opacity-70 top-0 background-opacity-50 w-full h-full text-white font-bold md:text-6xl text-4xl flex items-center justify-center'>Gallery</p>
        </div>

        {/* Gallery Container  */}
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 mt-10'>
          {
            gallery.map((item) =>  <GalleryItem key={item._id} item={item}></GalleryItem>)
          }
        </div>
    </div>
  )
}

export default Gallery