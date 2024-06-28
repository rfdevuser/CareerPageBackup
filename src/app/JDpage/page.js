"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
 
  return (
    <section className='bg-white text-black h-screen'>
       <div className='flex justify-center'> <Image
          src="/logos/rf.png"
          height={400}
          width={400}

        />
        </div>
        <div className='flex justify-center flex-wrap text-4xl'><u>SoftWare Developer Engineer</u></div>
        <div className='flex justify-center text-2xl mt-5'><u>JOB-ID- RF_SDE_001</u></div>
        <div className='mx-2 '><u>Job_Brief</u></div>
        <div className='mx-2'>Lorem ipsum dolor sit amet, consectetur
             adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        <div className='mx-2 '><u>Job_Responsibility</u></div>
        <div className='mx-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        <div className='mx-2 '><u>Job_Requirement</u></div>
        <div className='mx-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        <div className='mx-2 '><u>Salary</u></div>
        <div className='mx-2'>$4,00,000</div>
        <div className='mx-2 '><u>Location</u></div>
        <div className='mx-2'>Bangalore</div>
      <div className='flex justify-center'> <button
  class="flex items-center bg-pink-500 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
>
  Apply Now
  <svg
    class="w-5 h-5"
    stroke="currentColor"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
      stroke-linejoin="round"
      stroke-linecap="round"
    ></path>
  </svg>
</button>
</div> 

    </section>
  )
}

export default page;
