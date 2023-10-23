import useSetTitle from './helpers/useSetTitle'
import Introduction from './pages/Introduction'
import './styles/App.css'


const App = () =>{
  useSetTitle('Deepak Suryawanshi')
  return(
    <div className='App'>
      <Introduction/>
      <section id='xyz'
      style={{
        minHeight:'100vh'
      }}>
        <h1>Hi</h1>
      </section>
      <section id='abc'
      style={{
        minHeight:'100vh'
      }}>
        <h1>hello</h1>
      </section>
    </div>
  )
}

export default App