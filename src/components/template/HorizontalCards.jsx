import React from 'react'
import { Link } from 'react-router-dom'

import noImage from '../../../public/no_image.jpeg';


const HorizontalCards = ({ data }) => {



  return (
    
    <div
     className='w-[100%]  flex overflow-y-hidden mb-5' >
       {
        data?.length>0?data?.map((d,i)=>(
          <Link to={`/${d.media_type}/details/${d.id}`}
           key={i} className='min-w-[15%] mr-5 p-5'>
            <img className='w-full h-[40%] object-cover'
            src={d.backdrop_path||d.profile_path?`https://image.tmdb.org/t/p/original/${d.backdrop_path||d.profile_path}`:noImage}/>
            <div className=' text-white h-[30vh]'>
            <h1 className='mt-1 text-xl font-semibold'>
          {
            d.title||d.name||d.original_name||d.original_title}
            </h1>
            
            <p className='w-[70%] mt-3 mb-3'>
              {
                d.overview.slice(0,50)}...
                <span className='text-blue-400'>more</span>
              
              </p>
            </div>
             
            
          
        </Link>)):<h1 className='text-white'>Nothing to recommend</h1>
        }
       
    </div>
    
    

  )
}

export default HorizontalCards