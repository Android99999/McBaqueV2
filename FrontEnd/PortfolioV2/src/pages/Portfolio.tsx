import { Introduction } from '../components/portfolio/Introduction';
import { About } from '../components/portfolio/About';
import {Experience} from '../components/portfolio/Experience'

// import { IntroductionV2 } from '../components/portfolio/IntroductionV2';


export const Portfolio = () => {
  return (
    <>
      <div className='bg-[#DDCFC5] h-fit w-full flex flex-col justify-center items-center'>
        {/* <IntroductionV2/> */}
        
        
        <Introduction/>
        <About/>
        <Experience/>
      </div>
    </>
  )
}
