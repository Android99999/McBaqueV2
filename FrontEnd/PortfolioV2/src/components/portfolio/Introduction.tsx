import { useState } from 'react'

import Navlink from "../Navlink";
import FadeIn from "../../animation/FadeIn";

import { Icon } from '@iconify-icon/react';
import { AiOutlineClose } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

import { DownloadCV } from '../../utils/download'

import  handleRedirectToURL  from '../../utils/handleRedirectToURL';

export const Introduction = () => {

    
  const[showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <>
        {/*Container*/}
        <div id="introduction" className='h-fit xl:h-fit 2xl:h-fit w-[84%] xl:w-[80%] 2xl:w-[80%] flex flex-col justify-start items-center py-[2em] xl:py-[4em] 2xl:py-[4em]'>
            {/*Introduction*/}
            <div className='h-[88%] flex flex-col justify-between w-full xl:gap-[9em] 2xl:gap-[9em] gap-[3.4em]'>
                {/*Navigation*/}
                <div className='h-fit w-full flex flex-row justify-between items-center py-6'>

                    <div className=''>
                        <h1 className='font-Poppins font-black text-[2em] cursor-pointer text-[#3F3F46] sm:text-[1.4em] md:text-[1.8em]'>BAQUE</h1>
                    </div>

                    <div className='max-w-[40%] min-w-[60%] xl:block 2xl:block hidden'>
                        <div className='flex flex-row justify-evenly items-center gap-4 font-Poppins text-[0.4em] tracking-widest text-[#3F3F46]'>
                                        <Navlink Linkto="about">ABOUT</Navlink>                      
                                        <Navlink Linkto="experience">EXPERIENCE</Navlink>
                                        <Navlink Linkto="skills">SKILLS</Navlink>                     
                                        <Navlink Linkto="contact">CONTACT</Navlink>
                        </div>
                    </div>

                    {/* <div className='bg-[#475569] max-w-[20%] min-w-[16%] rounded-full hidden xl:block 2xl:block text-center '>
                        <button className='font-Poppins text-[1.1em] font-semibold text-[#DDCFC5] min-w-fit text-center bg-slate-500 max-w-[20%] min-w-[16%] rounded-full hidden xl:block 2xl:block text-center' onClick={DownloadCV}>Download CV</button>
                    </div> */}
                    <button className='font-Poppins text-[1.1em] px-[2em] py-[0.4em] font-semibold text-[#DDCFC5] min-w-fit text-center bg-[#475569]  rounded-full hidden xl:block 2xl:block ' onClick={DownloadCV}>Download CV</button>

                
                    {/*For Mobile Navigation */}
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
                                    <div className="font-Comme pt-[60px] items-center flex flex-col gap-8">
                                        <Navlink Linkto="about">ABOUT</Navlink>                      
                                        <Navlink Linkto="experience">EXPERIENCE</Navlink>
                                        <Navlink Linkto="skills">SKILLS</Navlink>                     
                                        <Navlink Linkto="contact">CONTACT</Navlink>
                                        <button className='font-Poppins text-[1.1em] px-[2em] py-[0.4em] font-semibold text-[#DDCFC5] min-w-fit text-center bg-[#475569]  rounded-full '
                                        onClick={DownloadCV}>Download CV</button>
                                    </div>

                                   
                                    <button className="bg-cblue py-[0.6em] px-[2.4em] rounded-full text-cbrown font-bold text-[0.9em]">SIGN OUT</button>
                                   
                                </div>

                        </div>
                    </div>
                </div>
                {/**End of Navigation */}            


                <div className='flex flex-row justify-start'>
                    <FadeIn direction="right" delay={0.4}>
                        <p className='font-Rufina 2xl:text-[4em] xl:text-[4em] text-[2.8em] sm:text-[1.8em] text-center xl:text-left 2xl:text-left font-semibold tracking-wider text-[#3F3F46]'>
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
                            <FaLinkedin color='#3F3F46' className='cursor-pointer w-[2em] h-[2em] 2xl:h-[4em] xl:h-[4em] 2xl:w-[4em] xl:w-[4em]'
                             onClick={() => handleRedirectToURL({ url: 'https://www.linkedin.com/in/mcbaque/' })}

                            />

                        </FadeIn>

                        <FadeIn  direction="right" delay={0.4}>
                            <FaGithubSquare color='#3F3F46' size={50} className='cursor-pointer w-[2em] h-[2em] 2xl:h-[4em] xl:h-[4em] 2xl:w-[4em] xl:w-[4em]' 
                            onClick={() => handleRedirectToURL({ url: 'https://github.com/McBaque01' })}

                            />
                        </FadeIn>
                    </div>
                </div>

            </div>
      </div>

    </>
  )
}

