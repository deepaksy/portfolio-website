import React from 'react'
import useTheme from '../helpers/useTheme'

const Theme:React.FC = () => {
   const {isDark,toggleTheme} = useTheme()
  return (
    <div>
        <button onClick={()=>toggleTheme()}>{isDark?'Dark':'light'}</button>
    </div>
  )
}

export default Theme