import {loadMovie} from "../reducers/movieSlice";
import axios from "../../utils/axios";

export {removeMovie} from "../reducers/movieSlice";

export const asyncLoadMovies=(id)=> async (dispatch,getState)=>
    {

        try{
       const detail= await axios.get(`/movie/${id}`);
       const externalId= await axios.get(`/movie/${id}/external_ids`);
       const recommendations= await axios.get(`/movie/${id}/recommendations`);
       const similar=await axios.get(`/movie/${id}/similar`);
       const videos=await axios.get(`/movie/${id}/videos`);
       const watchProviders=await axios.get(`/movie/${id}/watch/providers`);

     let allDetails={


        detail:detail.data,
        externalId:externalId.data,
        recommendations:recommendations.data.results,
        similar:similar.data.results,
        videos:videos.data.results.find((movie)=>movie.type==="Trailer"),
        watchProviders:watchProviders.data.results.IN,
    };
       
    dispatch(loadMovie(allDetails));
    console.log("all details for a item is ",allDetails);



        }
        catch(error){
        console.log("Error is ",error)    
        }
    }