import UseButtonClick from '../../helpers/ButtonCLick'



const TestComponent = ({count,incrementCount}:any):any => {
  return (
    <div>
        <button onClick={()=>incrementCount()}>Count - {count}</button>
    </div>
  )
}


export default UseButtonClick(TestComponent)