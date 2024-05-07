import React from 'react'
import FadeIn from '../../animation/FadeIn'

export const Experience = () => {
  return (
    <>
    <div id="experience" className='h-fit xl:h-fit 2xl:h-fit w-[84%] xl:w-[80%] 2xl:w-[80%] flex flex-col  py-[2em] xl:py-[4em] 2xl:py-[4em] text-[#3F3F46]'>
        <div className='flex w-full h-fit flex-col font-Poppins text-[1.2em] sm:gap-[2em] md:gap-[2em] lg:gap-[2em]'>

            <FadeIn direction='right' fullWidth={false}>
                <h1 className=' text-[2em] font-bold tracking-widest'>EXPERIENCE</h1>
            </FadeIn>


            <FadeIn direction='right' delay={0.4}>

                <div className='flex 2xl:flex-row xl:flex-row flex-col'>
                    <div className='  xl:w-[35%] 2xl:w-[35%] py-3'>
                        <h1 className='font-[600] text-[#7C2629]'>Personal Collection</h1>
                        <h2>April 2023 - August 2023</h2>
                    </div>
                    <div className=" w-full relative 2xl:p-3 xl:p-3 sm:py-2  md:py-2  lg:py-2 flex flex-col gap-2
                                    2xl:border-l-[#7C2629]  2xl:border-l-[4px]  
                                    xl:border-l-[#7C2629] xl:border-l-[4px]
                                    sm:border-t-[4px] md:border-t-[4px] lg:border-t-[4px] border-t-[#7C2629]
                                    2xl:before:content-[''] 2xl:before:p-2 2xl:before:bg-[#7C2629] 2xl:before:absolute 2xl:before:-top-2 2xl:before:-left-[10px] 2xl:before:rounded-full
                                    xl:before:content-[''] xl:before:p-2 xl:before:bg-[#7C2629] xl:before:absolute xl:before:-top-2 xl:before:-left-[10px] xl:before:rounded-full
                    ">
                        <h1 className='font-[600] text-[#7C2629]'>Technical Support Intern / IT Resource Management Intern</h1>
                        
                        <p>
                            Capable of resolving software, hardware, and network issues for colleagues while efficiently managing IT asset allocation and maintenance.
                            From unit receipt to database integration, I ensure streamlined operations and optimal resource utilization, ensuring seamless functionality
                            across the organization.
                        </p>
                    </div>
                </div>

            </FadeIn>
            {/* <FadeIn direction='right' delay={0.4}>

                <div className='flex 2xl:flex-row xl:flex-row flex-col'>
                    <div className='  xl:w-[35%] 2xl:w-[35%] py-3'>
                        <h1 className='font-[600] text-[#7C2629]'>Personal Collection</h1>
                        <h2>April 2023 - August 2023</h2>
                    </div>
                    <div className=" w-full relative 2xl:p-3 xl:p-3 sm:py-2  md:py-2  lg:py-2 flex flex-col gap-2
                                    2xl:border-l-[#7C2629]  2xl:border-l-[4px]  
                                    xl:border-l-[#7C2629] xl:border-l-[4px]
                                    sm:border-t-[4px] md:border-t-[4px] lg:border-t-[4px] border-t-[#7C2629]
                                    2xl:before:content-[''] 2xl:before:p-2 2xl:before:bg-[#7C2629] 2xl:before:absolute 2xl:before:-top-2 2xl:before:-left-[10px] 2xl:before:rounded-full
                                    xl:before:content-[''] xl:before:p-2 xl:before:bg-[#7C2629] xl:before:absolute xl:before:-top-2 xl:before:-left-[10px] xl:before:rounded-full
                    ">
                        <h1 className='font-[600] text-[#7C2629]'>Technical Support Intern / IT Resource Management Intern</h1>
                        
                        <p>
                            Capable of resolving software, hardware, and network issues for colleagues while efficiently managing IT asset allocation and maintenance.
                            From unit receipt to database integration, I ensure streamlined operations and optimal resource utilization, ensuring seamless functionality
                            across the organization.
                        </p>
                    </div>
                </div>

            </FadeIn> */}
        </div>
    </div>
    </>
  )
}
