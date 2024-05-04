import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


const SideNav = () => {


  return (
    <div className='w-[20%] h-full border-r-2 border-zinc-400 p-3'>
        <h1 className="text-2xl text-white font-bold">
            <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
            <span className='text-xl'>MovieLib</span>
        </h1>
        <nav className='flex flex-col text-zinc-400 text-sm'>
            <h1 className='text-white font-semibold text-xl mt-10 mb-5'> New Feeds</h1>
            <Link to ="/trending"
             className='hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg p-5'>
            <i className="mr-1 ri-fire-fill"></i>Trending</Link>
            <Link to="/popular"
            className='hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg p-5'>
            <i className="mr-2 ri-bard-fill"></i>Popular</Link>
            <Link to="/movies"
            className='hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg p-5'>
            <i className="mr-2 ri-film-fill"></i>Movies</Link>
            <Link to="/tv_shows"
            className='hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg p-5'>
            <i className="mr-2 ri-tv-2-line"></i>Tv Shows</Link>
            <Link to='/people'
            className='hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg p-5'>
            <i className="mr-2 ri-team-fill"></i>People</Link>
        </nav>
        <hr className='mt-5 border-none h-[1px] bg-zinc-400'></hr>
        <nav className='flex flex-col text-zinc-400 text-xl'>
            <h5 className='text-white font-semibold text-sm mt-10 mb-5'>
                INFO
            </h5>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg p-5 text-sm'>
            <i className="mr-2 ri-information-fill"></i>About</Link>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg p-5 text-sm'>
            <i className="mr-2 ri-phone-fill"></i>Contact Us</Link>
            </nav>
    </div>
  )
}

export default SideNav