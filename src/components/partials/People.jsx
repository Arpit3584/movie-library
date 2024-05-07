import React from 'react';
import {useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react';
import TopNav from '../template/TopNav';
import Dropdown from './Dropdown';
import  axios from "../../utils/axios";
import Cards from './Cards';
import Loading from '../Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

const People = () => {
    document.title="PERSONS";
    const navigate=useNavigate();
    const [category,setCategory]=useState("popular");
    const[trending,setTrending]=useState([]);
    const[page,setPage]=useState(1);
    const[hasMore,setHas]=useState(true);

    const GetTrendingMovies=async ()=>
    {
        try{
            const {data}= await axios.get(`/person/${category.toLowerCase()}?page=${page}`)
           if(data.results.length>0)
           {
            setTrending((prevState)=>[...prevState,...data.results]);
            setPage(page+1)
           }
           else
           {
            setHas(false);
           }
           
           console.log("results fetched for trending movies are ",data.results);
        }
         
          catch(error)
          {
              console.log("Error: ",error);
          }
      }

    const refreshHandler=async()=>
    {
        if(trending.length===0)
        GetTrendingMovies();
        else
        {   setPage(1);
            setTrending([]);
            GetTrendingMovies();
        }
    }

    useEffect(()=>{
      
   refreshHandler();
    },[category])

  return trending.length>0? (
    <div className=' w-screen h-screen'>

        <div className='px-[5%] w-full flex items-center justify-between'> 
       
        <h1 className='w-[20%] text-2xl text-zinc-400' > 
        <i  onClick={()=>navigate(-1)}className='ri-arrow-left-line hover:text-[#6556CD]'></i>
        Persons</h1>
        <div className='flex item-center w-[80%]'>

        <TopNav/>
        </div>
        </div>
      
      <InfiniteScroll dataLength={trending.length}
      next={GetTrendingMovies}
      hasMore={hasMore}
      loader={<h1>Loading....</h1>}>
      <Cards data={trending} title="person"/>
      </InfiniteScroll>
       

    </div>
  ):<Loading/>
}

export default People