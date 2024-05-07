import React from 'react'
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { asyncLoadMovies, removeMovie } from '../../store/actions/movieActions';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NotFound from './NotFound';
import { asyncLoadTvShows,removetv } from '../../store/actions/tvActions';
const Trailer = () => {
const navigate=useNavigate();
const{pathname}=useLocation();
const dispatch=useDispatch();
const category=pathname.includes("movie")? "movie":"tv";
const ytVideo=   useSelector((state)=>state[category]?.info?.videos);
const {id}=useParams();
console.log("ytVideo is", ytVideo);

useEffect(
    ()=> {
        console.log("useEffectcalled");
        if(category==='movie')
        {dispatch(asyncLoadMovies(id));}
        else
        {
            dispatch(asyncLoadTvShows(id));
        }
         return ()=>{
            if(category==='movie')
          { dispatch(removeMovie());}
        else
        {dispatch(removetv());}
         }
     },[id])
  return  (ytVideo&&ytVideo.key)?(
    <div className=' bg-[rgba(0,0,0,.9)] z-[100] w-screen h-screen flex items-center justify-center'>
        
<Link onClick={()=>navigate(-1)}
className='absolute hover:text-[#6556cd] ri-close-fill text-3xl text-white right-[5%] top-[5%]'
></Link>

  <ReactPlayer height={700}
  width={1500}
  url={`https://www.youtube.com/watch?v=${ytVideo?.key}`}/>      
        
  </div>
  ):<NotFound/>
}

export default Trailer