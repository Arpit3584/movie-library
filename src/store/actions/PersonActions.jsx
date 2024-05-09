import {loadPerson} from "../reducers/personSlice";
import axios from "../../utils/axios";

export {removePerson} from "../reducers/personSlice";

export const asyncLoadPerson=(id)=> async (dispatch,getState)=>
    {

        try{
       const detail= await axios.get(`/person/${id}`);
       const externalId= await axios.get(`/person/${id}/external_ids`);
       const combinedCredits= await axios.get(`/person/${id}/combined_credits`);
       const tvCredits=await axios.get(`/person/${id}/tv_credits`);
       const movieCredits=await axios.get(`/person/${id}/movie_credits`);
          
     let allDetails={
        detail:detail.data,
        externalId:externalId.data,
        combinedCredits:combinedCredits,
        tvCredits:tvCredits,
        movieCredits:movieCredits,
    };
       
    dispatch(loadPerson(allDetails));
    console.log("all details for a item is ",allDetails);



        }
        catch(error){
        console.log("Error is ",error)    
        }
    }