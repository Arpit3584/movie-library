import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({data}) => {
  console.log(data)
  return (
    <div style={
      {
        background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),
        url(https://image.tmdb.org/t/p/original/${data?.backdrop_path||data?.profile_path})`,
        backgroundPosition:"center",
        backgroundrepeat:"no-repeat",
        backgroundSize:"cover"
      }
    }
    className='w-full h-[45vh] flex flex-col justify-end items-start p-[10%] m-2'>
    
<h1 className=' mt-3 w-[70%] text-4xl font-black text-white relative'>{data.name||data.original_name||data.original_title}</h1>
<p className='mt-5 w-[70%] text-white'>
  {data.overview.slice(0,200)}...<Link to ={`/${data.media_type}/details/${data.id}`}className='text-blue-400'>more</Link></p>
  <p className='mt-3 text-white font-black'>
    <i className='text-green-200 ri-megaphone-fill mr-1'></i>{data.release_date||"No Info"}  
    <i className='text-green-200 ri-album-fill ml-2'></i>{data.media_type.toUpperCase()}
  </p>
  <Link  className='bg-[#6556CD] p-3 rounded-md text-white font-semibold mt-2'>Watch Trailer</Link>
    </div>
  )
}

export default Header;
