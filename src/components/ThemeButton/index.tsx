import useTheme from '../../helpers/useTheme'
import './themeButton.css'
import nightMode from '../../assets/night-mode.png'
import dayMode from '../../assets/day-mode.png'



const ThemeButton = () => {
  const {isDark,toggleTheme} = useTheme()
  return (
    <img className='theme-button' alt='theme-button' aria-label='theme-button' src={isDark?nightMode:dayMode} onClick={()=>toggleTheme()}/>
  )
}

export default ThemeButton