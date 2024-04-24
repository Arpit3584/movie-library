import React ,{useState,useEffect} from 'react'
import SideNav from './template/SideNav';
import TopNav from './template/TopNav';
import Header from './template/Header1';
import axios from "../utils/axios";
import HorizontalCards from './template/HorizontalCards';


const Home = () => {
    document.title="MovieLib|HomePage";
    const[wallPaper,setWallPaper]=useState(null);
    cost[GetTrendingMovies,setTrending]

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
              const {data}= await axios.get(`/trending/all/day`)
             
              let randomData=data.results[Math.floor(Math.random()*data.results.length)];
              setWallPaper(randomData);
             
            }
            catch(error)
            {
                console.log("Error: ",error);
            }
        }

      useEffect(()=>{
          !wallPaper && GetHeaderWallpaper()
      },[])
    
  return wallPaper? (
    <>
    <SideNav/>
    <div className='w-[80%] h-full overflow-auto overflow-x-hidden'>
    <TopNav/>
    <Header data={wallPaper}/>
    <HorizontalCards/>
    </div>

    </>
  ):<h1>..loading</h1>

  }
export default Home;