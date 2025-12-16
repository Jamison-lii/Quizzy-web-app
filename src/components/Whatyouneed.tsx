import React from 'react'
import NeedCard from './NeedCard'

const Whatyouneed = () => {
  return (
    <div data-aos="fade-up" className=' flex flex-col m-16 p-16 rounded-xl justify-center bg-[#9396FF] items-center'>
    <div className='flex flex-col justify-center items-center text-center'>
      <h1 className='text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-6 font-poppins'>
      Everything You Need to Succeed
      </h1>
      <h1  className= ' flex text-md max-w-2xl text-center '>Our app is packed with many features designed to make learning effective, personalised and fun</h1>
    </div>

     <div className='pt-16 flex gap-14'>
      <NeedCard/>
      <NeedCard/>
      <NeedCard/>
    </div>

    </div>
  )
}

export default Whatyouneed 