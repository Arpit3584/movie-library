import React from 'react'


const HorizontalCards = ({ data }) => {



  return (
    
    <div className='w-[100%]  flex overflow-y-hidden mb-5' >
       {
        data?.map((d,i)=>(
          <div key={i} className='min-w-[15%] mr-5 p-5'>
            <img className='w-full h-[40%] object-cover'
            src={`https://image.tmdb.org/t/p/original/${d.backdrop_path||d.profile_path}`}/>
            <div className=' text-white h-[30vh]'>
            <h1 className='mt-1 text-xl font-semibold'>
          {
            d.title||d.name||d.original_name||d.original_title}
            </h1>
            
            <p className='w-[70%] mt-3 mb-3'>
              {
                d.overview.slice(0,50)}...
                <span className='text-blue-400'>more</span>
              
              </p>
            </div>
             
            
          
        </div>))}
       
    </div>
    
    

  )
}

export default HorizontalCards