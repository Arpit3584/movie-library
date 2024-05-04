import React from 'react'
import {useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react';
import TopNav from '../template/TopNav';
import Dropdown from './Dropdown';
import  axios from "../../utils/axios";
import Cards from './Cards';
import Loading from '../Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
const Popular = () => {
  
    document.title="Pouplar";
    const navigate=useNavigate();
    const [category,setCategory]=useState("movie");
    const[popular,setPopular]=useState([]);
    const[page,setPage]=useState(1);
    const[hasMore,setHas]=useState(true);
    
    const GetPopularMovies=async ()=>
    {
        try{
            const {data}= await axios.get(`${category}/popular?page=${page}`)
           if(data.results.length>0)
           {
            setPopular((prevState)=>[...prevState,...data.results]);
            setPage(page+1)
           }
           else
           {
            setHas(false);
           }
           
           console.log("results fetched for popular movies are ",data.results);
        }
         
          catch(error)
          {
              console.log("Error: ",error);
          }
      }

    const refreshHandler=async()=>
    {
        if(popular?.length===0)
        GetPopularMovies();
        else
        {   setPage(1);
            setPopular([]);
            GetPopularMovies();
        }
    }

    useEffect(()=>{
      
   refreshHandler();
    },[category])

  return popular.length>0? (
    <div className=' w-screen h-screen'>

        <div className='px-[5%] w-full flex items-center justify-between'> 
       
        <h1 className='w-[20%] text-2xl text-zinc-400' > 
        <i  onClick={()=>navigate(-1)}className='ri-arrow-left-line hover:text-[#6556CD]'></i>
        Popular</h1>
        <div className='flex item-center w-[80%]'>

        <TopNav/>
        <Dropdown title="Category" options={["movie","tv"]} func={(e)=>setCategory(e.target.value)}/>
        </div>
        </div>
      
      <InfiniteScroll dataLength={popular.length}
      next={GetPopularMovies}
      hasMore={hasMore}
      loader={<h1>Loading....</h1>}>
      <Cards data={popular} title={category}/>
      </InfiniteScroll>
       

    </div>
  ):<Loading/>
}


export default Popular;