import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { BiEditAlt } from "react-icons/bi";
import { BiCheckDouble } from "react-icons/bi";

import { AiOutlineClose } from "react-icons/ai";

import { Icon } from '@iconify-icon/react';

import {useState} from "react";
import Navlink from "../Utils/Navlink";
import FadeIn from "../Animations/FadeIn";


const Portfolio = () => {
  //@ts-ignore
  const[showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  

  return (
    <>
    <div className='bg-[#DDCFC5] h-fit w-full flex flex-col justify-center items-center'>
      {/* first context */}
      <div id="introduction" className='h-fit xl:h-fit 2xl:h-fit w-[84%] xl:w-[80%] 2xl:w-[80%] flex flex-col justify-start items-center py-[2em] xl:py-[4em] 2xl:py-[4em]'>
          {/* navigation */}
        <div className='h-[88%] flex flex-col justify-between w-full xl:gap-[9em] 2xl:gap-[9em] gap-[3.4em]'>
          <div className='h-fit w-full flex flex-row justify-between items-center py-6'>

            <div className=''>
                <h1 className='font-Poppins font-black text-[2em] cursor-pointer text-[#3F3F46] sm:text-[1.8em] md:text-[1.8em]'>BAQUE</h1>
            </div>

            <div className='max-w-[40%] min-w-[60%] xl:block 2xl:block hidden'>
              <ul className='flex flex-row justify-evenly items-center gap-4 font-Poppins text-[0.4em] tracking-widest text-[#3F3F46]'>
                              <Navlink Linkto="about">ABOUT</Navlink>                      
                              <Navlink Linkto="experience">EXPERIENCE</Navlink>
                              <Navlink Linkto="skills">SKILLS</Navlink>                     
                              <Navlink Linkto="contact">CONTACT</Navlink>
              </ul>
            </div>

            <div className='bg-[#475569] max-w-[20%] min-w-[16%] rounded-full hidden xl:block 2xl:block text-center'>
              <button className='font-Poppins text-[1.1em] font-semibold px-3.6 py-[0.5em] text-[#DDCFC5] '>Download CV</button>
            </div>

          
            {/* Mobile Navigation */}
            <div className='block w-fit h-fit sm:block md:block lg:block xl:hidden 2xl:hidden'>
                    
                        <div className='sm:block md:block lg:block xl:hidden 2xl:hidden w-fit h-fit'>
                          <Icon icon="ep:menu" width={30} height={30} className='sm:block md:block lg:block xl:hidden 2xl:hidden w-fit h-fit cursor-pointer' 
                           onClick={()=>setShowMobileMenu((prev)=>!prev)}
                           />
                        </div>

                        <div className={`block w-[70%] h-screen fixed ${!showMobileMenu ? "-right-[70%]" : "right-0"} 
                                        top-0 bg-[#f4ede1] h-fit py-[6em] transition-all duration-[800ms]
                                        shadow-xl z-10 px-12 rounded-xl xl:hidden 2xl:hidden `
                        }>
                 
                          <AiOutlineClose size={30} color='#3F3F46'
                                      className="absolute top-10 right-10 cursor-pointer
                                      hover:rotate-90 transition-transform duration-10 ease-in-out"
                                      onClick={() => setShowMobileMenu(false)}
                          />
                
                          <div className="w-full h-full flex flex-col items-center justify-between">
                            <ul className="font-Comme pt-[60px] items-center flex flex-col gap-8">
                              <Navlink Linkto="about">ABOUT</Navlink>                      
                              <Navlink Linkto="experience">EXPERIENCE</Navlink>
                              <Navlink Linkto="skills">SKILLS</Navlink>                     
                              <Navlink Linkto="contact">CONTACT</Navlink>
                            </ul>

                            <button className="bg-cblue py-[0.6em] px-[2.4em] rounded-full text-cbrown font-bold text-[0.9em]">SIGN OUT</button>
                          </div>

                        </div>
            </div>

        </div>

        <div className=''>
          <FadeIn direction="down" delay={0.1}>
            <p className='font-Rufina 2xl:text-[4em] xl:text-[4em] text-[2.8em] text-center font-semibold tracking-wider text-[#3F3F46]'>
              Baque (/Ba-Ki/) is  a <br></br>
              entry-level <span className='underline text-[#7C2629]'>Web developer</span> <br></br>
              crafting solutions in lines of Code
            </p>
          </FadeIn>
        </div>

        <div className='flex flex-row justify-between items-center gap-5 py-[2em]'>
          <FadeIn direction="right" delay={0.2}>
          <div className='w-[10em] h-1 bg-[#7C2629]'></div>
          </FadeIn>
            <div className='flex flex-row gap-5'>
              <FadeIn direction="right" delay={0.2}>
                <FaLinkedin color='#3F3F46' size={50} className='cursor-pointer'/>
              </FadeIn>

              <FadeIn  direction="right" delay={0.4}>
                <FaGithubSquare color='#3F3F46' size={50} className='cursor-pointer'/>
              </FadeIn>
            </div>
          </div>
        </div>

      </div>

      {/* About */}
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
        {/* ABOUT END */}



    </div>
    </>
  )
}

export default Portfolio
