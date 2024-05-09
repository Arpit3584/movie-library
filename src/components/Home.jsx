import React ,{useState,useEffect} from 'react'
import SideNav from './template/SideNav';
import TopNav from './template/TopNav';
import Header from './template/Header1';
import axios from "../utils/axios";
import HorizontalCards from './template/HorizontalCards';
import Dropdown from './partials/Dropdown';
import Loading from './Loading';


const Home = () => {
    document.title="MovieLib|HomePage";
    const[wallPaper,setWallPaper]=useState(null);
    const[TrendingMovies,setTrending]=useState(null);
    const[category,setCategory]=useState("all");

    const GetHeaderWallpaper=async ()=>
    {
        try{
            const {data}= await axios.get(`/trending/all/day`)
           
            let randomData=data.results[Math.floor(Math.random()*data.results.length)];
            setWallPaper(randomData);
           
          }
          catch(error)
          {
              console.log("Error: ",error);
          }
      }

      const GetTrendingMovies=async ()=>
      {
          try{
              const {data}= await axios.get(`/trending/${category}/day`)
             setTrending(data.results);}
            catch(error)
            {
                console.log("Error: ",error);
            }
        }

      useEffect(()=>{
          !wallPaper && GetHeaderWallpaper();
     GetTrendingMovies();
      },[category])
  return (wallPaper && TrendingMovies)? (
    <>
    <SideNav/>
    <div className='w-[80%] h-full overflow-auto overflow-x-hidden'>
    <TopNav/>
    <div className='mt-3'>
    <Header data={wallPaper}/>
    </div>
    <div className='flex justify-between p-10'>
    <h1 className='text-3xl font-semibold text-zinc-400'>
        Trending
    </h1>
    <Dropdown title="FILTER" options={['tv','movie','All']} func={(e)=> setCategory(e.target.value)}/>
    </div>
    <HorizontalCards data={TrendingMovies} func={setCategory}/>
    </div>

    </>
  ):<Loading/>

  }
export default Home;