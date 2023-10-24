import 
{
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import App from './App'
import Navbar from './components/Navbar'
import About from './pages/About'
import Feedback from './pages/Feedback'
import ButtonNavbar from './components/BottomNavbar'
import Test from './pages/Test'

const AppRouter = () => {
  return (
    <Router basename='portfolio-website'>
      <Navbar/> 
        <Routes >
            <Route path='/' element={<App/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/feedback' element={<Feedback/>}/>
            <Route path='/test' element={<Test/>} />
        </Routes>
        <ButtonNavbar/>
    </Router>
  )
}

export default AppRouter