import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Nav from '../components/navbar'
import MainPage from './pages/MainPg'
import PortfolioPage from './pages/PortfolioPg'
function App() {
  // const [count, setCount] = useState(0)

  const [currentPage, setCurrentPage] = useState("Home")
  function render() {
    if (currentPage == "Home") {
      return <MainPage />
    } else if (currentPage == "Portfolio") {
      return <PortfolioPage />
    }
  }
  return (
    <>
    <button
    onClick={() => {
        setCurrentPage("Home")
    }}
>Home</button>

<button
    onClick={() => {
        setCurrentPage("Portfolio")
    }}
>Projects</button>
      <Nav />
      {render()}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p> */}
    </>
  )
}

export default App;
