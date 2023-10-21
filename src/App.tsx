import useSetTitle from './helpers/useSetTitle'
import './styles/App.css'
import deepakLogoDark from './assets/deepak_logo.svg'

const App = () =>{
  useSetTitle('Deepak Suryawanshi')
  return(
    <div className='App'>
      <section className='introduction'>
      <div>
      <img className='user-logo' alt='deepak-suryawanshi'  src={deepakLogoDark} />
      </div>
      <div>
        Images goes here
      </div>
      </section>
    </div>
  )
}

export default App