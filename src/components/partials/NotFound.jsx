import React from 'react'
import notFound from '../../../public/404.png'

const NotFound = () => {
    return (
        <>
        <div className='w-screen h-screen flex justify-center item-center bg-black'></div>
        <img  className='w-[50%]'src={notFound} alt="screen loading"></img>
        </>)
}

export default NotFound;