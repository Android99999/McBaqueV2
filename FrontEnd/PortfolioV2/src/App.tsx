import './App.css'
import { RouteHandler } from './routes/RouteHandler'
// import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
// import { useState, useEffect } from 'react'

// import Signin from './components/Signin'
// import Signup from './components/Signup'
// import Landing from './components/Landing'
// import Portfolio from './components/Portfolio'

function App() {

  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   // Simulate loading time
  //   const timer = setTimeout(() => {
  //     setLoading(false);

     
  //   }, 3000); // Adjust the duration as needed

  //   // Clear the timer on component unmount to avoid memory leaks
  //   return () => clearTimeout(timer);
  // }, []);


  return (
    <>
      
      {/* <BrowserRouter>
        <Routes>
          
          <Route path="/" element={loading ? <Landing /> : <Navigate to="/signin" />} />
          <Route path='/signin' element={<Signin/>}></Route>
          <Route path='/portfolio' element={<Portfolio/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>

        </Routes>
      </BrowserRouter> */}
      <RouteHandler/>
    </>
  )
}

export default App