import './App.css'
import Signin from './components/Signin'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'

function App() {


  return (
    <>
      
      <BrowserRouter>
        <Routes>
          
          {/* <Route path="/" element={loading ? <Landing /> : <Navigate to="/signin" />} /> */}
         
          <Route path='/signin' element={<Signin/>}></Route>
          {/* <Route path='/portfolio' element={<Portfolio/>}></Route>*/}
          <Route path='/signup' element={<Signup/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App