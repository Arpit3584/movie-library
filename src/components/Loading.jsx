import React from 'react';
import second from "/loading.gif";

const Loading = () => {
  return (
    <>
    <div className='w-screen h-screen flex justify-center item-center bg-black'></div>
    <img  className='w-[50%]'src={second} alt="screen loading"></img>
    </>
  )
}

export default Loading;