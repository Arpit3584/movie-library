import React, { useEffect ,useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { asyncLoadPerson,removePerson } from '../../store/actions/PersonActions';
import { useNavigate, useParams,Link, useLocation } from 'react-router-dom';
import Loading from '../Loading';
import HorizontalCards from '../template/HorizontalCards';
import Dropdown from '../partials/Dropdown';
const PersonDetails = () => {
const navigate=useNavigate();
  const {id}=useParams();
  const {pathname}=useLocation();
const dispatch=useDispatch();
const {info}=useSelector((state)=>state.person)
const[category,setCategory]=useState("movie");
console.log(info);
  useEffect(
   ()=> {
        dispatch(asyncLoadPerson(id));
        return ()=>{
          dispatch(removePerson());
        }
    },[id])
  return info?(
    <div className=' pl-[15%] w-screen h-[200vh] bg-[#1f1e24] overflow-auto'>
      <div>
      <nav className='h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl'>
     <Link onClick={()=>navigate(-1)}
     className='hover:text-[#6556CD] ri-arrow-left-line'
     ></Link>
     </nav>
     </div>
<div className='w-full flex'>
<div className='flex flex-col' >
  <div className='w-[90%] '>
<img className='shadow -[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[50vh] w-[40vh] object-cover'
src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`} alt='profile_image'
/>
<hr className='mt-10 mb-5 border-none h-[2px] bg-zinc-500'/>
</div>

{/* links*/}
<div className='text-2xl w-[40%] text-white flex gap-x-5'>

<a target='_blank'
href={`https://www.wikidata.org/wiki/${info?.externalId?.wikidata_id}`}>
  <i className='ri-earth-fill'></i>
</a>

<a target='_blank' href={`https://www.facebook.com/${info.externalId.facebook_id}`}>
  <i className='ri-facebook-circle-fill'></i>
</a>

<a target='_blank'
href={`https://www.instagram.com/title/${info?.externalId?.instagram_id}/`}
>
<i className='ri-instagram-fill'></i>
  </a>

  <a target='_blank'
href={`https://www.twitter.com/title/${info?.externalId?.twitter_id}/`}
>
<i className='ri-twitter-x-fill'></i>
  </a>

  </div>


{/*personal infomations*/}
<div className='w-[50%]'>
<h1 className='text-2xl text-zinc-400 font-semibold mt-5'>
  Person Info
</h1>

<h1 className='text-lg text-zinc-400 font-semibold mt-5'>
  Known For
</h1>
<h1 className='text-lg text-zinc-400'>
  {info.detail.known_for_department}
</h1>

<h1 className='text-lg text-zinc-400 font-semibold mt-5'>
  Gender
</h1>
<h1 className='text-zinc-400'>
  {info.detail.gender==2?'Male':'Female'}
</h1>
<h1 className='text-lg text-zinc-400 font-semibold mt-5'>
 Birthday
</h1>
<h1 className='text-zinc-400'>
  {info.detail.birthday}
</h1>

<h1 className='text-lg text-zinc-400 font-semibold mt-5'>
Place of Birth
</h1>
<h1 className='text-zinc-400'>
  {info.detail.place_of_birth}
</h1>

</div>
</div>

{/* right details and information*/}
<div className='w-[80%]'>
<h1 className='text-6xl text-zinc-400 font-semibold my-5'>
  {info.detail.name}
</h1>

<h1 className='text-xl text-zinc-400 font-semibold my-3'>
Biography
</h1>
<p className='text-zinc-300 '>{info.detail.biography}</p>
<h1 className='text-xl text-zinc-400 font-semibold my-3'>
  Known For
</h1>
<HorizontalCards data={info.combinedCredits.data?.cast}/>




</div>


</div>
      </div>):<Loading/>
}

export default PersonDetails;