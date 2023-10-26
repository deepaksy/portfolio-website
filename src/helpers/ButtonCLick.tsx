import React from 'react'
import useCounter from './useCounter'

interface withCounter {
    count:number,
    incrementCount:()=>void
}

function UseButtonClick(WrappedComponent:React.ComponentType<withCounter>){
    function NewComponent(){
        const {count,incrementCount} = useCounter()
        return <WrappedComponent count={count} incrementCount={incrementCount}/>
    }
    return NewComponent
}

export default UseButtonClick