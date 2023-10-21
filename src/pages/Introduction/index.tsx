import deepakLogoDark from '../../assets/deepak_logo.svg'
import image from '../../assets/throne.png'
import { Link } from 'react-router-dom'
const Introduction = () => {
  return (
    <div>
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
      <Link to={'/about'}>About</Link>
    </div>
  )
}

export default Introduction