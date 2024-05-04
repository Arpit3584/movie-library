import React from 'react'
import {Route,Routes} from "react-router-dom";
import Home from './components/Home';
import Trending from './components/partials/Trending';
import Popular from './components/partials/Popular';
import Movie from './components/partials/Movie';
import Tvshows from './components/partials/Tvshows';
import People from './components/partials/People';



 const App = () => {
  return (
    <div className='bg-[#1f1e24] w-screen h-screen flex'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/trending" element={<Trending/>}/>
        <Route path='/popular'  element={<Popular/>}/>
        <Route path='/movies'  element={<Movie/>}/>
        <Route path='/tv_shows'  element={<Tvshows/>}/>
        <Route path='/people'  element={<People/>}/>
      </Routes>
    </div>
  )
}
export default App;
