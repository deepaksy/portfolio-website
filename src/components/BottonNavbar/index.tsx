import { Link } from 'react-router-dom'
import './index.css'
import {Link as ScrollLink} from 'react-scroll'

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
        <ScrollLink to='abc' spy smooth offset={100} duration={500}><button className='bottom-navbar-button'>Div</button></ScrollLink>
    </nav>
  )
}

export default ButtonNavbar