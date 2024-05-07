import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { asyncLoadMovies, removeMovie } from '../../store/actions/movieActions';
import { useNavigate, useParams,Link, useLocation } from 'react-router-dom';
import Loading from '../Loading';
import HorizontalCards from '../template/HorizontalCards';
import { Outlet } from 'react-router-dom';
const movieDetails = () => {
const navigate=useNavigate();
  const {id}=useParams();
  const {pathname}=useLocation();
const dispatch=useDispatch();
const {info}=useSelector((state)=>state.movie)
console.log(info);
console.log("watchProvider data is ",info?.watchProviders?.buy);
  useEffect(
   ()=> {
        dispatch(asyncLoadMovies(id));
        return ()=>{
          dispatch(removeMovie());
        }
    },[id])
  return info?(
    <div style={
      {
        background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),
        url(https://image.tmdb.org/t/p/original/${info.detail?.backdrop_path})`,
        backgroundPosition:"center",
        backgroundrepeat:"no-repeat",
        backgroundSize:"cover",
        position:'relative'
      }
    }
    className=' w-screen h-[120vh] px-[10%] overflow-y-auto'>  
  
      <nav className='w-full h-[10vh] items-center text-zinc-100 flex gap-10 text-xl'>
        <Link onClick={()=>navigate(-1)} 
        className='hover:text-[#6556cd] ri-arrow-left-line'>
          </Link>
          <a target ='_blank' href={`${info.detail.homepage}`}>
            <i className='ri-external-link-fill'></i>
            </a>
            <a target='_blank'href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}>
              <i className='ri-earth-fill'></i>
            </a>
            <a className='text-white' href={`https://www.imdb.com/title/${info.externalId?.imdb_id}/`}>imdb</a>
      </nav>
      
<div className='w-full flex'>
<img className='w-[40vh] h-[40vh]
shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]  object-cover'
        src={`https://image.tmdb.org/t/p/original/${info.detail.backdrop_path||info.detail.poster_path}`} alt=''/>
<div className='content ml-20'>
<h1 className='text-zinc-100  text-5xl'>
  {
    info.detail.name||info.detail.title||info.detail.original_name||info.detail.original_title
  }
  <small className='text-2xl font-bold text-zinc-200 pl-3'>
    
      ({info.detail.release_date.split("-")[0]})
    
  </small>
</h1>

<div className='flex text-white items-center gap-x-5 mt-3'>
{info.detail.vote_average&&(
        <span className=' absoulte right-[-10%] bottom-[25%] text-white rounded-full bg-yellow-600
         w-[5vh] h-[5vh] flex justify-center items-center'>
            {(info.detail.vote_average*10).toFixed()}<sup>%</sup>
            </span>)}
<h1 className='font-semibold text-2xl leading-6'>User Score</h1>
<h1>{info.detail.release_date}</h1>
<h1>{info.detail.genres.map((e)=>e.name).join(',')}</h1>

</div>

<h1 className=' mt-2 text-xl font-semibold italic text-zinc-200'>{info.detail.tagline}</h1>


<h1 className=' mt-5 text-3xl font-semibold italic text-zinc-200'>Overview</h1>
<p className='text-white mt-1 mb-10'>{info.detail.overview}</p>


<Link className='p-5 bg-[#6556Cd] rounded-lg '
to={`${pathname}/trailer`}>
<i className='text-xl ri-play-fill'></i>
Play Trailer
</Link>

</div>


</div>

{/* recommendations*/}

  <hr className='mt-10 mb-5 border-none h-[1px] bg-zinc-200'></hr>
  <h1 className='text-2xl font-semibold text-white m-2'> Recommendations</h1>
<HorizontalCards data={info.recommendations.length>0? info.recommendations:info.similar}/>
    </div>
    
  ):<Loading/>
}

export default movieDetails