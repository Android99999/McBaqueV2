// import React from 'react'
// import Wave from  '../../assets/images/Wave.svg'
// import BgV2 from '../../assets/images/2pxland-1.svg'

import McIcon from '../../assets/images/McIcon.svg'
export const IntroductionV2 = () => {
  return (
    <div className='w-full h-screen bg-[#314754]'>
        <div className={`w-full h-fit bg-[#314754] border-2  border-black flex justify-center items-center`}
        // style={{
        //     backgroundImage: `url(${Wave})`,
        //                       backgroundSize:'cover',
        //                       backgroundRepeat:'repeat',
        //                       backgroundAttachment: 'fixed'
        // }}

       
        
        
        >
             <img src={McIcon} alt="McIcon" className='w-[4em] h-[4em]'/>
            {/* <img src={Wave} className='w-full h-full object-cover'></img> */}
        </div>
        

    </div>
  )
}
