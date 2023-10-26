import TestComponent from './TestComponent'
import './index.css'
import {AiOutlineHome} from 'react-icons/ai'
const Test:React.FC = () => {
  return (
    <div>
        <h1>React Test Page</h1>
        <AiOutlineHome  className='home-icon' onClick={()=>alert(`Hello world`)}/>
        <h1>Test Component</h1>
        <TestComponent/>
    </div>
  )
}

export default Test