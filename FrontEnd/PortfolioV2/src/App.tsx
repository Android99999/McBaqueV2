import './App.css'
import { RouteHandler } from './routes/RouteHandler'

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
      <RouteHandler/>
    </>
  )
}

export default App