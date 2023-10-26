import { useState } from "react";



interface CounterReturnType  {
    count: number,
    incrementCount:()=>void
}

const useCounter = ():CounterReturnType =>{
    const [count,setCount] = useState<number>(0)

    const incrementCount = ():void =>{
        setCount(prev=>prev+1)
    }
    return{count,incrementCount}
}

export default useCounter