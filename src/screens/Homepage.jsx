import React from 'react'
import Air from "../assets/air.png"
import Loved from "../assets/loved.png"
import Reforestation from "../assets/reforestation.png"

const Homepage = () => {
  return (
    <>
      <div className='flex items-center justify-center flex-col leading-[2.5]'>
        <p className='font-extrabold font-mono text-[30px]'>Plant Trees with Every Obituary</p>
        <div className='flex justify-center text-justify'>
          <p className='w-[70.5%] leading-none text-center text-[15px]' >Beautiful, sustainable, shareable obituaries that support forests in need, starting at $30</p>
        </div>
        <button className=' mt-4 font-[500] bg-[#378752] px-[10px] rounded-[50px] hover:bg-[#394A4D] text-white'>Create Obituary</button>
      </div>



      <div className='flex items-center justify-center gap-[30px] mt-[50px]'>
        <img src={Air} alt="air" className='w-[15%]' />
        <img src={Loved} alt="air" className='w-[31%]' />
        <img src={Reforestation} alt="air" className='w-[15%]' />
      </div>


      <div>
        <header>How Does EvergreenObits Work</header>
        <div className='card-main'>

        </div>
      </div>



    </>
  )
}

export default Homepage