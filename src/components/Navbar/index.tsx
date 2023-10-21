import ThemeButton from '../ThemeButton'
import './index.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-contents'>
        <div className='navbar-left'>
        </div>
        <div className='navbar-right'>
          <ThemeButton/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar