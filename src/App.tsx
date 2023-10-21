import useSetTitle from './helpers/useSetTitle'
import Introduction from './pages/Introduction'
import './styles/App.css'


const App = () =>{
  useSetTitle('Deepak Suryawanshi')
  return(
    <div className='App'>
      <Introduction/>
    </div>
  )
}

export default App