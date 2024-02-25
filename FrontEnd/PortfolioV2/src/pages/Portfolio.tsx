import { Introduction } from '../components/portfolio/Introduction';
import { About } from '../components/portfolio/About';

export const Portfolio = () => {
  return (
    <>
      <div className='bg-[#DDCFC5] h-fit w-full flex flex-col justify-center items-center'>
        <Introduction/>
        <About/>
      </div>
    </>
  )
}
