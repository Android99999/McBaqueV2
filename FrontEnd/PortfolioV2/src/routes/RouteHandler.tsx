import { BrowserRouter, Routes, Route, Navigate,} from 'react-router-dom'

import { Signin } from '../pages/Signin'
import { Signup } from '../pages/Signup'
import { Portfolio } from '../pages/Portfolio'

export const RouteHandler = () => {
  return (
    <BrowserRouter>
      <Routes>
    
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/signup' element={<Signup/>}/>
      
      </Routes>
  </BrowserRouter>
  )
}
