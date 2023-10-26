import { useState } from "react"

export type ButtonClickHookTypes = {
    count:number,
    incrementCount:()=>void
}


export const useButtonClick = ():ButtonClickHookTypes =>{
    const [count,setCount] = useState(0)
    function incrementCount(){
        setCount(prev=>prev+1)
    }
    return{count,incrementCount}
}

export default useButtonClick