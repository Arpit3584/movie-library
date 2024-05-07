import {loadtv} from "../reducers/tvSlice";
import axios from "../../utils/axios";

export {removetv} from "../reducers/tvSlice";

export const asyncLoadTvShows=(id)=> async (dispatch,getState)=>
    {

        try{
       const detail= await axios.get(`/tv/${id}`);
       const externalId= await axios.get(`/tv/${id}/external_ids`);
       const recommendations= await axios.get(`/tv/${id}/recommendations`);
       const similar=await axios.get(`/tv/${id}/similar`);
       const videos=await axios.get(`/tv/${id}/videos`);
       const watchProviders=await axios.get(`/tv/${id}/watch/providers`);

     let allDetails={


        detail:detail.data,
        externalId:externalId.data,
        recommendations:recommendations.data.results,
        similar:similar.data.results,
        videos:videos.data.results.find((tv)=>tv.type==="Trailer"),
        watchProviders:watchProviders.data.results.IN,
    };
       
    dispatch(loadtv(allDetails));
    console.log("all details for a tv item is ",allDetails);



        }
        catch(error){
        console.log("Error is ",error)    
        }
    }