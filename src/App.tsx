import useSetTitle from './helpers/useSetTitle'
import './styles/App.css'
import deepakLogoDark from './assets/deepak_logo.svg'
import image from './assets/throne.png'

const App = () =>{
  useSetTitle('Deepak Suryawanshi')
  return(
    <div className='App'>
      <section className='introduction'>
      <div>
      <img className='user-logo' alt='deepak-suryawanshi'  src={deepakLogoDark} />
      <div>
        A computer engineer, learner and open-source contributor.
      </div>
      </div>
      <div>
        <img className='intro-image' alt='throne' src={image} />
      </div>
      </section>
    </div>
  )
}

export default App