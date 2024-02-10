
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    
    axios.defaults.withCredentials = true
    const localURL = import.meta.env.REACT_APP_API_URL
    const navigate = useNavigate();

    interface valuestypes {
        firstname: string,
        lastname: string,
        name: string,
        email: string,
        password: string,

    }

    const [values, setValues] = useState<valuestypes>({
        firstname: '',
        lastname: '',
        name:'',
        email:'',
        password:'',
    })


    const handleName = (): void => {
        const {firstname, lastname} = values;
        const fullname : string = `${firstname} ${lastname}`
        setValues((prev)=>({...prev, name: fullname}))
    }


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(localURL);
        console.log(values)
        console.log(localURL + '/signup')
       
        try {
       
            const response = await axios.post( localURL+'/signup', values);
    
            console.log(response)
          }catch (error) {
            console.log(error)
        
          } 
    }

    const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValues((prev)=>({...prev, [e.target.name]: e.target.value}))
        handleName();
    }

    const handleSignin = () => {
        navigate('/signin')
    }


  return (
    <>
        <div className='w-100% h-screen bg-cbrown flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center px-[3em] gap-4 py-[4em] max-w-[100%] min-w-[30%]'>

                <h1 className='font-Lexend font-bold text-8xl text-cred py-10'>Sign Up</h1>

                <form onSubmit={handleSubmit} className='flex  flex-col gap-[1.4em] w-[100%]'>
                    
                    <div className='flex flex-row justify-start items-center border-solid border-[0.1em] border-cgray p-4 bg-cwhite'> 
                        <input type="text" name='firstname' placeholder='Firstname' className='px-5 py-2 border-none text-slate-700 bg-cwhite focus:border-none focus:outline-none font-Lexend w-[100%] font-bold tracking-widest' onChange={handleInput} required autoComplete='on'/>
                    </div>

                    <div className='flex flex-row justify-start items-center border-solid border-[0.1em] border-cgray p-4 bg-cwhite'>
                        <input type="text" name='lastname' placeholder='Lastname' className='px-5 py-2 border-none text-slate-700 bg-cwhite focus:border-none focus:outline-none font-Lexend w-[100%] font-bold tracking-widest' onChange={handleInput} required autoComplete='on'/>
                    </div>

                    <div className='flex flex-row justify-start items-center border-solid border-[0.1em] border-cgray p-4 bg-cwhite'>
                        <input type="email" name='email' placeholder='Email' className='px-5 py-2 border-none text-slate-700 bg-cwhite focus:border-none focus:outline-none font-Lexend w-[100%] font-bold tracking-widest' onChange={handleInput} required autoComplete='on'/>
                    </div>

                    <div className='flex flex-row justify-start items-center border-solid border-[0.1em] border-cgray p-4 bg-cwhite'>
                        <input type="password" name='password' placeholder='Password' className='px-5 py-2 border-none text-slate-700 bg-cwhite focus:border-none focus:outline-none font-Lexend w-[100%] font-bold tracking-widest' onChange={handleInput} required autoComplete='on'/>
                    </div>

    
                    <button type='submit' className='p-4 w-[100%] bg-[#475569] font-Lexend font-semibold text-[1.4em] rounded-md text-[#DDCFC5]'>Sign up</button>
                    
                </form>

                <div className='w-full flex flex-row justify-end  px-1 '>
                    
                    <button className='tracking-wider font-Lexend text-slate-700 text-[0.9em]' onClick={handleSignin}>I have account, Sign in instead</button>
                </div>

               
            </div>   
        </div>
    </>
  )
}

export default Signup
