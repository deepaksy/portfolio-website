import WithCounter from '../../helpers/hoc/WithCounter'



const TestComponent = ({count,incrementCount}:any):any => {
  return (
    <div>
        <button onClick={()=>incrementCount()}>Count - {count}</button>
    </div>
  )
}


export default WithCounter(TestComponent)