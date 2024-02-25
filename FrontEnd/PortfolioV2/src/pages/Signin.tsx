

import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

import { useNavigation } from '../utils/navigate' 


export const Signin = () => {

  const { navigatePortfolio, navigateSignup} = useNavigation();

  const handleSubmit = () : void => {

  }

  return (
    <>
      <div className='w-100% h-screen bg-cbrown flex justify-center items-center'>
          <div className='flex flex-col justify-center items-center sm:w-[24em] md:w-[24em] lg:w-[26em] xl:w-[26em] 2xl:w-[26em] gap-4 py-[4em] transition-all ease-in-out'>

              <h1 className='font-Lexend font-bold sm:text-[5.6em] md:text-[5.6em] lg:text-[5.6em] xl:text-[6em] 2xl:text-[6em] text-cred py-10 transition-all ease-in-out'>Sign In</h1>

              <form onSubmit={handleSubmit} className='flex  flex-col gap-[1.4em] w-[100%]'>
                  
                  <div className='flex flex-row justify-start items-center border-solid border-[0.1em] border-cgray p-4 bg-cwhite'>
                      <div className='flex justify-center items-center border-cgray border-r-[0.1em] h-[80%] pl-3 pr-5 '>
                          <MdEmail size={20}  color='#3F3F46'/>
                      </div>
                      <input type="email" placeholder='Email' className='px-5 py-2 border-none text-slate-700 bg-cwhite focus:border-none focus:outline-none font-Lexend w-[100%] font-bold tracking-widest' required  />
                  </div>

                  <div className='flex flex-row justify-start items-center border-solid border-[0.1em] border-cgray p-4 bg-cwhite '>
                      <div className='flex justify-center items-center border-cgray border-r-[0.1em] h-[80%]  pl-3 pr-5'>
                          <FaLock size={20} color='#3F3F46'/>
                      </div>
                      <input type="password" placeholder='Password' className='px-5 py-2 border-none text-slate-700 bg-cwhite focus:border-none focus:outline-none font-Lexend w-[100%] font-bold tracking-widest' required />
                  </div>
                  <button type='submit' className='p-4 w-[100%] bg-[#475569] font-Lexend font-semibold text-[1.4em] rounded-md text-cbrown'>Sign in</button>
                  
              </form>

              <div className='w-full flex flex-row justify-between px-1'>
                  <button className='tracking-wider font-Lexend text-slate-700 text-[0.9em]'>Forget Password?</button>
                  <button className='tracking-wider font-Lexend text-slate-700 text-[0.9em]' onClick={navigateSignup}>I don't have account</button>
              </div>

              <div className='flex items-center w-full'>
                  <div className='h-[0.05em] w-full bg-slate-600'></div>
                  <h5 className='mx-2'>or</h5>
                  <div className='h-[0.05em] w-full bg-slate-600 '></div>
              </div>

              <button type='submit' className='p-4 w-[100%] bg-cblue font-Lexend font-semibold text-[1.4em] rounded-md text-cbrown' onClick={navigatePortfolio}>I am Guest</button>

          </div>   
      </div>
    </>
  )
}
