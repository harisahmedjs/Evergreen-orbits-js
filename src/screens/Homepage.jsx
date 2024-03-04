import React from 'react'
import Air from "../assets/air.png"
import Loved from "../assets/loved.png"
import Reforestation from "../assets/reforestation.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket, faFilePen, faSeedling } from '@fortawesome/free-solid-svg-icons'

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
        <header className='text-center mt-[10px]'>How Does EvergreenObits Work</header>
        <div className='flex  items-center  justify-around  p-10'>

          <div className='w-[40%]'>
            <div className='text-center'>
              <FontAwesomeIcon icon={faFilePen} className='bg-[#F4F1EB] p-3 rounded-full text-[#378752] text-[20px]  cursor-pointer ' />
            </div>
            <p className='text-center'>Publish</p>
            <div className='text-center'>
              <p className=''>Create an obituary page with you loved one’s story and a treasured photo</p>
            </div>
          </div>




          <div className='w-[40%]'>
            <div className='text-center'>
              <FontAwesomeIcon icon={faSeedling} className='bg-[#F4F1EB] p-3  rounded-full text-[#378752] text-[20px]  cursor-pointer' />
            </div>
            <p className='text-center'>Plant</p>
            <p className='text-center'>Plant memorial trees in their honor and receive a certificate from our internationally recognized reforestation partners</p>
          </div>



          <div className='w-[40%]'>
            <div className='text-center'>
              <FontAwesomeIcon icon={faArrowUpFromBracket} className='bg-[#F4F1EB] p-3  rounded-full text-[#378752] text-[20px]  cursor-pointer' />
            </div>
            <p className='text-center'>Share</p>
            <p className='text-center'>Share the obituary page, inviting others to post messages, photos, and plant additional memorial trees</p>
          </div>
        </div>

        <div className='flex items-center justify-center mt-0'>
          <button className=' mt-4 font-[500] bg-[#378752] px-2 py-2 rounded-[50px] hover:bg-[#394A4D] text-white'>Create Obituary</button>
        </div>


      </div>



    </>
  )
}

export default Homepage