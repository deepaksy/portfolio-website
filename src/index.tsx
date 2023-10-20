import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import './styles/index.css'
import AppRouter from './AppRouter'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <React.StrictMode>
    <AppRouter/>
  // </React.StrictMode>
)

reportWebVitals();