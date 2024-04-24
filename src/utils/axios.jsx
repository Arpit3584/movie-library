import axios from "axios";

const instance=axios.create(
    {
        baseURL:"https://api.themoviedb.org/3",
         headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTVjM2RkZDFmODVkN2Q2YTExOWI1OGNlNjdlNWMzZCIsInN1YiI6IjYwOGJiYTA2ZjhhZWU4MDA1NzhlMTI4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.89IqUxTjruqJG9vM2AtEOAw4sBM-uQxeGF9HzIJLbIA'
              },
        
    }
);
export default instance;