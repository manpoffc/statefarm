import React from 'react'
import Typewriter from 'typewriter-effect'
import {motion} from "framer-motion"

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='p-2 min-h-max mb-20 mt-20 md:h-screen md:-mb-10 md:flex md:justify-center'>
    <div className="lg:w-5/6">
      <div className='text-bold font-bold text-center text-xl md:text-5xl text-gray-700 p-8 mb-10'>
      <Typewriter 
      options={{
          strings:['Do you have a pet?', 'Are you looking for an insurance?','We got your furr babies covered!!!'],
          autoStart: true,
          loop: true,
          delay: 0.2
      }}/>
      </div>
  <div className=" w-full p-5">
    <div className="  w-full items-center md:flex  md:justify-center ">
    <div className="md:w-3/4 md:flex md:flex-col md:justify-center">
    <h1 className="p-2 text-3xl font-bold text-slate-700">Your Pet is Part of Our Family</h1>
    <p className="p-2 font-medium text-slate-700">We are passionate about pet health and are driven to do everything we can for animals.<br /> There is a cost-effective pet insurance plan we provide that pays for new injuries and illnesses as well as doctor visits.<br /> A pet insurance policy that is so simple to comprehend makes it simple to help safeguard both you and your pet.<br /></p>
    </div>
      <motion.div
          initial={{
              x:500,
              opacity:0,
              scale:0.5
          }}
          animate={{
              x:0,
              opacity:1,
              scale:1
          }}
          transition={{
              ease:"easeOut",
              duration:1.5
          }}
      className="mt-4 md:w-1/4 ">
      <img alt="pawsome" src="https://img.freepik.com/free-vector/woman-walking-dog-park-girl-playing-with-her-pet-outside-cartoon-illustration_74855-14567.jpg?w=996&t=st=1664686302~exp=1664686902~hmac=669b1e44d1cc2443bc939fa3810051a0252d15362009e0809e2c06fb341471d1" />
    </motion.div>
    </div>
    <div className="w-full flex justify-center ">
    <div className="mt-4 w-full space-y-4 md:w-5/6  md:flex md:-space-x-8 md:space-y-0 md:justify-between">
      <button className="w-full md:w-1/5  rounded-full border animate-pulse bg-blue-500 p-2 text-center font-semibold text-white hover:bg-blue-700">Book a Schedule</button>
      <button className="w-full md:w-1/5 rounded-full border  border-slate-700 p-2 text-center font-semibold">Insurance Plans</button>
      
    </div>
  </div>
  </div>
  </div>
  </div>
  )
}

export default Hero