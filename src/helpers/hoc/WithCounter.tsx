import React from 'react'
import useCounter from '../useCounter'
import { ButtonClickHookTypes } from '../customhooks/useButtonClick'

const WithCounter = (BaseComponent:React.ComponentType<ButtonClickHookTypes>) => {
 function NewComponent(){
    const {count,incrementCount} = useCounter()
    return <BaseComponent count={count} incrementCount={incrementCount} />
  }

  return NewComponent
}

export default WithCounter