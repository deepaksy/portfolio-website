import Navbar from './components/Navbar'
import './styles/App.css'
import { data } from './types/data'
const App = () =>{
  return(
    <div className='App'>
      <h1>Hello world</h1>
      <h2>Name: {data.name}</h2>
      <h2>Age: {data.age}</h2>
      <Navbar/>
    </div>
  )
}

export default App