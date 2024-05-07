import { Introduction } from '../components/portfolio/Introduction';
import { About } from '../components/portfolio/About';
import {Experience} from '../components/portfolio/Experience'

export const Portfolio = () => {
  return (
    <>
      <div className='bg-[#DDCFC5] h-fit w-full flex flex-col justify-center items-center'>
        <Introduction/>
        <About/>
        <Experience/>
      </div>
    </>
  )
}
