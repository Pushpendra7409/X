import React from 'react'
import Image from 'next/image';
import { TbMessageCircle } from "react-icons/tb";
import { AiOutlineRetweet } from "react-icons/ai";
import { PiHeartBold } from "react-icons/pi";
import { BiBarChart } from "react-icons/bi";
import { CiBookmark } from "react-icons/ci";
import { RiShare2Line } from "react-icons/ri";


const Feedcard: React.FC =  () => {
  return (
    <div className='border border-r-0 border-l-0 border-b-0 p-5 border-gray-600 hover:bg-slate-900 transition-all cursor-pointer'>
        <div className='grid grid-cols-12 gap-3'>
           <div className='col-span-1'>
            <Image src="https://lh3.googleusercontent.com/a/ACg8ocI81CYGKk6hAu1NbFABRtQz6IDVVWPY2k2N3mMPc7tr86IJhkDj=s432-c-no" alt="user-image" height={50} width={50} className='rounded-full'></Image>
           </div>
           <div className='col-span-11'>
            <h5>Pushpendra Singh</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi suscipit modi asperiores ex ratione voluptas quisquam dolor officia, nulla ad voluptatibus quod in sed ullam necessitatibus sequi cumque, hic perspiciatis!</p>
            <div className='flex justify-between mt-5 text-xl items-center p-2 w-[90%]'>
              <div>
                < TbMessageCircle />
              </div>
              <div>
                <AiOutlineRetweet />
              </div>
              <div>
                <PiHeartBold />
              </div>
              <div>
                <BiBarChart/>
              </div>
              <div>
                <CiBookmark/>
              </div> 
              <div>
                <RiShare2Line/>
              </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Feedcard