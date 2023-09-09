import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MainPage from './pages/MainPg.jsx'
import PortfolioPage from './pages/PortfolioPg.jsx'
import AboutPage from './pages/AboutPg.jsx'
import {createBrowserRouter} from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      }
      
      
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <App router={router}/>
)
