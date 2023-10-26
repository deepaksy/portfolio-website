import { Link } from 'react-router-dom'
import './index.css'
import {Link as ScrollLink} from 'react-scroll'
import { useState } from 'react'
import { bottomNavbarSectionType, bottomNavbarSections } from '../../data/section'



const ButtonNavbar = () => {
  
  const [activeSection,setActiveSection] = useState<bottomNavbarSectionType>(bottomNavbarSections[0])
  return (
    <nav className='bottom-navbar'>
        {bottomNavbarSections.map(({title,link},i)=>{
          return(
            <Link onClick={()=>setActiveSection({title,link})}  key={title} to={link}> <button className={`bottom-navbar-button ${title===activeSection.title?'active':''}`} key={i}>{title}</button></Link>
          )
        })}
        <ScrollLink to='abc' spy smooth offset={100} duration={500}><button className='bottom-navbar-button'>Div</button></ScrollLink>
    </nav>
  )
}

export default ButtonNavbar