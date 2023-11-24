import React from 'react'
import useTitle from '../../hooks/useTitle'
import GalleryItem from './GalleryItem'

const Gallery = () => {
    useTitle('FitnessHub | Gallery')
  return (
    <div>
        <div className='relative'>
            <img className='w-full h-96' src="https://i.ibb.co/RpjysL8/galler-cover.jpg" alt="Gallery" />
            <p className='absolute bg-black bg-opacity-80 top-0 background-opacity-50 w-full h-full text-white font-bold text-4xl flex items-center justify-center'>Gallery</p>
        </div>

        {/* Gallery Container  */}
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 mt-10'>
          <GalleryItem></GalleryItem>
          <GalleryItem></GalleryItem>
          <GalleryItem></GalleryItem>
          <GalleryItem></GalleryItem>
          <GalleryItem></GalleryItem>
          <GalleryItem></GalleryItem>
          <GalleryItem></GalleryItem>
          <GalleryItem></GalleryItem>
          <GalleryItem></GalleryItem>
          <GalleryItem></GalleryItem>
          <GalleryItem></GalleryItem>
          <GalleryItem></GalleryItem>
        </div>
    </div>
  )
}

export default Gallery