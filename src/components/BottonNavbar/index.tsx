import { Link } from 'react-router-dom'
import './index.css'

const navLinks = [
  {name:'Home',path:'/'},
  {name:'About',path:'/about'},
  {name:'Feedback',path:'/feedback'},
]

const ButtonNavbar = () => {
  return (
    <nav className='bottom-navbar'>
        {navLinks.map(({name,path},i)=>{
          return(
            <Link to={path}> <button className='bottom-navbar-button' key={i}>{name}</button></Link>
          )
        })}
    </nav>
  )
}

export default ButtonNavbar