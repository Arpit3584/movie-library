import React, { useState, useEffect  } from 'react'
import { Link } from 'react-router-dom'
import axios from "../../utils/axios";
import noImage from '/no_image.jpeg';
const TopNav = () => {
    const[query,setQuery]=useState("");
    const[searches,setSearches]=useState(null);

    const getSearches=async()=>{
        try{
          const {data}= await axios.get(`/search/multi?query=${query}`)
          setSearches(data.results);
        }
        catch(error)
        {
            console.log("Error: ",error);
        }
    }
    useEffect(()=>{
        getSearches();
    },[query])

  return (
<>
<div className='w-[50%] h-[10vh] relative flex m-auto items-center '>
<i className="text-zinc-400 text-3xl ri-search-line"></i>
<input className='w-[50%] mx-10 p-5 text-white last:text-xl outline-none border-none bg-transparent'
type="text" 
onChange={(e)=>setQuery(e.target.value)}
value={query}
placeholder='Search anything'/>
{query.length>0&&<i onClick={()=>setQuery("")} className=" absolute text-zinc-400 text-3xl right-0 ri-close-fill"></i>}

<div className='absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[80%] overflow-auto'>
{searches?.map((s,i)=>(<Link key={i} 
className='hover:text-black duration-300 m-2 
font-semibold w-[90%] p-10 flex justify-start text-zinc-600 items-center border-b-2 border-zinc-300'>
<img className='w-[10vh] h-[10vh] object-cover rounded mr-5'
src={s.backdrop_path||s.profile_path ?
`https://image.tmdb.org/t/p/w500/${s.backdrop_path||s.profile_path}`:noImage
}
 alt="not found"></img>
<span>{s.name||s.title||s.original_name||s.original_title}</span>
  </Link>))
  }

</div>
</div>
</>
  )
}

export default TopNav