import useTheme from '../../helpers/useTheme'
import './themeButton.css'
// import lightSun from '../../assets/Sun-light.svg'
// import darkMoon from '../../assets/moon-dark-outlined.svg'
import {motion} from 'framer-motion'


const svgVariants ={
  hidden: {rotate: -180},
  visible: {
    rotate: 0,
    transition: {duration: 1}
  }
}

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {duration: 2.3, ease: "easeInOut"}
  }
}


const ThemeButton = () => {
  const {isDark,toggleTheme} = useTheme()
  return (
    <>
      {isDark?(
        <motion.svg className="theme-button" onClick={()=>toggleTheme()} initial={{rotate: 0}} animate={{rotate:360, transition: {repeat: Infinity,delay:1, duration: 20, ease: 'linear'}}} width="190" height="190" viewBox="0 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.circle variants={pathVariants} initial="hidden" animate="visible" cx="95" cy="95" r="61" stroke="white" strokeWidth="4"/>
        <motion.line variants={pathVariants} initial="hidden" animate="visible" x1="93" y1="28" x2="93" y2="2" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <motion.line variants={pathVariants} initial="hidden" animate="visible" x1="93" y1="188" x2="93" y2="162" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <motion.line variants={pathVariants} initial="hidden" animate="visible" x1="59.768" y1="37.9763" x2="46.7679" y2="15.4596" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <motion.line variants={pathVariants} initial="hidden" animate="visible" x1="139.768" y1="176.54" x2="126.768" y2="154.024" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <motion.line variants={pathVariants} initial="hidden" animate="visible" x1="46.2096" y1="49.0381" x2="27.8249" y2="30.6533" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <motion.line variants={pathVariants} initial="hidden" animate="visible" x1="159.347" y1="162.175" x2="140.962" y2="143.79" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <motion.line variants={pathVariants} initial="hidden" animate="visible" x1="35.9763" y1="63.2321" x2="13.4596" y2="50.2321" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <motion.line variants={pathVariants} initial="hidden" animate="visible" x1="174.54" y1="143.232" x2="152.024" y2="130.232" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <motion.line variants={pathVariants} initial="hidden" animate="visible" x1="29.7653" y1="79.591" x2="4.65126" y2="72.8617" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <motion.line variants={pathVariants} initial="hidden" animate="visible" x1="184.313" y1="121.002" x2="159.199" y2="114.273" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <motion.line variants={pathVariants} initial="hidden" animate="visible" x1="28" y1="97" x2="2" y2="97" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <motion.line variants={pathVariants} initial="hidden" animate="visible" x1="188" y1="97" x2="162" y2="97" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <motion.line variants={pathVariants} initial="hidden" animate="visible" x1="30.8006" y1="114.273" x2="5.68654" y2="121.002" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <motion.line variants={pathVariants} initial="hidden" animate="visible" x1="185.349" y1="72.8617" x2="160.235" y2="79.591" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <motion.line variants={pathVariants} initial="hidden" animate="visible" x1="37.9763" y1="130.232" x2="15.4596" y2="143.232" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <motion.line variants={pathVariants} initial="hidden" animate="visible" x1="176.54" y1="50.232" x2="154.024" y2="63.232" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <motion.line variants={pathVariants} initial="hidden" animate="visible" x1="49.0381" y1="143.79" x2="30.6533" y2="162.175" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <motion.line variants={pathVariants} initial="hidden" animate="visible" x1="162.175" y1="30.6533" x2="143.79" y2="49.0381" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <motion.line variants={pathVariants} initial="hidden" animate="visible" x1="63.2321" y1="154.024" x2="50.2321" y2="176.54" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <motion.line variants={pathVariants} initial="hidden" animate="visible" x1="143.232" y1="15.4596" x2="130.232" y2="37.9763" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <motion.line variants={pathVariants} initial="hidden" animate="visible" x1="75.7273" y1="30.8006" x2="68.998" y2="5.68653" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <motion.line variants={pathVariants} initial="hidden" animate="visible" x1="117.138" y1="185.349" x2="110.409" y2="160.235" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <motion.line variants={pathVariants} initial="hidden" animate="visible" x1="110.409" y1="29.7653" x2="117.138" y2="4.65124" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <motion.line variants={pathVariants} initial="hidden" animate="visible" x1="68.998" y1="184.313" x2="75.7273" y2="159.199" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        </motion.svg>
        
      ):(
<svg className='theme-button' onClick={()=>toggleTheme()} width="100" height="127" viewBox="0 0 100 127" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path variants={pathVariants} initial="hidden" animate="visible" strokeWidth="4" d="M66.315 2C30.8829 2 2 29.4484 2 63.5C2 97.5516 30.8829 125 66.315 125C75.956 125 85.1085 122.97 93.3255 119.33L93.4481 119.275C94.5292 118.796 95.5201 118.357 96.2159 117.933C96.5792 117.712 97.0249 117.4 97.376 116.963C97.7736 116.467 98.0728 115.772 97.9714 114.944C97.8658 114.082 97.3719 113.478 96.8654 113.106C96.4145 112.775 95.9005 112.583 95.4835 112.455C94.6782 112.208 93.5658 112.014 92.3312 111.798L92.2013 111.775C64.0571 106.85 42.8471 83.3431 42.8471 55.2217C42.8471 35.9303 52.8154 18.8277 68.1691 8.38305L68.2198 8.34861C68.704 8.01926 69.1436 7.72023 69.4717 7.46574C69.645 7.33125 69.8416 7.16806 70.0212 6.98035C70.1916 6.80229 70.4414 6.50574 70.6035 6.09001C71.1102 4.79088 70.6561 3.31589 69.5064 2.52669C68.878 2.09531 68.1451 2.04697 67.8352 2.02653L67.8315 2.02628C67.432 1.99993 66.9246 1.99996 66.3769 2L66.315 2Z" stroke="black" />
</svg>






      )}
      </>
  )
}

export default ThemeButton