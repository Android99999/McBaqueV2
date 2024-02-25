import React from 'react'

import FadeIn from "../../animations/FadeIn";
import { BiUser } from "react-icons/bi";
import { BiEditAlt } from "react-icons/bi";
import { BiCheckDouble } from "react-icons/bi";

export const About = () => {
  return (
    <div id="about" className='bg-[#DDCFC5] h-fit w-full flex flex-col justify-start items-center'>

          <div className='flex flex-col justify-between items-center w-[84%] xl:w-[80%] 2xl:w-[80%] xl:gap-[4em] 2xl:gap-[4em]'>
            {/* 1st */}
            <div className='flex flex-col justify-start items-center w-full h-fit py-10 xl:w-[80%] 2xl:w-[80%]'>
              <div className='flex flex-col justify-center items-center h-fit]'>
                <FadeIn direction="right" delay={0.2}>
                  <p className='text-center font-Rufina xl:text-[3em] 2xl:text-[3em] text-[2.4em] tracking-widest font-bold text-[#3F3F46]'>Enthusiastic Web Developer with a Passion for Crafting Digital Experiences</p>
                </FadeIn>
              </div>
            </div>
            {/* 2nd */}
            <div className='flex flex-row justify-center items-center w-full h-fit gap-4 py-[3em]'>
              
                <div className='w-[100%] h-[0.12em] bg-[#7C2629]'>
                </div>
             
              
              <FadeIn direction="down" delay={0.}>
                <div className='min-w-[12em] py-[1.4em]  px-[2.4em]  bg-[#475569] text-center rounded-full font-Poppins font-semibold text-[#DDCFC5] text-[0.8em] tracking-widest'>
                  ABOUT ME  
                </div>
              </FadeIn>
              
             
                <div className='w-[100%] h-[0.12em] bg-[#7C2629]'>
                </div>
             

            </div>
          {/* 3rd */}
            <div className=' h-fit w-full flex 2xl:flex-row xl:flex-row justify-around py-10  items-stretch lg:flex-col sm:flex-col md:flex-col flex-col gap-4'>
              
              <div className="flex-1">
                <FadeIn direction="right" delay={0.4}>
                  <div className='min-w-[10%] flex flex-col min-h-[90%] py-[2em] '> 
                    <div className='flex flex-col h-[50%] justify-center items-center xl:justify-start xl:items-start 2xl:justify-start 2xl:items-start'>
                      <div className='h-[50%]'><BiUser size={65}  color='#3F3F46' /></div>
                      <div className='h-[50%] py-4 text-[2em] font-Poppins font-semibold tracking-widest text-[#7C2629] '>Who I am</div>
                    </div>
                    <div className='w-full h-[50%] font-Poppins font-thin text-[1.4em] py-4 tracking-[0.14em] lg:text-center md:text-center sm:text-center'>
                      <p>Web Developer with expertise in both frontend and backend technologies.</p>
                    </div>
                  </div>
                </FadeIn>
              </div>

              <div className="flex-1">
                <FadeIn direction="right" delay={0.6}>
                  <div className='min-w-[20%] flex flex-col min-h-[90%] py-[2em]'>
                    <div className='flex flex-col h-[50%] justify-center items-center xl:justify-start xl:items-start 2xl:justify-start 2xl:items-start '>
                      <div className='h-[50%] '><BiEditAlt size={65}  color='#3F3F46'/></div>
                      <div className='h-[50%] py-4 text-[2em] font-Poppins font-semibold tracking-widest text-[#7C2629] '>What I Do</div>
                    </div>
                    <div className='min-w-[20%] h-[50%] font-Poppins font-thin text-[1.4em] tracking-[0.15em] py-4 lg:text-center md:text-center sm:text-center'>
                      <p>Excels in delivering solutions, ranging from responsive designs to complex web applications.</p>
                    </div>
                  </div>
                </FadeIn>
              </div>


              <div className="flex-1">
                <FadeIn direction="right" delay={0.8}>
                <div className='min-w-[20%] flex flex-col min-h-[90%] py-[2.2em]'>
                  <div className='flex flex-col h-[50%] justify-center items-center xl:justify-start xl:items-start 2xl:justify-start 2xl:items-start'>
                    <div  className='h-[50%]'><BiCheckDouble size={65} color='#3F3F46'/></div>
                    <div className='h-[50%] py-4 text-[1.8em] font-Poppins font-semibold text-[#7C2629] tracking-widest'>Why Choose Me</div>
                  </div>
                  <div className='max-w-[100%] h-[50%] font-Poppins font-thin text-[1.39em] tracking-[0.14em] py-4 lg:text-center md:text-center sm:text-center'>
                    <p>Consistently exceeds client expectations through innovative and future-proof solutions</p>
                  </div>
                </div>
                </FadeIn>
              </div>
            </div>
            {/* 4th */}
            <div className='flex flex-col w-full justify-center items-center gap-10 p-4'>
              <FadeIn direction="down" delay={0.2}>
                <div className='font-Poppins text-[1.4em] xl:text-[2em] 2xl:text-[2em] tracking-[0.14em] text-[#3F3F46] font-semibold text-center'>Tell me about your project</div>
              </FadeIn>
              <FadeIn direction="down" delay={0.2}>
              <div className=' bg-[#475569] font-Poppins tracking-widest font-semibold rounded-full text-[#DDCFC5] text-[0.8em] min-w-[12em] py-[1.4em]  px-[2.4em] text-center'>EMAIL ME</div>
              </FadeIn>
            </div>

          </div>
      </div>
  )
}
