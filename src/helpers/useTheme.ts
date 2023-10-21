import { useLayoutEffect,  useState } from 'react'

const useTheme = () => {
    const [isDark,setIsDark] = useState(false)
    
    useLayoutEffect(()=>{
        if(localStorage.getItem('theme')===null){
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setIsDark(true)
                storeThemePreference('dark')
            }
            else{
                setIsDark(false)
                storeThemePreference('light')
            }
        }
        else{
            setIsDark(localStorage.getItem('theme')==='dark'?true:false)
        }
    },[])

    useLayoutEffect(()=>{
        const getThemeValue = isDark?'dark':'light'
        if(isDark){
            document.body.classList.add('dark')
        }
        else{
            document.body.classList.remove('dark')
        }
        storeThemePreference(getThemeValue)
    },[isDark])

    

    const storeThemePreference = (isdark:string) =>{
        localStorage.setItem('theme',isdark)
    }

    const toggleTheme = () =>{
        setIsDark(!isDark)
    }
  return {
    isDark,
    toggleTheme
  }
}

export default useTheme




// import {useCallback, useEffect,useState} from 'react'

// export const useTheme = () =>{
//     const [isDark,setIsDark] = useState(false)
//     //function to handle theme switch
//     const toggleTheme = ():void => setIsDark(!isDark)


//     //effect to run on initial load
//     useEffect(()=>{
//         if(localStorage.getItem('theme')===null){
//             if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
//                 setIsDark(true)
//             }
//             else{
//                 setIsDark(false)
//             }
//         }
//         else{
//             setIsDark(localStorage.getItem('theme')==='dark'?true:false)
//             console.log(`set theme preference: ${isDark}`)
//         }
//     },[])


//     // effect to run on theme change
//     useEffect(()=>{
//         const getThemeValue = ():string =>isDark?'dark':'light'
//         console.log(`effect run theme change called`)
//         if(isDark){
//             console.log(`isdark becomes true`)
//             document.documentElement.classList.add('dark')
//         }
//         else{
//             console.log(`isdark is false hence setting theme as light`)
//             document.documentElement.classList.remove('dark')
            
//         }
//         localStorage.setItem('theme',getThemeValue())
//     },[isDark])

    

//     return {isDark,toggleTheme}
// }

// export default useTheme

